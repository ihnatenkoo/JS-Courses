export const calculateRentalCost = (rentalDays) => {
  if ('number' !== typeof rentalDays) {
    throw new Error(
      `Error! Value ${rentalDays} - is not a Number. Pleace pass to the function correct value`,
    );
  }

  let totalCost;
  const dayCost = 40;
  const discountMore2Days = 20;
  const discountMore6Days = 50;

  if (rentalDays >= 3 && rentalDays < 7) {
    totalCost = rentalDays * dayCost - discountMore2Days;
  } else if (rentalDays >= 7) {
    totalCost = rentalDays * dayCost - discountMore6Days;
  } else {
    totalCost = rentalDays * dayCost;
  }

  return totalCost;
};
