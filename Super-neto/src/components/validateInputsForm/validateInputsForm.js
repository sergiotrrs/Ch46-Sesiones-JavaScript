import { validateFullName } from "./validateFullName.js";

const validateInputsForm = (formData) => {
  const results = {
    isValid: true,
    error: "",
  };

  const checkFullName = validateFullName(formData.firstName) 
  if (  checkFullName.isValid === false ){
    results.isValid = false;
    results.error = checkFullName.error;
  }

  return results;
};

export { validateInputsForm };