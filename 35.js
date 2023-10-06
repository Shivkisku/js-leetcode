// Define the isValid function
const isValid = function(s) {
    const stack = [];
    for (let c of s) {
      if (c === '(') stack.push(')');
      else if (c === '{') stack.push('}');
      else if (c === '[') stack.push(']');
      else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    return stack.length === 0;
  };
  
  // Test the function with a sample input
  const inputString1 = "()";
  const inputString2 = "()[]{}";
  const inputString3 = "(]";
  const inputString4 = "([)]";
  const inputString5 = "{[]}";
  
  console.log(`Is "${inputString1}" valid? ${isValid(inputString1)}`);
  console.log(`Is "${inputString2}" valid? ${isValid(inputString2)}`);
  console.log(`Is "${inputString3}" valid? ${isValid(inputString3)}`);
  console.log(`Is "${inputString4}" valid? ${isValid(inputString4)}`);
  console.log(`Is "${inputString5}" valid? ${isValid(inputString5)}`);
  