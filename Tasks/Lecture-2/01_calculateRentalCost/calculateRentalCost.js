export const calculateRentalCost = (rentalDays) => {
  let cost;

  if (rentalDays >= 3 && rentalDays < 7) {
    cost = rentalDays * 40 - 20;
  } else if (rentalDays >= 7) {
    cost = rentalDays * 40 - 50;
  } else {
    cost = rentalDays * 40;
  }

  return cost;
};

