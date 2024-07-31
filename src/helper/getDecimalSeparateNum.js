export const getDecimalSeparateNum = (number) => {
  return new Intl.NumberFormat("en-IN").format(number);
};
