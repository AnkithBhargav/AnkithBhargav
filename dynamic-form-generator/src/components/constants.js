export const DEFAULT_SCHEMA = `{
    "formTitle": "User Registration",
    "fields": [
      {
        "type": "text",
        "label": "Full Name",
        "required": true,
        "placeholder": "Enter your full name"
      },
      {
        "type": "email",
        "label": "Email Address",
        "required": true,
        "placeholder": "Enter your email"
      },
      {
        "type": "select",
        "label": "Country",
        "options": ["USA", "Canada", "UK", "Australia"],
        "required": false
      }
    ]
  }`;