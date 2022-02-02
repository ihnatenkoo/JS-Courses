export const invertObject = (object) => {
  if (typeof object === 'object' && !Array.isArray(object) && object !== null) {
    const entries = Object.entries(object);
    let reverseObject = {};

    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i];

      if (reverseObject.hasOwnProperty(value)) {
        reverseObject = null;
        break;
      } else {
        reverseObject[value] = key;
      }
    }

    return reverseObject;
  } else {
    console.error(
      `Error! Value ${object} - is not an object. Pleace pass to the function correct object`,
    );
  }
};
