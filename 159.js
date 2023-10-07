const canCompleteCircuit = function(gas, cost) {
    let total = 0;  // Total gas - total cost
    let curLeft = 0;  // Gas remaining at the current station
    let currentIdx = 0;  // Current station index
  
    for (let i = 0; i < gas.length; i++) {
      total += gas[i] - cost[i];  // Calculate the difference between gas and cost at each station
      curLeft += gas[i] - cost[i];  // Update the remaining gas at the current station
  
      if (curLeft < 0) {
        currentIdx = i + 1;  // If gas is negative, set the next station as the potential starting point
        curLeft = 0;  // Reset the remaining gas
      }
    }
  
    return total < 0 ? -1 : currentIdx;  // If total is negative, there is no valid starting point, otherwise return the starting index
  }
  
  // Example usage:
  const gas = [1, 2, 3, 4, 5];
  const cost = [3, 4, 5, 1, 2];
  const startingIdx = canCompleteCircuit(gas, cost);
  console.log("Starting gas station index:", startingIdx);
  