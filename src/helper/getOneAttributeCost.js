import { getFormateNumber } from "./getFormateNumber";

export const getOneAttributreCost = (cost, mul) => {
  return getFormateNumber((Number(cost) * Number(mul)).toString());
};
