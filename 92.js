const fullJustify = function(words, maxWidth) {
    const res = []
    let curRow = []
    let numOfChars = 0
    
    for (let w of words) {
      if (numOfChars + w.length + curRow.length > maxWidth) {
        for(let i = 0; i < maxWidth - numOfChars; i++) {
          if(curRow.length === 1) {
            curRow[0] += ' '
          } else {
            curRow[i % (curRow.length - 1)] += ' '
          }
        }
        res.push(curRow.join(''))
        curRow = []
        numOfChars = 0
      }
      curRow.push(w)
      numOfChars += w.length
    }
  
    const numOfSpace = maxWidth - numOfChars - (curRow.length - 1)
    let tail = ''
    for(let i = 0; i < numOfSpace; i++) tail += ' '
    res.push(curRow.join(' ') + tail)
  
    return res
  };

const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 12; // Replace with your desired maxWidth

const result = fullJustify(words, maxWidth);
console.log(result); // Print the result
