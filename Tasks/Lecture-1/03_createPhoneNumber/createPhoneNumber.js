export const createPhoneNumber = (number) => (
  number.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
);
