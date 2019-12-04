// C
// R
// U
// D


// #1. Map: translate from one array to another

// javascript "dictionaries"
// are ket/value pairs
// surrounded by curly braces
const recipesObj = {
    cow: "hamburger",
    potato: "fries",
    chicken: "fried chicken",
    corn: "popcorn",

    // !important! the order of your key value pair is never guaranteed
    // the browser optimizes how it's storing that info
    alienFood: {
        "rice": "ricemoji",
        "beans": "beanemoji"
    },
    1: "milk"
};

////  to retrieve a value, you can:
// #1. use square brackets and specify the key
//      object[key]
const anIngredient = "cow";
recipesObj[anIngredient];
// use square brackets when your keyname is in a variable or your keyname is a scpecial character

// #2. use dot notation
//      object.key
recipesObj.potato;

// Nested retrieval
let yeeter = recipesObj.alienFood["rice"];

// for-of throws an error. Objects are not iterable
for(let ingredient in recipesObj) {
    // console.log(ingredient)
}

//// BUT...
// for-of will work if you iterate through the keys
// you can use Object.keys to get an array of keynames
// don't forget to use the bracket syntax when your keyname is in a variable

for(let ingredient of Object.keys(recipesObj)) {
    // console.log(ingredient);
    // console.log(recipesObj[ingredient]);
}

//// To update a sot in an object
//just reassign that spot

recipesObj.potato = "potato salad";
recipesObj["potato"] = "baked potato";

// if a key doesn't exist yet, it adds a new key/value pair to the object

recipesObj["wheat"] = "beer";
recipesObj.wheat = "beer";
// console.log(recipesObj.wheat)

delete recipesObj.potato;
// console.log(recipesObj);


const recipesObj2 = {
    cow: "hamburger",
    potato: "fries",
    chicken: "fried chicken",
    corn: "popcorn",
    alienFood: {
        "rice": "ricemoji",
        "beans": "beanemoji"
    },
    1: "milk"
};

// Transform the ingredient into something you can eat

const ingredientsArray = [
    "cow",
    "potato",
    "chicken",
    "corn"
];

function cook(ingredient) {
    const recipesObj2 = {
        cow: "hamburger",
        potato: "fries",
        chicken: "fried chicken",
        corn: "popcorn"
    };
    return recipesObj2[ingredient];
}


////    Is it vegitarian? 


function isVegitarian(food) {
    const veggies = [
        "fries",
        "popcorn"
    ];
    if (veggies.includes(food)) {
        return true;
    } else {
        return false;
    }
    
}

const foods = ingredientsArray.map(cook);
const veggieFoods = foods.filter(isVegitarian);

const theVeggies = ingredientsArray.map(cook).filter(isVegitarian);


// const foodsArray = Object.values(recipesObj2);
// foodsArray.filter(isVegitarian);





// const addEx = (x) => x += "!";
// const thanksGiving = ingredientsArray.map(addEx); // ["cow!", "potato!", "chicken!", "corn!"]

