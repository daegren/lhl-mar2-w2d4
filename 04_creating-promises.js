
const divide = (dividend, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      return reject(new Error('Cannot divide by zero'))
    }

    const result = dividend / divisor
    resolve(result)
  })
}

const values = [
  [25, 0],
  [10, 5],
  [25, 5],
  [100, 10],
  [90, 30]
]

for (const [a, b] of values) {
  divide(a, b)
    .then(result => {
      console.log(`${a} / ${b} = ${result}`)
    })
    .catch(err => {
      console.error(err)
    })
}

// divide(10, 0)
//   .then(result => {
//     console.log('10 / 2 =', result)
//   })
//   .catch(err => {
//     console.error(err)
//   })
