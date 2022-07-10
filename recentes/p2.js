//const { toWord } = require("./projeto")

require('rootpath')()

const main = require('./projeto')
const input = process.argv[2]

console.log(main.toWord(input))