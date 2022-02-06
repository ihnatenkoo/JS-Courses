export const makeArmy = (count) => {
  if ('number' !== typeof count) {
    throw new Error(
      `Error! Value ${count} - is not a Number. Pleace pass to the function correct value`,
    );
  }

  const armyArray = [];
  let counter = 0;

  while (counter !== count) {
    const shooter = ((index) => {
      return () => index;
    })(counter);

    armyArray.push(shooter);
    counter++;
  }

  return armyArray;
};
