import React, { useState } from 'react';
import JsonEditor from './JsonEditor';
import FormPreview from './FormPreview';
import { DEFAULT_SCHEMA } from './constants';
import { validateJSON } from './utils';

const DynamicFormGenerator = () => {
  const [jsonInput, setJsonInput] = useState(DEFAULT_SCHEMA);
  const [parsedJSON, setParsedJSON] = useState(null);
  const [jsonError, setJsonError] = useState(null);
  const [formData, setFormData] = useState({});

  const handleJsonChange = (e) => {
    const newValue = e.target.value;
    setJsonInput(newValue);
    validateJSON(newValue, setParsedJSON, setJsonError);
  };

  const handleFormChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <JsonEditor
            jsonInput={jsonInput}
            handleJsonChange={handleJsonChange}
            jsonError={jsonError}
            parsedJSON={parsedJSON}
          />
          <FormPreview
            parsedJSON={parsedJSON}
            formData={formData}
            handleFormChange={handleFormChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicFormGenerator;