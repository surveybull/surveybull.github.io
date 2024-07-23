export const getFormateNumber = (amount) => {
  if (amount.includes(".")) {
    return Number(amount).toFixed(2);
  } else {
    return Number(amount);
  }
};
