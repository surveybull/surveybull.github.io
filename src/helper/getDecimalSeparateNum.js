export const getDecimalSeparateNum = (number) => {
  // return new Intl.NumberFormat("en-IN").format(number);
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 6,
    minimumFractionDigits: 0,
  }).format(number);
};
