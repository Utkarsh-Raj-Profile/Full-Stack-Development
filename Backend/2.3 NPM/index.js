// var generateName = require('sillyname');        This is common javaScript.
import generateName from "sillyname";              //This is ECAMAScript //Module
import {randomSuperhero} from 'superheroes';
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);
console.log(`My SuperHero name is ${randomSuperhero()}.`);