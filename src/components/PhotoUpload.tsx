
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Upload, Camera, Image as ImageIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoUploadProps {
  onImageSelected: (image: HTMLImageElement, file: File) => void;
  className?: string;
  isProcessing?: boolean;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ 
  onImageSelected, 
  className,
  isProcessing = false
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const processFile = (file: File) => {
    // Check if the file is an image
    if (!file.type.match('image.*')) {
      alert('Please select an image file');
      return;
    }
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
      if (e.target?.result) {
        setPreview(e.target.result as string);
        
        // Create image element for the model
        const img = new Image();
        img.onload = () => {
          if (imgRef.current) {
            imgRef.current.src = img.src;
          }
          onImageSelected(img, file);
        };
        img.src = e.target.result as string;
      }
    };
    
    reader.readAsDataURL(file);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };
  
  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleCameraClick = () => {
    // For a real app, we would integrate with device camera
    // For now, we'll just trigger the file browser
    fileInputRef.current?.click();
  };
  
  const handleClearImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className={cn("w-full", className)}>
      {!preview ? (
        <div 
          className={cn(
            "border-2 border-dashed rounded-xl p-8 transition-all duration-200 animate-fade-in",
            "flex flex-col items-center justify-center text-center",
            isDragging ? "border-primary bg-primary/5" : "border-border",
            "hover:bg-secondary/40 cursor-pointer"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          
          <h3 className="text-lg font-medium mb-2">Upload Wildlife Photo</h3>
          <p className="text-muted-foreground mb-4 max-w-md">
            Drag and drop your photo here, or click to browse. We'll identify the species and provide safety information.
          </p>
          
          <div className="flex gap-3">
            <Button
              variant="outline" 
              size="sm" 
              type="button"
              className="glass-button"
              onClick={(e) => {
                e.stopPropagation();
                handleBrowseClick();
              }}
            >
              <ImageIcon className="mr-2 h-4 w-4" />
              Browse Files
            </Button>
            
            <Button
              variant="outline" 
              size="sm" 
              type="button"
              className="glass-button"
              onClick={(e) => {
                e.stopPropagation();
                handleCameraClick();
              }}
            >
              <Camera className="mr-2 h-4 w-4" />
              Take Photo
            </Button>
          </div>
          
          <input 
            ref={fileInputRef}
            type="file" 
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="relative rounded-xl overflow-hidden shadow-md animate-scale-in">
          <img 
            ref={imgRef}
            src={preview} 
            alt="Wildlife preview" 
            className={cn(
              "w-full h-auto object-cover transition-opacity duration-200",
              isProcessing ? "opacity-50" : "opacity-100"
            )}
          />
          
          {isProcessing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-xs">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mb-2"></div>
                <p className="text-white font-medium">Identifying species...</p>
              </div>
            </div>
          )}
          
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-2 right-2 rounded-full shadow-md"
            onClick={handleClearImage}
            disabled={isProcessing}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
