const intervals = [[1, 3], [6, 9]];
const newInterval = [2, 5]; // Replace with your new interval

const insert = function(intervals, newInterval) {
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) i++;
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    intervals.splice(i, 1);
  }
  intervals.splice(i, 0, newInterval);
  return intervals;
};

const result = insert(intervals, newInterval);
console.log(result); // Print the intervals after inserting the newInterval
