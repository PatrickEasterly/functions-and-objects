const expenses = [
    1234.56,
    89.42,
    9797.10,
    88.88,
    3.14,
    5,
    19.99,
    20.00,
    20.01
]

function expenseCalculator(exp) {
    let total = 0;
    for(let item in exp) {
        total += exp[item];
    }
    return total;
}
// console.log(expenseCalculator(expenses))

///     sum of expenses over $20

function over20(item){
    return item > 20;
}
function expensesOver20(array){
    return array.filter(over20);
}
// console.log(expensesOver20(expenses))


// Next: You get a 10% discount/reimbursement on expenses $100 and greater.
// (That should be a new function that produces a new array of the discounted values. Any values that are less than $100 should remain the same.)

function discounter(arr) {
        ///     place to store new values

    let discounted = [];
    for(let i = 0; i < arr.length; i++) {
        ///     if item is less than 100, put into array as is
        
        if(arr[i] < 100) {
            discounted.push(arr[i]);
        }
        ///     if item is more than 100, take 10% off and put into array
        else {
            let temp = arr[i] * 0.9;
            discounted.push(temp);
        }
    } return discounted;
}

// console.log(discounter(expenses));

// how to transform one array
// into a corresponding array

// #1. Write a function
// that describes how to transform a single item

function discountExpenses(singleExpense) {
    // debugger;
    return singleExpense * 0.9;
}

// #2. Declare a variable to hold the new array. 

let updatedExpenses = expenses.map(discountExpenses);

// console.log(updatedExpenses);

// only over 20 dollars

const twentyOrMore=(arr)=>{
    return arr.filter(function(x){
        return x >= 20;
    })
}
// console.log(twentyOrMore(expenses));

function underTwenty(expenseArray){
    let newArray = [];
    for(let cost of expenseArray){
        if(cost <= 20){
            newArray.push(cost);
        }
    }
    return newArray;
}

let filteredExpenses = underTwenty(expenses);
// console.log(filteredExpenses);



// how to filter out cetrain items

// #1. Write the helper function that knows if one, single
// element should be allowed or not. 
// "Gandolf function"

function isOverTwenty(cost){
    return cost >= 20;
}

// #2. Declare a variable to hold our new, filtered array. 

let highExpenses = expenses.filter(isOverTwenty);
// console.log(highExpenses);

function isUnderTwenty(cost) {
    return cost <= 20;
}

let lowExpenses = expenses.filter(isUnderTwenty);

// console.log(lowExpenses);


function makeTurkey() {
    return "Turkey";
}
const friendsToFeed = [
    "Joe",
    "Eva",
    "Aylor"
];

const meals = friendsToFeed.map(makeTurkey);
// console.log(meals)

///     Arrow functions: Fuck it, gotta learn it someday

const theArrowFunk = (a, b, fun1, fun2) => checkEven(a + b) ? fun1() : fun2();

const checkEven = a => a % 2 == 0;

const arrowEven = () => console.log('Even');

const arrowOdd = () => console.log('Odd');

theArrowFunk(1, 3, arrowEven, arrowOdd);

