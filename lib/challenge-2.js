// TYPE: Long ass word problem with a simple question
//
// PROMPT:
// You have a gift card and you are on a date at a restaurant.
// Your gift card has X amount of dollars and you are only willing to buy 2 entrees
// The entrees have prices and you want to spend the maximum dollar value without going over
// all the prices are unique. What is the maximum dollar value you can spend at the restaurant
// without going over your budget?
//
// TODO:
// make a function that takes an array of unique numbers
// and outputs the closest sum of 2 items without going over
//
// EXAMPLE FUNCTION INVOCATION AND RETURN VALUE:
// challenge([5, 9, 13, 17, 2, 21], 20)
// returns =>
// 19

const challenge = (nums, maxValue) => {
  const vals = nums.sort((a, b) => a - b).filter(val => val <= maxValue)
  if (vals.length === 0) { return undefined }
  let currMax = 0
  for (let i = 0; i < vals.length; i++) {
    for (let j = vals.length - 1; j >= 0; j--) {
      if (vals[i] !== vals[j] && vals[i] + vals[j] > currMax && vals[i] + vals[j] <= maxValue) {
        currMax = vals[i] + vals[j]
        if (currMax === maxValue) { return currMax }
      }
    }
  }
  return currMax
}

module.exports = challenge
