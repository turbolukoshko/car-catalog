export const calculateCarRentalAmount = (city_mpg: number, year: number) => {
  // Base rental price per day in USD
  const basePricePerDay = 50;

  // Additional rate per mile driven
  const mileageFactor = 0.1;

  // Additional rate per year of vihicle age
  const ageFactor = 0.05;

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRage = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRage;

  return rentalRatePerDay.toFixed();
};
