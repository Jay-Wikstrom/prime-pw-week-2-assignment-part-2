// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//  We create a variable called name and set it to Dane as a string.
// We then check if the name is equal to Mary.  If it does equal Mary we console.log 'Hi, Mary!'
// The name does not equal Mary so the code will instead console.log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret and a variable called code.  We set code = to the number 123.
// We then check if code is equal to 123. It does so we change the variable secret to equal the string 'super'. We also multiple the code variable by 2.
// We then check if the code is greater than 250. It's not (code = 246) so we move on to the next console.log
// We then console.log the variable secret which will log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create 3 variables isStudent which equals true, age which equals the number 34, and zip which equals the number 55407
// We then check if isStudent is true and zip is greater than 80000. If this is true the console wil log "You're a student on the West Coast!" The zip variable is not greater than 80000, so we move on to the next line of code.
// We then check if isStudent is false or less than 30 years old. If either of these conditions are met we console.log 'What are your hobbies?' isStudent is true and age is greater than 30, so we move on to the next line of code.
// We then check if isStudent is true and  if this condition is met we console.log 'Welcome to Prime!'
// If none of these conditions are met we console.log ('How about the weather?')
// Because the 2nd else if is met the console.log for this code will be 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// Fix - colorOne should be blue and colorTwo should be red.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //Fix - colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// Fix - It should be and not or. Code in the if statement should be (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// Fix - We should be checking if age greater than or equal minAge (age >= minAge). The console.logs need to be flipped.
// if(age >= minAge){
//    console.log('enter');
//  } else {
//    console.log('no enter')
//  }

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
