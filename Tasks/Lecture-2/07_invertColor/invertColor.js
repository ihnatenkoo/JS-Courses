export const invertColor = (hexColor) => {

  const hexSymbols = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

  let invertHex = '#';

  for (let i = 0; i < hexColor.length; i++) {
    const index = hexSymbols.indexOf(hexColor[i].toLowerCase());

    if (index > -1) {
      invertHex += hexSymbols.reverse()[index];
    }
  }

  return invertHex;
};