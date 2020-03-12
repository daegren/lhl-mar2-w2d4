const fs = require('fs').promises

const readFourAgileFiles = () => {
  const fileParts = []

  return fs.readFile('data/p1.txt', 'utf8')
    .then(data1 => {
      console.log('data1 is', data1)
      fileParts.push(data1)
      return fs.readFile('data/p2.txt', 'utf8')
    })
    .then(data2 => {
      console.log('data2 is', data2)
      fileParts.push(data2)
      return fs.readFile('data/p3.txt', 'utf8')
    })
    .then(data3 => {
      console.log('data3 is', data3)
      fileParts.push(data3)
      return fs.readFile('data/p4.txt', 'utf8')
    })
    .then(data4 => {
      console.log('data4 is', data4)
      fileParts.push(data4)
      return fileParts
    })
}

readFourAgileFiles()
  .then(fileParts => {
    console.log(fileParts.map(p => p.trim()).join('\n'))
  })
  .catch(err => {
    console.error('Got an error')
    console.error(err)
  })
