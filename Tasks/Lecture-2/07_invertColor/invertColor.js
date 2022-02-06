export const invertColor = (hexColor) => {
  if ('string' !== typeof hexColor) {
    throw new Error(
      `Error! Value ${hexColor} - is not a string. Pleace pass to the function correct value`,
    );
  }

  const hexSymbols = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  const hexSymbolsReverse = [...hexSymbols].reverse();

  let invertHex = '#';

  // eslint-disable-next-line no-param-reassign
  hexColor = hexColor.toLowerCase();

  for (let i = 0; i < hexColor.length; i++) {
    const index = hexSymbols.indexOf(hexColor[i]);

    if (index > -1) {
      invertHex += hexSymbolsReverse[index];
    }
  }

  return invertHex;
};