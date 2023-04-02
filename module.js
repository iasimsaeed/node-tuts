const sayHi = (name) => {
    console.log(`Hey there ${name}`);
}

module.exports = sayHi

const names = require('./names')
const sayHi = require('./module')
const data = require('./alternative-syntax')

require('./mind-grenade')
// console.log(data)
// sayHi(names.asim)
// sayHi(names.saeed)
// sayHi(saeed)c