export const validateEmail = (email) => {
  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return email.match(validEmail);
};

export const validatePassword = (password) => {
  const minPasswordLength = 6;
  return password.length >= minPasswordLength;
};
