'use strict';

let money;
let time;

function start() {
    money = +prompt("your money on one month");
    time = prompt("YYYY-MM-DD format date");

    while (isNaN(money) || money == "" || money == "null") {
        money = +prompt("your money on one month");
    }
}

start();

let appData = {
    budget: money,
    expences: {},
    optionalExpences: {},
    income: [],
    timeData: time,
    savings: true,
};


function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Obaz. statia rasxodov v mesats", ''),
            b = prompt("Vo scolco obojdetsa", '');
    
    
        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            (typeof(b)) && a != '' && b != '' && a.length < 50) {
            console.log("all");
            appData.expences[a] = b;
        } else {
            i = i - 1;
        }
    }    
}

chooseExpences();

appData.moneyPerDay = (appData.budget / 30).toFixed(2);
alert("Money Per Day: " + appData.moneyPerDay);

if (appData.moneyPerDay < 50) {
    console.log("no doshirak");
} else {
    console.log("doshic est");
}

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("saving's summa"),
            percent = +prompt("precent");

            appData.monthIncome = save/100/12*percent;
            alert("Income: " + appData.monthIncome)
    }
}

checkSavings();