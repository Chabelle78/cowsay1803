
const myInfos = require('./information.js');

const cowSay = require('cowsay');

console.log(cowSay.say({
	text : `Hi my name is ${myInfos.name}, I work on ${myInfos.campus}`,
	e : ".O",
	T : "U "
}));


