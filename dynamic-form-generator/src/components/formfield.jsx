import React from 'react';

const FormField = ({ field, fieldId, formData, handleFormChange }) => {
  const commonClasses = "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  switch (field.type) {
    case 'text':
    case 'email':
      return (
        <div key={fieldId} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            className={commonClasses}
            onChange={(e) => handleFormChange(fieldId, e.target.value)}
            value={formData[fieldId] || ''}
          />
        </div>
      );

    case 'select':
      return (
        <div key={fieldId} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <select
            className={commonClasses}
            required={field.required}
            onChange={(e) => handleFormChange(fieldId, e.target.value)}
            value={formData[fieldId] || ''}
          >
            <option value="">Select {field.label}</option>
            {field.options.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        </div>
      );

    default:
      return null;
  }
};

export default FormField;