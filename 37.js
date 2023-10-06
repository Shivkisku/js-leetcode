// Define the isValid function
const isValid = function(s) {
    const openBrackets = ["(", "{", "["];
    const closeBrackets = [")", "}", "]"];
    const oArr = [];
    let char = "";
    let cidx = 0;
    let oidx = 0;
    for (let i = 0; i < s.length; i++) {
      char = s.charAt(i);
      if (closeBrackets.indexOf(char) !== -1) {
        cidx = closeBrackets.indexOf(char);
        lastOpenBracket = oArr[oArr.length - 1];
        oidx = openBrackets.indexOf(lastOpenBracket);
        if (cidx === oidx) {
          oArr.pop();
        } else {
          return false;
        }
      } else {
        oArr.push(char);
      }
    }
    return oArr.length > 0 ? false : true;
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
  