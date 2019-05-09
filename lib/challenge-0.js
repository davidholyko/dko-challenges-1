// TYPE: Debugging Question
//
// PROMPT:
// the below function has at least one bug and at most four bugs
// modify the code without adding or removing any additional lines
// the function is actually fizzbuzz is an over-engineered, overly complicated way
//
// TODO:
// fix the function below to pass the tests
// without adding new lines of code
// or removing lines of code
// run grunt test to check
//
// EXAMPLE FUNCTION INVOCATION AND RETURN VALUE:
// challenge([{word: 'fizz', number: 3}, {word: 'buzz', number: 5}], 15))
// returns =>
// ['1', '2', 'fizz', '4', 'buzz', '6', '7', '8', 'fizz', 'buzz', '11', 'fizz', '13', '4', 'fizzbuzz' ]

const challenge = function (values, max) {
  const output = []
  for (let i = 1; i <= max; i++) {
    let value = ''
    values.sort((a, b) => a.number - b.number).forEach((item) => {
      if (i % item.number === 0) {
        value += item.word
      }
    })
    output.push(value || i.toString())
  }
  return output
}

module.exports = challenge
