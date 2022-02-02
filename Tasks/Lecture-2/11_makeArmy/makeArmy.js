export const makeArmy = (count) => {
  if (typeof count === 'number') {
    const armyArray = [];

    while (count > 0) {
      const shooter = ((index) => {
        return () => index;
      })(count - 1);

      armyArray.unshift(shooter);
      // eslint-disable-next-line no-param-reassign
      count--;
    }

    return armyArray;
  } else {
    console.error(
      `Error! Value ${count} - is not a number. Pleace pass to the function correct number value`,
    );
  }
};
