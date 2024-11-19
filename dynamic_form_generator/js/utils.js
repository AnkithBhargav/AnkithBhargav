class FormUtils {
    static validateJSON(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            
            // Basic schema validation
            if (!parsed.formTitle || !Array.isArray(parsed.fields)) {
                throw new Error("Invalid schema format. Must include 'formTitle' and 'fields' array.");
            }

            // Validate each field
            parsed.fields.forEach((field, index) => {
                if (!field.type || !field.label) {
                    throw new Error(`Field at index ${index} must have 'type' and 'label' properties.`);
                }
                if (!SUPPORTED_FIELD_TYPES.includes(field.type)) {
                    throw new Error(`Unsupported field type '${field.type}' at index ${index}.`);
                }
                if (field.type === 'select' && (!field.options || !Array.isArray(field.options))) {
                    throw new Error(`Select field at index ${index} must have 'options' array.`);
                }
            });
            

            return {
                isValid: true,
                parsed
            };
        } catch (error) {
            return {
                isValid: false,
                error: error.message
            };
        }
    }

    static updateValidationStatus(isValid, message = '') {
        const statusElement = document.getElementById('validationStatus');
        const errorElement = document.getElementById('jsonError');

        statusElement.textContent = isValid ? 'Valid JSON' : 'Invalid JSON';
        statusElement.className = `validation-status ${isValid ? 'valid' : 'invalid'}`;
        
        errorElement.textContent = message;
        errorElement.style.display = message ? 'block' : 'none';
    }

    static formatJSON(json) {
        try {
            return JSON.stringify(json, null, 2);
        } catch (error) {
            return json;
        }
    }
}
