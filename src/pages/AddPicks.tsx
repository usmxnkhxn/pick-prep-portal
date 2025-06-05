
import React, { useState } from 'react';
import Layout from '../components/Layout';
import ImageUpload from '../components/ImageUpload';
import SubmitButton from '../components/SubmitButton';
import { config } from '../config/config';
import { useToast } from '../hooks/use-toast';

const AddPicks = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setIsSuccess(false);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setIsSuccess(false);
  };

  const handleSubmit = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    
    try {
      // Create FormData to send the image
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('capper_id', config.capper.name.toLowerCase().replace(/\s+/g, '_'));
      
      // Mock API call - replace with actual webhook URL
      const response = await fetch(config.api.webhookUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Success!",
          description: "Your picks have been successfully processed and added to your page.",
        });
        
        // Reset after 3 seconds
        setTimeout(() => {
          setSelectedImage(null);
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit picks');
      }
    } catch (error) {
      console.error('Error submitting picks:', error);
      toast({
        title: "Error",
        description: "Failed to submit picks. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout capperName={config.capper.name} logoUrl={config.capper.logoUrl}>
      <div className="max-w-4xl mx-auto px-4 sm:px-0">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Picks</h1>
          <p className="text-lg text-gray-600">
            Upload a screenshot of your picks and we'll automatically parse them for your community
          </p>
        </div>

        {/* Upload Section */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Upload Your Picks</h2>
            <ImageUpload
              onImageSelect={handleImageSelect}
              selectedImage={selectedImage || undefined}
              onRemoveImage={handleRemoveImage}
            />
          </div>

          {/* Submit Section */}
          {selectedImage && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Process & Add to Page</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Your image will be processed using OCR and AI to extract pick details, stats, and analysis.
                </p>
                <SubmitButton
                  onClick={handleSubmit}
                  isLoading={isLoading}
                  isSuccess={isSuccess}
                  disabled={!selectedImage}
                />
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Tips for Best Results</h3>
            <ul className="text-blue-800 space-y-1">
              <li>• Make sure text is clearly visible and not blurry</li>
              <li>• Include player names, stats, and over/under information</li>
              <li>• Avoid screenshots with excessive background or decorative elements</li>
              <li>• PNG or JPG format works best</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddPicks;
