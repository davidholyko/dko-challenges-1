// TYPE: Debugging Question
//
// PROMPT:
// the below function has at least one bug and at most four bugs
// modify the code without adding or removing any additional lines
// the function is actually fizzbuzz is an over-engineered, overly complicated way

// TODO:
// fix the function below to pass the tests
// without adding new lines of code
// or removing lines of code
// run grunt test to check

const challenge = function (values, max) {
  const output = []
  for (let i = 1; i <= max; i++) {
    let value = ''
    values.sort((a, b) => a.number - b.number).forEach((item, index) => {
      if (i % values[index].number === 0) {
        value += values[index].word
      }
    })
    output.push(value || '' + i)
  }

  return output
}

module.exports = challenge
