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
// const crazyDiff = num => Math.abs( num - 19) 

/* EXERCISE 3
    Write a function "crazyDiff" that computes the absolute difference between a given number and 19.
    It should return triple their absolute difference if the given number is greater than 19.
*/


const crazyDiff = number => {

    let diference = Math.abs(number) - 19

    return diference > 19 
            ? diference * 3 
            : diference 
}

const testExercise3 = () => {

    console.log(crazyDiff(-19)); // => 0
    console.log(crazyDiff(-1));  // => -18
    console.log(crazyDiff(0));   // => -19
    console.log(crazyDiff(4));   // => -15
    console.log(crazyDiff(18));  // => -1
    console.log(crazyDiff(19));  // => 0
    console.log(crazyDiff(37));  // => 18
    console.log(crazyDiff(38));  // => 19
    console.log(crazyDiff(39));  // => 60
    console.log(crazyDiff(40));  // => 63
    console.log(crazyDiff(100)); // => 243
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


const upperFirst = ( string ) => {
    
    const words = string.split(" "); // split the string into an array
    /**
     * 1. get the words one by one form the array 
     * 2. this the help of the index i parameter the word is grabbed form the array redeclared 
     * 3. by adding the first letter capitalized of the word current word 
     * 4. the same word starting from the scond letter 
     */
    words.forEach(( word, i ) => words[i] = word[0].toUpperCase() + word.slice(1))
    
    string = words.join(" ");       // the array is tranformed into a string wiht space between words  by redeclaring string

    return string
}
const upperFirstVariant = ( string ) => {
    
    const words = string.split(" "); // split the string into an array
    /**
     * 1. get the words one by one form the array 
     * 2. this the help of the index i parameter the word is grabbed form the array redeclared 
     * 3. by adding the first letter capitalized of the word current word 
     * 4. the same word starting from the scond letter 
     * 5. add the curent word intro new array
     */
    newWords = words.map(( word, i ) => words[i] = word[0].toUpperCase() + word.slice(1))
    
    string = newWords.join(" ");    // the new array is tranformed into a string wiht space between words by redeclaring string

    return string
}

const upperForVariant = ( string ) => {
    let words = string.split(" ");
    string = [];
    for (let word of words) 
        string.push(word[0].toUpperCase() + word.slice(1))
    return string.join(" ")
}
console.log(upperForVariant("this is a test for exercise"))

function upperFirstUddinVariant(string){ // variable borrowed from Muslim Uddin Arju for learning 
    let separateWord = string.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
        separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}
// console.log(upperFirstUddinVariant("this is a test for exercise"))

const testExercise8 = () => {

    console.log(upperFirst('Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.')); //=>
    console.log(upperFirstVariant('Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.')); //=>
}


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


const giveMeRandom = num => {
    
    if (num < 1 || num > 10)
        return "Please, introduce a number between 0 - 10"

    let randomNum= []
    for (let i = 0; i < num; i++)
        randomNum.push(Math.floor(Math.random() *  10))
        randomNum.join('')

    return randomNum;
}

const testExercise10 = () => {
    
    console.log(giveMeRandom(-1));         //=> Please, introduce a positive number
    console.log(giveMeRandom(0));          //=> Please, introduce a positive number
    console.log(giveMeRandom(1));          //=> 1 digit
    console.log(giveMeRandom(2));          //=> 2 digits
    console.log(giveMeRandom(3));          //=> 3 digits
    console.log(giveMeRandom(433));        //=> 433 digits - tested lower
    // console.log(giveMeRandom(5432424253)); //=> This is going to brake the bash, kind of... 
    
}

const testAllExercise = () => {

    // testExercise1()
    // testExercise2()
    // testExercise3()
    // testExercise4()
    // testExercise5()
    // testExercise6()
    // testExercise7()
    testExercise8()
    // testExercise9()
    // testExercise10()
};
// testAllExercise()


/* WHEN YOU ARE FINISHED
    Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/