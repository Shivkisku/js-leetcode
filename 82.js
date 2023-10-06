const lengthOfLastWord = function(s) {
    const arr = s.split(" ");
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].length > 0) return arr[i].length;
    }
    return 0;
  };
  
  const inputString = "Coffee and Program"; // Replace with your input string
  const result = lengthOfLastWord(inputString);
  console.log(result); // Print the length of the last word
  