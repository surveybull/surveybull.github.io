export const getFormateNumber = (amount) => {
  if (amount.includes(".")) {
    return Number(amount).toFixed(6);
  } else {
    return Number(amount);
  }
};
