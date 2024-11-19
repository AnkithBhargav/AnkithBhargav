class FormBuilder {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    createField(field, index) {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'form-group';

        const label = document.createElement('label');
        label.className = `form-label ${field.required ? 'required' : ''}`;
        label.textContent = field.label;
        fieldGroup.appendChild(label);

        let input;

        switch (field.type) {
            case 'select':
                input = this.createSelectField(field);
                break;
            case 'textarea':
                input = this.createTextareaField(field);
                break;
            default:
                input = this.createInputField(field);
        }

        input.id = `field-${index}`;
        input.className = 'form-control';
        fieldGroup.appendChild(input);

        return fieldGroup;
    }
    

    createInputField(field) {
        const input = document.createElement('input');
        input.type = field.type;
        input.placeholder = field.placeholder || '';
        input.required = field.required || false;
        return input;
    }

    createSelectField(field) {
        const select = document.createElement('select');
        select.required = field.required || false;

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = `Select ${field.label}`;
        select.appendChild(defaultOption);

        field.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });

        return select;
    }
    createSelectField(field) {
        const select = document.createElement('select');
        select.required = field.required || false;

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = `Select ${field.label}`;
        select.appendChild(defaultOption);

        field.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });

        return select;
    }
    createTextareaField(field) {
        const textarea = document.createElement('textarea');
        textarea.placeholder = field.placeholder || '';
        textarea.required = field.required || false;
        textarea.rows = field.rows || 3;
        return textarea;
    }

    buildForm(schema) {
        this.container.innerHTML = '';
        
        const form = document.createElement('form');
        form.onsubmit = (e) => {
            e.preventDefault();
            this.handleSubmit(form);
        };

        const title = document.createElement('h3');
        title.textContent = schema.formTitle;
        title.style.marginBottom = '1.5rem';
        form.appendChild(title);

        schema.fields.forEach((field, index) => {
            form.appendChild(this.createField(field, index));
        });

        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.className = 'submit-btn';
        submitBtn.textContent = 'Submit';
        form.appendChild(submitBtn);

        this.container.appendChild(form);
    }

    handleSubmit(form) {
        const formData = new FormData(form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        console.log('Form submitted:', data);
        // You can add your own form submission logic here
    }

    showPlaceholder() {
        this.container.innerHTML = `
            <div class="placeholder-message">
                Enter valid JSON schema to preview form
            </div>
        `;
    }
}