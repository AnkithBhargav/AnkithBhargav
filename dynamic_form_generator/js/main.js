document.addEventListener('DOMContentLoaded', () => {
    const jsonEditor = document.getElementById('jsonEditor');
    const formBuilder = new FormBuilder('formPreview');

    // Initialize with default schema
    jsonEditor.value = FormUtils.formatJSON(DEFAULT_SCHEMA);
    const initialValidation = FormUtils.validateJSON(jsonEditor.value);
    
    if (initialValidation.isValid) {
        FormUtils.updateValidationStatus(true);
        formBuilder.buildForm(initialValidation.parsed);
    }

    // Handle JSON editor changes
    let debounceTimeout;
    jsonEditor.addEventListener('input', (e) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const result = FormUtils.validateJSON(e.target.value);
            
            FormUtils.updateValidationStatus(
                result.isValid,
                result.isValid ? '' : result.error
            );

            if (result.isValid) {
                formBuilder.buildForm(result.parsed);
            } else {
                formBuilder.showPlaceholder();
            }
        }, 300);
    });
});