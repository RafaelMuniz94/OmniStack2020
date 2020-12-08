import { ValidationError } from "yup";

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError) {
  let validationErrors: Errors = {};
  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });
  //console.log(validationErrors);
  return validationErrors;
}
