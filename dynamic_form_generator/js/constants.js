const DEFAULT_SCHEMA = {
    formTitle: "User Registration",
    fields: [
        {
            type: "text",
            label: "First Name",
            required: true,
            placeholder: "Enter your First Name"
        },
        {
            type: "text",
            label: "Middle Name",
            required: true,
            placeholder: "Enter your Middle Name"
        },
        {
            type: "text",
            label: "Third Name", 
            required: true,
            placeholder: "Enter your Third Name"
        },
       
        {
            type: "email",
            label: "Email Address",
            required: true,
            placeholder: "Enter your email"
        },
        {
            type: "select",
            label: "Country",
            required: false,
            options: ["USA", "Canada", "UK", "Australia","India"]
        },
        {
            type: "phone",
            label: "Mobile Number",
            required: true,
            dialCodes: [
                { code: "+1", country: "USA" },
                { code: "+91", country: "India" },
                { code: "+44", country: "UK" },
                { code: "+61", country: "Australia" }
            ],
            placeholder: "Enter your mobile number"
        }
    ]
};

const SUPPORTED_FIELD_TYPES = ["text", "email", "password", "number", "select", "textarea", "phone"];