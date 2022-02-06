export const invertObject = (object) => {
  if ('object' !== typeof object || Array.isArray(object) || null === object) {
    throw new Error(
      `Error! Value ${object} - is not an Object. Pleace pass to the function correct value`,
    );
  }

  const reverseObject = {};

  for (const [key, value] of Object.entries(object)) {
    if (reverseObject.hasOwnProperty(value)) {
      return null;
    }

    reverseObject[value] = key;
  }

  return reverseObject;
};
