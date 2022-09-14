/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [1, 1, 2, 2, 3];
var removeDuplicates = function (nums) {
  var newArray = [nums[0]];
  nums.forEach((element) => {
    if (element !== newArray[newArray.length - 1]) {
      newArray.push(element);
    }
  });
  console.log(newArray);
};

removeDuplicates(nums);
