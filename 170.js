const evalRPN = function(tokens) {
    const stack = [];
    for (let token of tokens) {
      if (token === '+') {
        stack.push(stack.pop() + stack.pop());
      } else if (token === '-') {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        stack.push(operand1 - operand2);
      } else if (token === '*') {
        stack.push(stack.pop() * stack.pop());
      } else if (token === '/') {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        stack.push(Math.trunc(operand1 / operand2));
      } else {
        stack.push(parseInt(token));
      }
    }
    return stack[0];
  };
  
  const tokens = ["2", "1", "+", "3", "*"];
  const result = evalRPN(tokens);
  console.log(result); // Output should be 9
  