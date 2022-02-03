export const makeArmy = (count) => {
  if ('number' === typeof count) {
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
  } else {
    console.error(
      `Error! Value ${count} - is not a number. Pleace pass to the function correct number value`,
    );
  }
};
