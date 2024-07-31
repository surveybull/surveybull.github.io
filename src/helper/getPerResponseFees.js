import { MAX_FEES_PER_RESPONSE, MAX_RESPONSES, MIN_FEES_PER_RESPONSE, MIN_RESPONSES } from "../constant/app";

export function getPerResponseFees(totalResponses) {
  const res = MIN_RESPONSES;
  if (totalResponses < Number(MIN_RESPONSES)) {
    return "0";
  }
  const valueRange =
    Number(MAX_RESPONSES) - Number(MIN_RESPONSES);
  const normalizedAmount =
    (totalResponses - Number(MAX_FEES_PER_RESPONSE)) / valueRange;
  // Calculate the sigmoid scale
  const sigmoidScale = 1 / (1 + Math.exp(10 * (normalizedAmount - 0.5)));
  const perResponseFees = (
    Number(MIN_FEES_PER_RESPONSE) +
    (Number(MAX_FEES_PER_RESPONSE) -
      Number(MIN_FEES_PER_RESPONSE)) *
      sigmoidScale
  ).toFixed(4);
  return perResponseFees;
}
