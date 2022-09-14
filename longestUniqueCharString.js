/**
 * @param {string} s
 * @return {number}
 */

let lengthOfLongestSubstring = function (s) {
  sArray = s.split(""); //0 and 1 length situations
  if (sArray <= 1) {
    if (!sArray.length) {
      return 0;
    } else return sArray.length;
  }
  let start = 0;
  let number = 0; //start all counters off at 0
  charIndexMap = new Map(); //for storing characters

  for (let end = 0; end < sArray.length; end++) {
    //iterate through string, slide window down.
    if (!charIndexMap.has(sArray[end])) {
      //if is unique
      charIndexMap.set(sArray[end], end);
    } else {
      charIndexMap.set(sArray[end], end);
      var duplicateIndex = charIndexMap.get(sArray[end]);
      number = Math.max(number, end - start);
      console.log(number);
      for (i = start; i <= duplicateIndex; i++) {
        charIndexMap.delete(sArray[i]);
      }
      start = duplicateIndex + 1;
    }
    charIndexMap.set([sArray[end]], end);
  }
  number = Math.max(number, sArray.length - start);
  return number;
};

console.log(lengthOfLongestSubstring("aab"));
