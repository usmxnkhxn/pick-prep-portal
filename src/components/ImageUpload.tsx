
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon, X } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  selectedImage?: File;
  onRemoveImage: () => void;
}

const ImageUpload = ({ onImageSelect, selectedImage, onRemoveImage }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onImageSelect(acceptedFiles[0]);
    }
    setDragActive(false);
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp']
    },
    multiple: false,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false),
  });

  if (selectedImage) {
    return (
      <div className="relative">
        <div className="bg-white rounded-lg border-2 border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Selected Image</h3>
            <button
              onClick={onRemoveImage}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected pick"
              className="max-w-full h-auto rounded-lg shadow-sm max-h-96 mx-auto"
            />
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p className="font-medium">{selectedImage.name}</p>
            <p>{(selectedImage.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
        isDragActive || dragActive
          ? 'border-blue-400 bg-blue-50'
          : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
      }`}
    >
      <input {...getInputProps()} />
      <div className="space-y-4">
        <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
          {isDragActive ? (
            <Upload className="h-8 w-8 text-blue-500" />
          ) : (
            <ImageIcon className="h-8 w-8 text-gray-400" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {isDragActive ? 'Drop your image here' : 'Upload pick screenshot'}
          </h3>
          <p className="text-gray-500">
            Drag and drop your betting slip or pick screenshot, or{' '}
            <span className="text-blue-600 font-medium">browse files</span>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
