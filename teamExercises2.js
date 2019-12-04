
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


///     map functions make a shallow copy of an array -- with stuff done to the elements
///     filter does what it says
///     reduce boils something down into one thing

function add(n1, n2) {
    return n1 + n2;
}

function myReduce(anArray, helperFn, starterValue) {
    // #0. Expect to recieve a starter value
    // Or: set the starter value to the [0] item of the array, and start the loop at [1]


    // #1. Create a variable that we'll use to store our work
    let cumulativeResult = starterValue; //undefined

    // #2. Iterate through the given array 
    for(let item of anArray) {

    // #3. Apply the helper function to the item
    // debugger;
    cumulativeResult = helperFn(cumulativeResult, item);

    // #4. 
    }
    // #5. return the cumulativeResult
    return cumulativeResult;
}

// console.log(myReduce(expenses, add, 0));

let result1 = myReduce(expenses, add, 0);
let result2 = expenses.reduce(add, 0);


///     Arrow function reduce fun


let five = [1, 2, 3, 4, 5];

const multi = (a, b) => a * b;
// function fiveFactorial() { return five.reduce(multi)}
const fiveFactorial = () => five.reduce(multi)

///     