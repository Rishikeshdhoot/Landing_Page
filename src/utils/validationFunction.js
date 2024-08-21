import ValidationError from "../constants/validation-constants";

const validateName = (name) => {
  if (!name) {
    return ValidationError.emptyNameError;
  }

  if (name.length < 3) {
    return ValidationError.lengthNameError;
  }

  if (/\d/.test(name)) {
    return ValidationError.digitNameError;
  }

  return ""; // Empty string indicates no validation errors
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return ValidationError.emailError;
  }
};

const validatePhoneNumber = (phone) => {
  if (!phone) {
    return ValidationError.emptyPhoneNumberError;
  }

  if (!(phone.length === 10 && /^\d+$/.test(phone))) {
    return ValidationError.lengthPhoneNumberError;
  }
};

const validatePatientId = (patientId) => {
  if (!(patientId.length === 6 && /^\d+$/.test(patientId))) {
    return ValidationError.emptyPatientError;
  }
};

const serViceForm = (name, email, phoneNumber, serviceType) => {
  const nameError = validateName(name);
  const emailError = validateEmail(email);
  const phoneError = validatePhoneNumber(phoneNumber);

  if (nameError) {
    return nameError;
  }

  if (emailError) {
    return emailError;
  }

  if (phoneError) {
    return phoneError;
  }

  if (!serviceType) {
    return "Please select serviceType";
  }

  return "";
};

const contactForm = (name, email, phoneNumber) => {
  const nameError = validateName(name);
  const emailError = validateEmail(email);
  const phoneError = validatePhoneNumber(phoneNumber);

  if (nameError) {
    return nameError;
  }

  if (emailError) {
    return emailError;
  }

  if (phoneError) {
    return phoneError;
  }

  return "";
};

export { serViceForm, contactForm };
