export const calculateRentalCost = (rentalDays) => {
  let totalCost;
  const dayCost = 40;
  const discountMore_2_Days = 20;
  const discountMore_6_Days = 50;

  if (rentalDays >= 3 && rentalDays < 7) {
    totalCost = rentalDays * dayCost - discountMore_2_Days;
  } else if (rentalDays >= 7) {
    totalCost = rentalDays * dayCost - discountMore_6_Days;
  } else {
    totalCost = rentalDays * dayCost;
  }

  return totalCost;
};

