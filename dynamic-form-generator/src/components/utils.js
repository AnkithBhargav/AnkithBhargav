export const validateJSON = (input, setParsedJSON, setJsonError) => {
    try {
      const parsed = JSON.parse(input);
      setParsedJSON(parsed);
      setJsonError(null);
      return true;
    } catch (error) {
      setJsonError(error.message);
      return false;
    }
  };