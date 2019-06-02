'use strict';
let money = prompt("your money on one month");
let time = prompt("YYYY-MM-DD format date");
var appData = {
    boudget : money,
    timeData : time,
    expences : {} ,
    optionalExpences : {},
    income : [],
    savings : false,
};
var q1 = prompt("Obaz. statia rasxodov v mesats");
var q2 = prompt("Vo scolco obojdetsa");
var q3 = prompt("Obaz. statia rasxodov v mesats");
var q4 = prompt("Vo scolco obojdetsa");
appData.expences = {
q1:q2
}
alert(q1 / 30);