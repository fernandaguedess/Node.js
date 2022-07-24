//const { toWord } = require("./projeto")

require('rootpath')()

const main = require('./w2n')
const input = process.argv[2]

console.log(main.toWord(input))