// https://app.schoology.com/page/2309232312

function hello(name) {
    if(name == undefined){
        console.log('Hello, world!');
    } else {
        console.log(`Hello, ${name}!`)
    }
}

hello('Mustache');
hello();

///

function madlib(name, subject) {
    return(`${name}'s favorite subject in school is ${subject}`)
}
console.log(madlib('Pat', 'Math'))

///

function tipAmount(bill, service) {
    let tip;
    if (service == "good") {
        tip = bill * 0.2;
    } if (service == "fair"){
        tip = bill * 0.15;
    } if (service == "bad") {
        tip = bill * 0.1;
    }
    return tip;
}

console.log(tipAmount(20, "good"));

///

function totalAmount(bill, service) {
    let theTip = tipAmount(bill, service);
    return bill + theTip;
}
console.log(totalAmount(20, "good"));

/// 

function splitAmount(bill, service, people) {
    let total = totalAmount(bill, service);
    const perPerson = total / people;
    return perPerson;
}
console.log(splitAmount(20, "good", 2));