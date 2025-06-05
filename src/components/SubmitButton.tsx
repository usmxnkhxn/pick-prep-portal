
import React from 'react';
import { Upload, Check, Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  onClick: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  disabled: boolean;
}

const SubmitButton = ({ onClick, isLoading, isSuccess, disabled }: SubmitButtonProps) => {
  const getButtonContent = () => {
    if (isSuccess) {
      return (
        <>
          <Check className="h-5 w-5 mr-2" />
          Successfully Added!
        </>
      );
    }
    
    if (isLoading) {
      return (
        <>
          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
          Processing...
        </>
      );
    }
    
    return (
      <>
        <Upload className="h-5 w-5 mr-2" />
        Add to Page
      </>
    );
  };

  const getButtonClass = () => {
    if (isSuccess) {
      return 'bg-green-600 hover:bg-green-700 focus:ring-green-500';
    }
    
    if (disabled) {
      return 'bg-gray-300 cursor-not-allowed';
    }
    
    return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${getButtonClass()}`}
    >
      {getButtonContent()}
    </button>
  );
};

export default SubmitButton;
