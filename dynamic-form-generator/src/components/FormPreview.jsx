import React from 'react';
import FormField from '../components/formfield';

const FormPreview = ({ parsedJSON, formData, handleFormChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Form Preview</h2>
      <div className="p-4 border rounded-lg bg-gray-50">
        {parsedJSON ? (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {parsedJSON.formTitle}
            </h3>
            {parsedJSON.fields?.map((field, index) => (
              <FormField
                key={`field-${index}`}
                field={field}
                fieldId={`field-${index}`}
                formData={formData}
                handleFormChange={handleFormChange}
              />
            ))}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center text-gray-500 py-8">
            Enter valid JSON schema to preview form
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPreview;