const readline = require('readline-promise').default

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const answers = []

rlp.questionAsync('What is your name? ')
  .then((answer) => {
    answers.push(answer)
    return rlp.questionAsync('What is an activity you like doing? ')
  })
  .then((answer) => {
    answers.push(answer)
    return rlp.questionAsync('What do you listen to while doing that? ')
  })
  .then((answer) => {
    answers.push(answer)
    rlp.close()

    const [name, activity, song] = answers

    console.log()
    console.log('Your profile is ready!')
    console.log(`Your name is ${name} and you like to ${activity} while listening to ${song}`)
  })
