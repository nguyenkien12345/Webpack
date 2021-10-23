import {sum,minus,mul,div} from './libs/caculator';
import { sayGoodbye, sayHello } from './libs/say';

const moment = require("moment");

console.log("Phép cộng: ",sum(10,20));
console.log("Phép trừ: ",minus(100, 50));
console.log("Phép nhân: ",mul(10,30));
console.log("Phép chia: ",div(100,10));

sayHello();
sayGoodbye();

console.log(moment().startOf('day').fromNow());