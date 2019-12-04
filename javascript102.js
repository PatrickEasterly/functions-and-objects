// https://app.schoology.com/page/2309232715

function printNumbersFor(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
// printNumbersFor(5, 10);

///

function printNumbersWhile(start, end) {
    let temp = start;
    while (temp <= end){
        console.log(temp);
        temp ++;
    }
}
// printNumbersWhile(1, 5);

///     print square

function printSquare(size) {
    // place to store stars
    let temp = '';
    // add stars 
    for(let i = 0; i < size; i++){
        temp += '*';
    }
    for(let i = 0; i < size; i++){
        console.log(temp)
    }
    return temp;
}
// printSquare(3);


///     print box

function printBox(size) {
    // 1
    if(size == 1){
        console.log("*");
        return;
    }

    //top and bottom 
    let temp = "";
    while (temp.length < size) {
        temp += "*";
    }
    //top
    console.log(temp);
    
    //middle

    for(let i = 0; i < (size -2); i++){
        let middle = "*";
        for(let i = 0; i < (size -2); i++){
            middle += " ";
        }
        middle += "*";
        console.log(middle);
    }

    //bottom
    console.log(temp);
}
// printBox(1);


///     print a banner

function printBanner(text) {
    let size = text.length;
    let border = "";
    while (border.length < size + 4) {
        border += "*";
    }
    //top
    console.log(border);
    console.log(`* ${text} *`)

    //bottom
    console.log(border);

}

// printBanner("Welcome to YeetVille");

///     factor a number

function factors(number) {

    // place to store those that pass my tests
    let arr1 = [];

    // loop through all numbers less than number

    for (let i = 1; i <= number; i++) {

        // if integer, it is a divisor
        if(Number.isInteger(number/i)) {
            arr1.unshift(number/i);
        }

    }
    return `Factors of ${number}: ${arr1}`;
}

// console.log(factors(12));


///     Caeser Cipher

function cipher(string, offset) {
    let final = "";
    let temp;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < string.length; i++){
        string[i] = string[i].toLowerCase();
        temp = alphabet[(alphabet.indexOf(string[i]) + offset) % 26];
        final += temp;
    }
    console.log(final);
}

// cipher('abcz', 2);

/// Decipher

function decipher(string, offset) {
    ///lowercaser
    let strang = string.split("");
    console.log(strang);
    for(let i = 0; i < strang.length; i++){
        strang[i] = strang[i].toLowerCase();
    }
    console.log(strang);
    strang = strang.join("");
    console.log(strang);
    string = strang;

    let final = "";
    let temp;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < string.length; i++){
        // console.log(string[i]);
        if(string[i] == " "){
            final += " ";
        } else {
            temp = alphabet[(alphabet.indexOf(string[i]) + 26 - offset) % 26];
            final += temp;}
    }

    console.log(final);
    console.log(alphabet[(alphabet.indexOf("t") + 26 - offset) % 26]);
}

// decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13)


function leetspeak(string) {
    string = string.toLowerCase();
    let temp = "";
    let final = "";
    for(let i in string){
            if(string[i] == 'a'){
                final += '4';
            } else if (string[i] == "e"){
                final += "3";
            } else if (string[i] == "g"){
                final += "6";
            } else if (string[i] == "i"){
                final += "1";
            } else if (string[i] == "o"){
                final += "0";
            } else if (string[i] == "s"){
                final += "5";
            } else if (string[i] == "t"){
                final += "7";
            }
        else {
            final += string[i];
        }
    }
    string = final;
    console.log(string);
}

// leetspeak('Patrick Easterly');

///     long vowels

function longVowels(string){
   if(string.includes("oo")){
       string = string.replace("oo", "ooooo");
   } 
   if(string.includes("ee")) {
    string = string.replace("ee", "eeeee");
   }
   return string;
}

// console.log(longVowels('good cheese'));

///     sum the numbers 

function sumNumbers(num){
    let total = 0; 
    for(let i = 0; i < num.length; i++){
        total += num[i];
    }
    return total;
}

// console.log(sumNumbers([1, 2, 3, 4, 5, 6]));

///     just the positives

function positiveNumbers(arr){
    let pos = arr.filter(function(a){
        return a >= 0;
    });
    console.log(pos);
}
// positiveNumbers([1, 2, 3, 4, 5, 6, -1, -2, -3]);

///     matrix addition (fix this later)

function matrixAdd(arrs) {
    let final = [];
    let temp = [];
    for(let i = 0; i < arrs.length; i++){
        final.push([]);
        for(let j = 0; j < arrs[i].length; j++){
            final[i].push([]);
            final[i][j].push(arrs[0][j][i] + arrs[1][j][i]);
        }
    }
    return final;
}

console.log(matrixAdd([
    [[1, 3],    [2, 4]], 
//  0 0 0     0 1 0
    [[5, 2],    [1, 0]]]))
//  1 0 0     1 1 0
// [ [ 6, 5 ], [ 3, 4 ] ]
// 0 0        1 0 




if(matrixAdd([[[1, 3], [2, 4]], [[5, 2], [1, 0]]]) ==  [ [ 6, 5 ], [ 3, 4 ] ]) {
    alert("You fuckin' did it, Pat.")
}
