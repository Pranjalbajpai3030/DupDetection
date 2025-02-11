import React, { useState } from 'react';
import { Upload as UploadIcon, FileText, AlertCircle } from 'lucide-react';

export function Upload() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'checking' | 'uploading' | 'success' | 'error'>('idle');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setUploadStatus('checking');
    
    // Simulate checking for duplicates
    setTimeout(() => {
      const isDuplicate = Math.random() > 0.7; // 30% chance of being a duplicate
      if (isDuplicate) {
        setUploadStatus('error');
      } else {
        setUploadStatus('uploading');
        // Simulate upload
        setTimeout(() => {
          setUploadStatus('success');
        }, 2000);
      }
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-mocha mb-4">Upload Files</h2>
        
        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-mocha bg-blush bg-opacity-10' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-4">
            <UploadIcon className="h-12 w-12 text-mocha" />
            <div className="text-gray-600">
              <p className="font-medium">Drag and drop your files here</p>
              <p className="text-sm">or</p>
            </div>
            <label className="cursor-pointer bg-mocha text-white px-4 py-2 rounded-md hover:bg-darkBrown transition-colors">
              Browse Files
              <input
                type="file"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
              />
            </label>
            <p className="text-sm text-gray-500">
              Supported formats: PDF, DOC, DOCX, JPG, PNG, MP4
            </p>
          </div>
        </div>

        {/* Upload Status */}
        {selectedFile && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-mocha" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{selectedFile.name}</p>
                <p className="text-sm text-gray-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <UploadStatus status={uploadStatus} />
            </div>
          </div>
        )}
      </div>

      {/* Upload Guidelines */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-6 w-6 text-mocha flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900">Upload Guidelines</h3>
            <ul className="mt-2 text-sm text-gray-500 list-disc list-inside space-y-1">
              <li>Maximum file size: 100MB</li>
              <li>Files are automatically checked for duplicates</li>
              <li>Encrypted storage for maximum security</li>
              <li>Instant duplicate detection using advanced hashing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadStatus({ status }: { status: 'idle' | 'checking' | 'uploading' | 'success' | 'error' }) {
  const statusConfig = {
    idle: { text: 'Ready', color: 'text-gray-500' },
    checking: { text: 'Checking for duplicates...', color: 'text-blue-500' },
    uploading: { text: 'Uploading...', color: 'text-blue-500' },
    success: { text: 'Upload complete', color: 'text-green-500' },
    error: { text: 'Duplicate found', color: 'text-red-500' }
  };

  const config = statusConfig[status];

  return (
    <span className={`text-sm font-medium ${config.color}`}>
      {config.text}
    </span>
  );
}