/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

// Copying an array

// Copying an object

// Copying only part of an array/object

let arr1 = [1, 2, 3, 4];
console.log(arr1);

let arr2 = [...arr1, 7];
console.log(arr2);

let camWheatley = {
    fName: 'Cam',
    lName: 'Wheatley',
    girlfriend: 'Hannah',
    datesWorked: [16, 17, 18, 19, 20, 21]
}

camWheatley.datesWorked = camWheatley.datesWorked.concat(23);


let camSpread = [...camWheatley.datesWorked];
console.log(camWheatley.datesWorked);
console.log(camSpread)

// Create an arrow function that creates a sentence

const createASentence = (line1, line2) => (line1 + line2);

sentence = createASentence('Hello World!', ' Good morning');

console.log(sentence);

// Working with the rest operator

const addNumbers = (a, b, c, ...moreNums) => {
    sum = a + b + c;

    for (i in moreNums) {
        sum =+ i;
    };
    return sum
};

result = addNumbers(5, 6, 7, 7, 4, 6, 3);
console.log(result);