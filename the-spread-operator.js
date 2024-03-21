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