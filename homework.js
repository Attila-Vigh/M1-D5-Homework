/*
ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - You can ask for help, reach the Teaching Assistants if needed
    - The solution must be available for the tutors by the end of the day (5PM CET)
    - You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
    Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const rectArea = ( width, height ) => width * height;

const testExercise1 = () => {
    console.log(rectArea(2,3));
}
/* EXERCISE 2
    Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = ( num1, num2 ) => (
    !Number.isInteger(num1) || 
    !Number.isInteger(num2) 
        ? "You need to input integer numbers?" 
        : num1 === num2 
            ? (num1 + num2) * 3 
            : (num1 + num2) 
)

const testExercise2 = () => {

    console.log(crazySum("2", 4));
    console.log(crazySum(2  , 4));
    console.log(crazySum(4  , 4));
    console.log(crazySum(2  , 2));
}

/* EXERCISE 3
    Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
*/

const crazyDiff = num => Math.abs( num - 19) 

const testExercise3 = () => {

    console.log(crazyDiff(-19));
    console.log(crazyDiff(-1));
    console.log(crazyDiff(0));
    console.log(crazyDiff(4));
    console.log(crazyDiff(18));
    console.log(crazyDiff(19));
    console.log(crazyDiff(20));
    console.log(crazyDiff(343));
}

/* EXERCISE 4
    Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = num => ( 
    num ===  400 || num >= 20 && num <= 100 
        ? true 
        : false
)

const testExercise4 = () => {

    console.log(boundary(-19)); //=> false
    console.log(boundary(0));   //=> false
    console.log(boundary(19));  //=> false
    console.log(boundary(20));  //=> true
    console.log(boundary(21));  //=> true
    console.log(boundary(65));  //=> true
    console.log(boundary(99));  //=> true
    console.log(boundary(100)); //=> true
    console.log(boundary(101)); //=> false
    console.log(boundary(254)); //=> false
    console.log(boundary(343)); //=> false
    console.log(boundary(399)); //=> false
    console.log(boundary(400)); //=> true
    console.log(boundary(401)); //=> false
    console.log(boundary(543)); //=> false
    console.log(boundary(545357)); //=> false
}

/* EXERCISE 5
    Write a function "strivify" which accepts a string.
    It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = string =>  string.trim(string.includes("Strive", 0)) ? string : "Strive" + string

const testExercise5 = () => {

    console.log(strivify("Strive"             )); //=> Strive
    console.log(strivify("Strive "            )); //!=> Strive -- trim or not to trim! This is the question!
    console.log(strivify("Strive something"   )); //=> Strive something
    console.log(strivify("I will Strive"      )); //=> I will Strive
    console.log(strivify("Can I Strive later?")); //=> Can I Strive later?
}

/* EXERCISE 6
    Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
    HINT: Module Operator
*/

const check3and7 = num => num > 0 && num%3 === 0 || num%7 === 0 ? true : false

const testExercise6 = () => {

    console.log(check3and7(-1)); //=> false
    console.log(check3and7(0 )); //! => true
    console.log(check3and7(1 )); //=> false
    console.log(check3and7(3 )); //=> true
    console.log(check3and7(5 )); //=> false
    console.log(check3and7(7 )); //=> true
    console.log(check3and7(10)); //=> false
    console.log(check3and7(14)); //=> true
    console.log(check3and7(21)); //=> true
    console.log(check3and7(20)); //=> false
    console.log(check3and7(42)); //=> true
}


/* EXERCISE 7
    Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = string => string.split("").reverse().join("");

const testExercise7 = () => {

    console.log(reverseString("Strive"          )); //=>evirtS
    console.log(reverseString("School"          )); //=>loohcS
    console.log(reverseString("sdr45643r  fwfsg")); //=>gsfwf  r34654rds
    console.log(reverseString("54sf)**(YFNK"    )); //=>KNFY(**)fs45
}

/* EXERCISE 8
    Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

// const upperFirst = ( string ) => {
//     words = string.split(" ");
//     console.log(words);
//     newWords = words.map( word => word[0].toUpperCase() +  word.substring(1))
//     words.join(" ");
//     return words
// }
// const testExercise8 = () => {

//     console.log(upperFirst('Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.')); //=>
// }


/* EXERCISE 9
    Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = string => string.slice(1, string.length-1);


const testExercise9 = () => {

    console.log(cutString('Write')); //=> rit
}



/* EXERCISE 10
    Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

// const giveMeRandom = num => num;


// const testExercise10 = () => {

//     console.log(giveMeRandom('Write')); //=> rit
// }

// const testAllExercise = () => {

//     // testExercise1()
//     // testExercise2()
//     // testExercise3()
//     // testExercise4()
//     // testExercise5()
//     // testExercise6()
//     // testExercise7()
//     // testExercise8()
//     // testExercise9()
//     testExercise10()
// };testAllExercise()


/* WHEN YOU ARE FINISHED
    Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/