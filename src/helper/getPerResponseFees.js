export function getPerResponseFees(totalResponses){
    const res = process.env.MIN_RESPONSES;
      if (totalResponses < Number(process.env.MIN_RESPONSES)) {
        return "0";
      }
      const valueRange = Number(process.env.MAX_RESPONSES)-Number(process.env.MIN_RESPONSES)
      const normalizedAmount = (totalResponses - Number(process.env.MAX_FEES_PER_RESPONSE)) / valueRange; 
      // Calculate the sigmoid scale
      const sigmoidScale = 1 / (1 + Math.exp(10 * (normalizedAmount - 0.5))); 
      const perResponseFees =  (Number(process.env.MIN_FEES_PER_RESPONSE) +
          (Number(process.env.MAX_FEES_PER_RESPONSE) - Number(process.env.MIN_FEES_PER_RESPONSE)) * sigmoidScale).toFixed(4);
      return perResponseFees;
    }