const fs = require('fs')

const fileParts = []

const done = finalResults => {
  console.log('\nAll done!')
  console.log(finalResults.join('\n'))
}

fs.readFile('data/p1.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error('FAILED ON FILE 1')
  }

  console.log('SUCCESS', data.trim())
  fileParts.push(data.trim())

  fs.readFile('data/p2.txt', 'utf8', (err, data) => {
    if (err) {
      return console.error('FAILED ON FILE 2')
    }

    console.log('SUCCESS', data.trim())
    fileParts.push(data.trim())

    fs.readFile('data/p3.txt', 'utf8', (err, data) => {
      if (err) {
        return console.error('FAILED ON FILE 3')
      }

      console.log('SUCCESS', data.trim())
      fileParts.push(data.trim())

      fs.readFile('data/p4.txt', 'utf8', (err, data) => {
        if (err) {
          return console.error('FAILED ON FILE 4')
        }

        console.log('SUCCESS', data.trim())
        fileParts.push(data.trim())
        done(fileParts)
      })
    })
  })
})
