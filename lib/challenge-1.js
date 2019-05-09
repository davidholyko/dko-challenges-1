// TYPE: Algorithms Question
//
// PROMPT:
// Solve the Algorithm with as most efficient time complexity as possible
//
// TODO:
// make a function that takes a string of numbers
// and returns the string with the sorted by the highest count first and descending order second
//
// EXAMPLE FUNCTION INVOCATION AND RETURN VALUE:
// challenge("342395812")
// returns =>
// "332298541"

// const challenge = nums => {
//   const store = {}
//   nums.split('').forEach(num => {
//     store[num] ? store[num]++ : store[num] = 1
//   })
//   const newStore = Object.entries(store).map(([number, amount]) => ({number, amount})).sort((a, b) => b.number - a.number).sort((a, b) => b.amount - a.amount)
//   return newStore.map(item => item.number.repeat(item.amount)).join('')
// }

const challenge = nums => {
  const store = {}
  nums.split('').forEach(num => {
    store[num] ? store[num]++ : store[num] = 1
  })
  return (Object.entries(store).map(([num, amt]) => ({num, amt})).sort((a, b) => {
    if (a.amt < b.amt) { return 1 }
    if (a.amt > b.amt) { return -1 }
    if (a.num < b.num) { return 1 }
    if (a.num > b.num) { return -1 }
  }).map(item => item.num.repeat(item.amt)).join(''))
}

module.exports = challenge
