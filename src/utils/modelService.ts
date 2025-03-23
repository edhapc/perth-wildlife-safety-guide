
import * as tf from '@tensorflow/tfjs';
import speciesData, { Species } from './speciesData';

// We'll use a placeholder model until we have a real trained model
// In a real application, this would be a fine-tuned model for Perth wildlife
class ModelService {
  private model: tf.LayersModel | null = null;
  private classes: string[] = [];
  private isLoading: boolean = false;
  private isLoaded: boolean = false;
  private loadPromise: Promise<void> | null = null;

  constructor() {
    // Initialize the classes based on our speciesData
    this.classes = speciesData.map(species => species.name.toLowerCase());
  }

  async loadModel(): Promise<void> {
    if (this.isLoaded) return;
    
    if (this.isLoading && this.loadPromise) {
      return this.loadPromise;
    }

    this.isLoading = true;

    // Create a promise that we'll resolve when the model is loaded
    this.loadPromise = new Promise(async (resolve) => {
      try {
        // For now, we'll use MobileNet as our base model
        this.model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfhub/mobilenet_v2_050_224/model.json');
        console.log('MobileNet model loaded successfully');
        this.isLoaded = true;
        this.isLoading = false;
        resolve();
      } catch (error) {
        console.error('Error loading model:', error);
        this.isLoading = false;
        // Resolve anyway to allow the app to continue
        resolve();
      }
    });

    return this.loadPromise;
  }

  async identifyImage(imageElement: HTMLImageElement): Promise<{ species: Species | null, confidence: number }> {
    if (!this.model) {
      await this.loadModel();
      
      // If still no model (error in loading), return null
      if (!this.model) {
        console.error('Model not available for prediction');
        return { species: null, confidence: 0 };
      }
    }

    try {
      // Preprocess the image to match MobileNet requirements
      const tensor = tf.browser.fromPixels(imageElement)
        .resizeNearestNeighbor([224, 224]) // Resize to expected input dimensions
        .toFloat()
        .div(tf.scalar(255.0)) // Normalize to [0,1]
        .expandDims(); // Add batch dimension
      
      // Run prediction
      const predictions = this.model.predict(tensor) as tf.Tensor;
      
      // For demo purposes, we'll simulate picking one of our predefined species
      // In a real app, we'd map the model's output classes to our species
      
      // Clean up tensors
      tensor.dispose();
      
      // Get the top prediction index
      const values = await predictions.data();
      predictions.dispose();
      
      // Simulate selecting a species from our data
      // In reality, we would use a properly trained model for Perth wildlife
      const index = Math.floor(Math.random() * speciesData.length);
      const confidence = (Math.random() * 0.3) + 0.7; // Random confidence between 0.7 and 1.0
      
      return {
        species: speciesData[index],
        confidence: confidence
      };
      
    } catch (error) {
      console.error('Error during image identification:', error);
      return { species: null, confidence: 0 };
    }
  }

  isModelLoaded(): boolean {
    return this.isLoaded;
  }
}

// Export a singleton instance
export default new ModelService();
