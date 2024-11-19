import React from 'react';
import { X, Check, AlertCircle } from 'lucide-react';

const JsonEditor = ({ jsonInput, handleJsonChange, jsonError, parsedJSON }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">JSON Schema Editor</h2>
      <div className="relative">
        <textarea
          className="w-full h-[500px] p-4 font-mono text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={jsonInput}
          onChange={handleJsonChange}
          spellCheck="false"
        />
        <div className="absolute top-2 right-2">
          {jsonError ? (
            <div className="flex items-center space-x-2 text-red-500">
              <X size={20} />
              <span className="text-sm">Invalid JSON</span>
            </div>
          ) : parsedJSON ? (
            <div className="flex items-center space-x-2 text-green-500">
              <Check size={20} />
              <span className="text-sm">Valid JSON</span>
            </div>
          ) : null}
        </div>
      </div>
      {jsonError && (
        <div className="flex items-center space-x-2 text-red-500 text-sm">
          <AlertCircle size={16} />
          <span>{jsonError}</span>
        </div>
      )}
    </div>
  );
};

export default JsonEditor;