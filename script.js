// .toFixed() fraction digits - kiek skaiciu lieka po kablelio 
// .shift() istraukia pirma elementa is ARRAY ir ji panaikina jame
// .pop() istraukia paskutini elementa is ARRAY duomenu masyvo ir ji panaikina jame
// .push() prideda elementa duomenu masyvo pabaigoje
// .unshift() prideda elemnta duomenu masyvo pradzioje
// || bent viena salyga turi buti true - atsakymas true
// && visos salygos turi buti true, jei nors viena salyga yra false - atsakymas false
// !! patikrina, ar yra contento viduje


//SYUPX-6LLWH-WD9B2-BD3EX-5DUGR 






////////////2020.10.26////////////////////
/*

// Create a function that takes in a word and determines
// whether or not it is plural. A plural word is one that ends in "s".

function isPlural(plural){
    if(plural[plural.length -1] ==='s'){
        console.log('Plural')
    } else{
        console.log('Singular')
    }
}

isPlural("changes")
isPlural("change")
isPlural("dudes")
isPlural("magic")

////////////////////////////////

// Create a function that takes a string (a random name).
// If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(randomName){
    if(randomName[randomName.length-1] === 'n'){
        return true
    } else {
        return false
    }
}
console.log(isLastCharacterN("Aiden"))
console.log(isLastCharacterN("Piet"))
console.log(isLastCharacterN("Bert"))
console.log(isLastCharacterN("Dean"))


// A typical car can hold four passengers and one driver,
// allowing five people to travel around. Given n number of people,
// return how many cars are needed to seat everyone comfortably.

 function carsNeeded(people){
     return Math.ceil(people / 5)
 }

console.log(carsNeeded(5))
console.log(carsNeeded(11))
console.log(carsNeeded(0))


// Create a function that takes an array and a string as arguments and return the index of the string.

function findIndex(arr, string){
    return arr.indexOf(string)
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"))
console.log(findIndex(["a", "g", "y", "d"], "d"))
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))


// Write a function to check if an array contains a particular number.
// use .includes() method on array to check if it has particular value inside

function check(arr1, numero){
    return arr1.includes(numero)
} 

console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))
 
// Create a function that searches for the index of a given item in an array.
// If the item is present, it should return the index, otherwise, it should return -1.

function search(arr2, numbero){
    if(arr2.includes(numbero)){
        return arr2.indexOf(numbero)
    } else{
        return "-1"
    }
} 

console.log(search([1, 2, 3, 4], 3))
console.log(search([2, 4, 6, 8, 10], 8))
console.log(search([1, 3, 5, 7, 9], 11))

// Create a function that returns true if a string contains any spaces.

 function hasSpaces(text){
     if(text.includes(" ")){
         return true
     } else {
         return false
     }
 }
  

 console.log(hasSpaces("hello"))
 console.log(hasSpaces("hello, world"))
 console.log(hasSpaces(" "))
 console.log(hasSpaces(""))
 console.log(hasSpaces(",./!@#"))

// Given two arrays, which represent two sandwiches, return whether
// both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

 function hasSameBread(arrA,arrB){
     if(arrA[0]===arrA[arrA.length-1] && arrB[0]===arrB[arrB.length-1] && arrA[0]===arrB[0] && arrA[arrA.length-1]===arrB[arrB.length-1]){
         return 'Valgoma'
     } else {
         return 'Nevalgoma'
     }
 }

console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
))

 

console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
))

 

console.log(hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
))

//Creates a function that takes a string and returns the concatenated first and last character.

function firstLast(letters){
    return `${letters[0]}${letters[letters.length-1]}`
} 

console.log(firstLast("ganesh"))
console.log(firstLast("kali"))
console.log(firstLast("shiva"))
console.log(firstLast("vishnu"))
console.log(firstLast("durga"))


///Write a function that stutters a word as if someone is
///struggling to read it. The first two letters are
///repeated twice with an ellipsis ...
///and space after each, and then the word is pronounced with a question mark ?.


function stutter(wordToStutter){
    return console.log(`${wordToStutter[0]}${wordToStutter[1]}... ${wordToStutter[0]}${wordToStutter[1]}... ${wordToStutter}?`)
}

stutter("incredible")// ➞ "in... in... incredible?"
stutter("enthusiastic")// ➞ "en... en... enthusiastic?"
stutter("outstanding")// ➞ "ou... ou... outstanding?"






*/





////////////2020.10.27//////////

/*


// create for loop with 30 cycles, on each iteration check if
// for loop index is more than 20 if yes, console log "cycle index is (CYCLE ID)"

for (x = 0; x < 30; x++){
    if(x > 20){
        console.log(`Cycle index is ${x}`)
    }
}


// go through array with for loop and flip booleans to opposite value

let arrayOfBooleans = [true, false, false, true, true, true, false]

for (x = 0; x < arrayOfBooleans.length; x++){
    arrayOfBooleans[x] = !arrayOfBooleans[x]
}
console.log(arrayOfBooleans)


// goe through array with for loop, if string is 'black mamba' console log
// "(STRING VALUE) is (INDEX) in array, and is one of most poisonous snakes in the world"

let getIndex = ['first', 'second', 'third', 'black mamba', 'fourth', 'fifth']

for(x = 0; x < getIndex.length; x++){
    if(getIndex[x] === 'black mamba'){
        console.log(`${getIndex[x]} is ${x} in array, and is one of the most poisonous snakes`)
    }
}


// create a functions which accepts array data as an argument,
// loops over all items in array and console logs each of them

let arrayOfStrings = ['Labas', 'vakaras', 'ponios', 'ir', 'ponai']

function asilas(arr){
    for (x=0; x < arr.length; x++){
        console.log(arr[x])
    }
}

asilas(arrayOfStrings)




// in function loop over numbers in array multiply each by 3
// console log answer

let arrayOfNumbers = [1, 2, 3, 4, 5, 6,7,8,9]

function idioto(numbero){
    for (x = 0; x < numbero.length; x++){
        arrayOfNumbers[x] = arrayOfNumbers[x] * 3
    }
}
idioto(arrayOfNumbers)
console.log(arrayOfNumbers)

// create function do this in it: 
// with single for loop removes items from wagonsWIthCoal
// and append them to wagonsOfGasoline after this done
// check if wagonsWithCoal has any items, if not change coalCargo boolean to opposite
// do the same with gasolineCargo key
// console log modified object

let freightTrain = {
    wagonsWithCoal: [1,2,3,4,5],
    coalCargo: true,
    wagonsOfGasoline: [],
    gasolineCargo: false
}

function aasile(){
    let len = freightTrain.wagonsWithCoal.length
    for (x = 0; x < len; x++){
        freightTrain.wagonsOfGasoline.push(freightTrain.wagonsWithCoal.pop())
    }
    if(freightTrain.wagonsWithCoal < 1){
        freightTrain.coalCargo = !freightTrain.coalCargo
        freightTrain.gasolineCargo = !freightTrain.gasolineCargo
    }
    console.log(freightTrain)
}
aasile()



// crete a function which takes textObject.arrayWithWords as an argument
// goe through array with words using for loop
// take first letter of each word and add to aWord key in textObject
// console log aWord key after all is done

 

let textObject = {
    arrayWithWords: ['firstWord', 'ipad', 'snow is snowing', 'hamburger'],
    aWord: ''
}

function lastOne(wordsArr){
    for(x = 0; x < wordsArr.length; x++){
        textObject.aWord += wordsArr[x][0] 
    }
}

lastOne(textObject.arrayWithWords)

console.log(textObject.aWord)
*/

/*
// check if stringVariable includes word 'doing' if yes create a function
// which takes stringVariable as an argument and counts how many spaces it has
// call that function

let stringVariable = "Hello people, how are you doing ?"

if(stringVariable.includes('doing')){
    function funk1(space){
        let tarpas = 0
        for(x=0; x < space.length; x++){
            if(space[x] === ' '){
                tarpas++
            }
        }
        console.log(tarpas)
    }
    funk1(stringVariable)
}


////////////////////////////////////////////
 

// create function which takes objectWithKeys as argument ant check which key includes
// word 'actually' in array, make function to return string "{key name} has actually in array"

let objectWithKeys = {
    firstOne: ['hi', 'what', 'is', 'good'],
    second: ['im', 'doing', 'pretty', 'well'],
    third: ['me', 'too', 'actually']
}
 
function funk(arg, name){
    if(arg.includes('actually')){
        return console.log(`${name} has actually in array`)
    }
}
funk(objectWithKeys.firstOne, 'firstOne')
funk(objectWithKeys.second, 'second')
funk(objectWithKeys.third, 'third')
////////////////////////////////////////
 
 

// Luke Skywalker has family and friends. Help him remind them who is who.
// Given a string with a name, return the relation of that person to Luke.
*/
/*

Person              Relation

Darth Vader         father
Leia                sister
Han                 brother in law
R2D2                droid

*/

/*
function relationToLuke(name){
    let say;
    if(name === 'Darth Vader'){
        say = 'father'
    }
    if(name === 'Leia'){
        say = 'sister'
    }
    if(name === 'Han'){
        say = 'brother in law'
    }
    if(name === 'R2D2'){
        say = 'droid'
    }
    console.log('Luke, i am Your '+ say)
}


relationToLuke("Darth Vader")   //➞ "Luke, I am your father."
relationToLuke("Leia")          //➞ "Luke, I am your sister."
relationToLuke("Han")           //➞ "Luke, I am your brother in law."
relationToLuke("R2D2")

///////////////////////////////////////////////////


// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

function getMultipliedArr(arr){
    for(let x = 0; x < arr.length; x++){
        arr[x] = arr[x] * 2;
    } console.log(arr)
} 

getMultipliedArr([2, 5, 3]) //➞ [4, 10, 6]
getMultipliedArr([1, 86, -5]) //➞ [2, 172, -10]
getMultipliedArr([5, 382, 0]) //➞ [10, 764, 0]
 
///////////////////////////////////////////////
 

// Create a function that takes an array of words and transforms it into an array of each word's length.

function wordLengths(howLong){
    for (let x = 0; x < howLong.length; x++){
        howLong[x] = howLong[x].length
    } console.log(howLong)
}


wordLengths(["hello", "world"]) //➞ [5, 5]
wordLengths(["Halloween", "Thanksgiving", "Christmas"]) //➞ [9, 12, 9]
wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) //➞ [3, 5, 9, 4, 2, 3, 8]
 
/////////////////////////////////////////////
 

// Create a function that returns the string "Burp"
// with the amount of "r's" determined by the input parameters of the function.

 function longBurp(manyR){
     let r = ''
     for (x = 0; x < manyR; x++){
         r+= 'r'
     } console.log(`Bu${r}p`)
 }

longBurp(3) //➞ "Burrrp"
longBurp(5) //➞ "Burrrrrp"
longBurp(9) //➞ "Burrrrrrrrrp"
 
////////////////////////////////////////////
 

// Create a function that takes a number and return an array
// of three numbers: half of the number, quarter of the number and an eighth of the number.

function halfQuarterEighth(numero){
    let arr = []
    arr.push(numero/2)
    arr.push(numero/4)
    arr.push(numero/8)
    console.log(arr)
} 


halfQuarterEighth(6) //➞ [3, 1.5, 0.75]
halfQuarterEighth(22) //➞ [11, 5.5, 2.75]
halfQuarterEighth(25) //➞ [12.5, 6.25, 3.125]
 
//////////////////////////////////////////
 

// Create a function that takes a string and returns a string with spaces in between all of the characters.

 function spaceMeOut(argumento){
     let name = ''
     for(x=0; x<argumento.length; x++){
        name+= argumento[x] + ' '
     }console.log(name)
 } 

spaceMeOut("space") //➞ "s p a c e"
spaceMeOut("far out") //➞ "f a r  o u t"
spaceMeOut("elongated musk") //➞ "e l o n g a t e d   m u s k"
 
/////////////////////////////////////////
 

// Create a function that takes an array and returns the sum of all numbers in the array.

 function getSumOfItems(skaicius){
     let sum = 0
     for(x = 0; x < skaicius.length; x++){
        sum+=skaicius[x]
     } console.log(sum)
     
 }

getSumOfItems([2, 7, 4]) //➞ 13
getSumOfItems([45, 3, 0]) //➞ 48
getSumOfItems([-2, 84, 23]) //➞ 105
 



//////////////////////////////////////////////
 

// Given a number and an object with min and max properties,
// return true if the number lies within the given range (inclusive).

function isInRange(num, range){
    if(range.min <= num && num <= range.max){
        return console.log(true)
    } else {
        return console.log(false);
    }
}


isInRange(4, { min: 0, max: 5 }) //➞ true
isInRange(4, { min: 4, max: 5 }) //➞ true
isInRange(4, { min: 6, max: 10 }) //➞ false
isInRange(5, { min: 5, max: 5 }) //➞ true

*/

/*

////////////////2020.10.28///////////

///Create a function which returns the length of a string, WITHOUT using String.length property.

length("Hello World") //➞ 11

length("Edabit") //➞ 6

length("wash your hands!") //➞ 16

function length(string){
    let short = 0
    for(let x = 0; x < string.length; x++){
        short++
    } 
    console.log(short)
} 

// Create a function that returns a number, based on the string provided. Here is a list of all digits (if you are non english speaker):

//"one" 1
//"two" 2
//"three" 3
//"four" 4
//"five" 5
//"six" 6
//"seven" 7
//"eight" 8
//"nine" 9
//"zero" 0

function word(num){
    let answ = null
    num === "one" ? answ = 1 : null
    num === "two" ? answ = 2 : null
    num === "three" ? answ = 3 : null
    num === "four" ? answ = 4 : null
    num === "five" ? answ = 5 : null
    num === "six" ? answ = 6 : null
    num === "seven" ? answ = 7 : null
    num === "eight" ? answ = 8 : null
    num === "nine" ? answ = 9 : null
    num === "zero" ? answ = 0 : null
    console.log(answ)
} 


word("one") //➞ 1

word("two") //➞ 2

word("nine") //➞ 9




//Create a function that returns an array of booleans from a given number by iterating through the
//number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(num2){
    let myArr = []
    for(let x = 0; x < num2.length; x++){
        if(num2[x] === '1'){
            myArr.push('true')
        } else {
            myArr.push('false')
        }
    }console.log(myArr)
}

integerBoolean("100101") //➞ [true, false, false, true, false, true]

integerBoolean("10") //➞ [true, false]
 
integerBoolean("001") //➞ [false, false, true]





//Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arg1){
    let myArr2 = []
    for(let x = 0; x < arg1.length; x++){
        if(typeof arg1[x] === 'number'){
            myArr2.push(arg1[x])
        }
    }console.log(myArr2)
}


filterArray([1, 2, 3, "a", "b", 4]) //➞ [1, 2, 3, 4]

filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) //➞ [0, 1729]

filterArray(["Nothing", "here"]) //➞ []





// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function Go(num3){
    let kintamasis = ''
    for(let x = 0; x < num3; x++){
        kintamasis += '-' 
    }console.log(kintamasis)
}

Go(1) //➞ "-"

Go(5) //➞ "-----"

Go(3) //➞ "---"





// Create a function that adds a string ending to each member in an array.

function addEnding(wordTo, ending){
    for(let x = 0; x < wordTo.length; x++){
        wordTo[x]+= ending
    }
    console.log(wordTo)
} 

addEnding(["clever", "meek", "hurried", "nice"], "ly")

 //➞ ["cleverly", "meekly", "hurriedly", "nicely"]

addEnding(["new", "pander", "scoop"], "er")

 //➞ ["newer", "panderer", "scooper"]

addEnding(["bend", "sharpen", "mean"], "ing")

 //➞ ["bending", "sharpening", "meaning"]

/////////////////////////





//Create a function to multiply all of the values in an array by the amount of values in the given array.

function multiplyByLength(arr4){
    for( let x = 0; x < arr4.length; x++){
        arr4[x] =arr4[x] * arr4.length
    }
    console.log(arr4)
}

multiplyByLength([2, 3, 1, 0]) //➞ [8, 12, 4, 0]
multiplyByLength([4, 1, 1]) //➞ ([12, 3, 3])
multiplyByLength([1, 0, 3, 3, 7, 2, 1]) //➞ [7, 0, 21, 21, 49, 14, 7]
multiplyByLength([0]) //➞ ([0])





// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(num5){
    let numArr = [];
    let newNum = num5
    for (let x = 0; x <= num5; x++) {
      numArr.push(newNum--) 
    }
    console.log(numArr)
}

countdown(5) //➞ [5, 4, 3, 2, 1, 0]
countdown(1) //➞ [1, 0]
countdown(0) //➞ [0]

*/
///////////////

// Create a function that takes two arguments (item, times). The first argument (item) is the item

// that needs repeating while the second argument (times) is the number of times the item is

// to be repeated. Return the result in an array.

// function repeat(item, times){
//     let myArray = []
//         for(let x = 0; x <= times; x++){
//              myArray.push(item)
//     }
//    console.log(myArray)
// }

// repeat("edabit", 3) //➞ ["edabit", "edabit", "edabit"]
// repeat(13, 5) //➞ [13, 13, 13, 13, 13]
// repeat("7", 2) //➞ ["7", "7"]
// repeat(0, 0) //➞ []





//In this exercise you will have to:
//Take a list of names.
//Add "Hello" to every name.
//Make one big string with all greetings.
//The solution should be one string with a comma in between every "Hello (Name)".

// function greetPeople(nameArr){
//     let hello = ''
//     for (let x = 0; x < nameArr.length; x++) {
//          hello += 'Hello ' + nameArr[x]   
//          if(x!==nameArr.length-1){
//              hello += ', '
//          }    
//     }
//     console.log(hello)
// }

// greetPeople(["Joe"]) //➞ "Hello Joe"
// greetPeople(["Angela", "Joe"]) //➞ "Hello Angela, Hello Joe"
// greetPeople(["Frank", "Angela", "Joe"]) //➞ "Hello Frank, Hello Angela, Hello Joe"




// // Create a function that repeats each character in a string n times.


// function repeat(word, count){
//     let string = ''

//     for (let i = 0; i < word.length; i++) {
//         word[i]
        
//         for (let j = 0; j < count; j++) {
//             string += word[i]
            
//         }

//     }
//     console.log(string)
// }

// repeat("mice", 5) //➞ "mmmmmiiiiiccccceeeee"
// repeat("hello", 3) //➞ "hhheeellllllooo"
// repeat("stop", 1) //➞ "stop"














//////////////////////////////////////////////////////////////////////////////////////////   
////////////////////////////////////////////////////////////////////////////////////////// 









//Create a function that takes in two arrays: the array of user-typed words,
 // and the array of correctly-typed words and outputs an array containing
 // 1s (correctly-typed words) and -1s (incorrectly-typed words).






// function correctStream(arr1, arr2){
//     let newArr = []

//     for (let i = 0; i < arr1.length; i++) {

//         arr1[i] === arr2[i] ? newArr.push(1) : newArr.push(-1) 

//     }    

//     console.log(newArr)
// }
     


// correctStream(

//     ["it", "is", "find"],
//     ["it", "is", "fine"]
//     ) //➞ [1, 1, -1]
   
   
// correctStream(
//     ["april", "showrs", "bring", "may", "flowers"],
//     ["april", "showers", "bring", "may", "flowers"]
//     ) //➞ [1, -1, 1, 1, 1]






//////////////////////////////////////////////////////////////////////////////////////////   
////////////////////////////////////////////////////////////////////////////////////////// 











// Create a function that filters out an array of state names into two categories 
//based on the second parameter.

// Abbreviations abb
// Full names full







// function filterStateNames(arr, parameter){

//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
        
//         if (parameter === 'abb'){
//             if (arr[i].length = 2){
//                 newArr.push(arr[i])
//             }
//         }else {
//             if (arr[i].length >2){
//                 newArr.push(arr[i])
//             }
            
//         }
          
//     }
//      console.log(newArr)   
//  }




 
// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")

// //➞ ["CA", "NY"]


// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")

// //➞ ["Arizona", "Nevada"]


// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")

// //➞ ["MT", "NJ", "TX", "ID", "IL"]


// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")

// //➞ []









////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////




















// Hamming distance is the number of characters that differ between two strings.


//To illustrate:

//String1: "abcbba"

//String2: "abcbda"


//Hamming Distance: 1 - "b" vs. "d" is the only difference.

//Create a function that computes the hamming distance between two strings.






// function hammingDistance(string1, string2){

//     let distance = 0
    
//     for (let i = 0; i < string1.length; i++) {
//            string1[i] === string2[i] ? null : distance++
           
//     }
//     console.log(distance)
// }
    



// hammingDistance("abcde", "bcdef") // ➞ 5



// hammingDistance("abcde", "abcde") // ➞ 0



// hammingDistance("strong", "strung") // ➞ 1









////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////








// //Given a string of letters, how many capital letters are there?

// function capitalLetters(string){

//     let count = 0

//     for (let i = 0; i < string.length; i++) {
       
//         if( string[i] >= 'A' && string[i] <= 'Z'){
//             count++
//         }
        
//     }
//     console.log(count);
// }

// capitalLetters("fvLzpxmgXSDrobbgMVrc") //➞ 6



// capitalLetters("JMZWCneOTFLWYwBWxyFw") //➞ 14



// capitalLetters("mqeytbbjwqemcdrdsyvq") //➞ 0






////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////






// Create a function that takes an array of strings and returns an array with
// only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.




// function numInStr(array){

//     let newArr = []

//     for (let i = 0; i < array.length; i++) {
      
//         if(/\d/.test(array[i]) === true ){
//             newArr.push(array[i])
//         }
        
//     }
//     console.log(newArr)
// }




// numInStr(["1a", "a", "2b", "b"]) //➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) //➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) //➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) //➞ ["test1"]







////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////





//Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.





// function jazzify(array){

//     let answer = array.map(item => {
//         if(item.includes('7')){
//             return item 
//         } else{
//             return item + '7'
//         }
//     })
   
//     console.log(answer)
// }




// jazzify(["G", "F", "C"]) //➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) //➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) //➞ []







////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////











//An isogram is a word that has no duplicate letters. 
//Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".




// function isIsogram(string){
//     string = string.toUpperCase()
//     let letterArray = []
//     let boolion = true

//     for (let x = 0; x < string.length; x++){

//         if(letterArray.includes(string[x])){
//             boolion = false
//         }

//     letterArray.push(string[x])
//     }
//     console.log(boolion);
// }
 

// isIsogram("Algorism") // ➞ true

// isIsogram("PasSword") //➞ false
// // Not case sensitive.

// isIsogram("Consecutive") //➞ false







////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////



 

// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.



// function reverseCase(string){

//     let answer = ``

//     for (let i = 0; i < string.length; i++) {
        
//         if(string[i] === string[i].toUpperCase()){
//             answer += string[i].toLowerCase()
//         } else {
//             answer += string[i].toUpperCase()
//         }
           
//     }
//     console.log(answer)
// }



// reverseCase("Happy Birthday") //➞ "hAPPY bIRTHDAY"

// reverseCase("MANY THANKS") //➞ "many thanks"

// reverseCase("sPoNtAnEoUs") //➞ "SpOnTaNeOuS"

 




////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
 








// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.





// function capMe(array){



//    let answer = array.map(item => {

//     let lowerCase = item.toLowerCase()

//     let firstLetter = lowerCase[0].toUpperCase() 

//     for (let i = 1; i < lowerCase.length; i++) {
       
//         firstLetter += lowerCase[i]
        
//     }
//     return firstLetter
//    }) 
//    console.log(answer)
// }

// capMe(["mavis", "senaida", "letty"]) //➞ ["Mavis", "Senaida", "Letty"]

// capMe(["samuel", "MABELLE", "letitia", "meridith"]) //➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) //➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

 








////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////



// Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.




// function flip(arg){

//     if(arg === 1){
//         console.log(0)
//     } else {
//          console.log(1)
//     }
//    
// }


// flip(1) //➞ 0

// flip(0) //➞ 1

 



////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
 




// Create the function that takes an array with objects and returns the sum of people's budgets.



// function getBudgets(arr){

//     let sum = 0

//     arr.map(item => {
//         sum += item.budget
//     })
//     console.log(sum)
// }
 

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) //➞ 65700



// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) //➞ 62600

 



////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////




 

// Create a function to check whether the given parameter is an Object or not.

//  function isObject(arg){

//     return console.log(!!arg)
// }

// isObject(function add(x,y) {return x + y}) //➞ true



// isObject(new RegExp("[a-zA-Z0-9]+$", "g")) //➞ true

 

// isObject(null) //➞ false

 

// isObject("") //➞ false



/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////










//Sam and Frodo need to be close. If they are side by side in the array, your
// function should return true. If there is a name between them, return false.





// function middleEarth(arr){

//     let sam = arr.indexOf("Sam") 

//     let frod = arr.indexOf("Frodo") 

//     if(sam - frod === 1 || sam - frod === -1){
//         return console.log(true)
//     } else {
//         return console.log(false)
//     }

// }
 

// middleEarth(["Frodo", "Sam", "Gandalf"]) //➞ true
// middleEarth(["Frodo", "Saruman", "Sam"]) //➞ false
// middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) //➞ true2






///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////



// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
 
//To illustrate:
 


// function largestSwap(number){

//     let str = number.toString()

//     console.log(str[0] >= str[1] ? true : false);
// }


// largestSwap(27) //➞ false
 
// largestSwap(43) //➞ true
 
// // If 27 is our input, we should return false because swapping the 

//  //digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
 
// largestSwap(14) //➞ false
 
// largestSwap(53) //➞ true
 
// largestSwap(99) //➞ true







///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////






// Create a function that takes an array of strings and returns the words that are exactly four letters.
 



// function isFourLetters(arr){

//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
        
//         if(arr[i].length == 4){
//             newArr.push(arr[i])
//         }
     
//     }
//     console.log(newArr)   
// }



// isFourLetters(["Tomato", "Potato", "Pair"]) // ➞ ["Pair"]
 
// isFourLetters(["Kangaroo", "Bear", "Fox"]) //➞ ["Bear"]
 
// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) //➞ ["Ryan", "Matt"]
 
 



///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////





// Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.
 




// function dictionary(start, array){

//     let newArr = [];


//     array.map(word =>{
//         word.indexOf(start) === 0 ? newArr.push(word)
//     })      
//     console.log(newArr)
// }



// dictionary("bu", ["button", "breakfast", "border"]) //➞ ["button"]
 
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) //➞ ["triplet", "tries", trip"]
 
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) //➞ []







 

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
 












// Create a function that takes two parameters and, if both parameters are strings,

// add them as if they were integers or if the two parameters are integers, concatenate them.









// function stupidAddition(arg1,arg2){

//     let answer = ''

//     if(typeof arg1 === 'number' && typeof arg2 === 'number' ) {
//        return console.log(String(arg1) + String(arg2))
//     }
//     if(typeof arg1 === 'string' && typeof arg2 === 'string' ) {
//         return console.log(Number(arg1) + Number(arg2))
//     }   
//     return console.log(null);    

    

// }
 
// stupidAddition(1, 2) //➞ "12"
 
// stupidAddition("1", "2") //➞ 3
 
// stupidAddition("1", 2) //➞ null






///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////








// Create a function that changes specific words into emoticons. 
// Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

//smile    :D
//grin    :)
//sad    :(
//mad    :P


// function emotify(string){

//     let newString = 'Make me '
        
//     if(string.includes('smile')){
//          newString += ':D'
//     }
//     if(string.includes('grin')){
//         newString += ':)'
//     }
//     if(string.includes('sad')){
//         newString += ':('
//     }
//     console.log(newString)
// }


// emotify("Make me smile") //➞ "Make me :D"
// emotify("Make me grin") //➞ "Make me :)"
// emotify("Make me sad") //➞ "Make me :("

 






///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////






// Write a function that takes a string name and a number 
// num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.







// function sayHelloBye(name,num){

//     let newString = ''

//     if(num === 1){
//         newString += 'Hello ' + name
//     } else {
//         newString += 'Bye ' + name
//     }
//     console.log(newString)
// }



// sayHelloBye("alon", 1) //➞ "Hello Alon"
// sayHelloBye("Tomi", 0) //➞ "Bye Tomi"
// sayHelloBye("jose", 0) //➞ "Bye Jose"

 




/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

 




// Create a function that takes a number as an argument and returns
// true or false depending on whether the number is symmetrical or not. 
// A number is symmetrical when it is the same as its reverse.



// function isSymmetrical(num){

//     let str = num.toString()

//     let trigger = true

//     for (let i = 0; i < str.length ; i++) {
        
//         if(str[i] != str[str.length-i-1]){
//             trigger = false
//         } 
//     }
//     console.log(trigger)
// }

// isSymmetrical(7227) //➞ true
// isSymmetrical(12567) //➞ false
// isSymmetrical(44444444) //➞ true
// isSymmetrical(9939) //➞ false
// isSymmetrical(1112111) //➞ true

 






//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

 






// Arrays can be mixed with various types. Your task for this challenge 
// is to sum all the number elements in the given array. Create a function
// that takes an array and returns the sum of all numbers in the array.




// function numbersSum(arr){

//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
        
//         if(typeof arr[i] === 'number'){
//             sum += arr[i]
//         }
      
//     }
//     console.log(sum)
// }



// numbersSum([1, 2, "13", "4", "645"]) //➞ 3
// numbersSum([true, false, "123", "75"]) //➞ 0
// numbersSum([1, 2, 3, 4, 5, true]) //➞ 15








//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////








// Create a function that takes an array of hurdle heights and a jumper's jump height,
// and determine whether or not the hurdler can clear all the hurdles.
//A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
 


// function hurdleJump(arr, howHigh){

//     let answer = true

//     for (let i = 0; i < arr.length; i++) {
    
//         if(arr[i] > howHigh){
//             answer = false
//         } 

//     }
//   console.log(answer)
// }


// hurdleJump([1, 2, 3, 4, 5], 5) //➞ true
// hurdleJump([5, 5, 3, 4, 5], 3) //➞ false
// hurdleJump([5, 4, 5, 6], 10) //➞ true
// hurdleJump([1, 2, 1], 1) //➞ false
 








///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////






 
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
 


// function hackerSpeak(string){

//     string = string.replace(/a/g, '4')
//     string = string.replace(/i/g, '1')
//     string = string.replace(/o/g, '0')
//     string = string.replace(/e/g, '3')
//     string = string.replace(/s/g, '5')

//     console.log(string)
// }


// hackerSpeak("javascript is cool") //➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") //➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") //➞ "b3c0m3 4 c0d3r"




 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 





// Create a function that takes in a year and returns the correct century.
 
// function century(year){

//     let cent = Math.ceil (year/100) 

//     let twoLetters = cent > 20 ? "st" : "th"

//     console.log(cent + twoLetters +' century')
    

// }

// century(1756) //➞ "18th century"
 
// century(1555) //➞ "16th century"
 
// century(1000) //➞ "10th century"
 
// century(1001) //➞ "11th century"
 
// century(2005) //➞ "21st century"
 






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Create a function that converts Celcius to Fahrenheit and vice versa.
 
// convert("35°C") //➞ "95°F"
 
// convert("19°F") //➞ "-7°C"
 
// convert("33") //➞ "Error"







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Create a function that takes a string and returns a string in which each character is repeated once.





// function doubleChar(string){

//     let newString = ''

//     for (let i = 0; i < string.length; i++) {
        
//         newString += string[i] + string[i]
        
//     }
//     console.log(newString)
// }


// doubleChar("String") // ➞ "SSttrriinngg"
// doubleChar("Hello World!") // ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") // ➞ "11223344!!__  "







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// Given a number n, write a function that returns PI to n decimal places.
 

// function myPi(n){

//     console.log(Math.PI.toFixed(n));

// }

// myPi(5) //➞ 3.14159
// myPi(4) //➞ 3.1416
// myPi(15) //➞ 3.141592653589793
 

 








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









//Create a function that takes an array as an argument and returns true or 
//false depending on whether the average of all elements in the array is a whole number or not.
 


// function isAvgWhole(arr){

//     let sum = 0

//     let trigger = false

//     arr.map(item =>{
//         sum += item
//     })

//     let average = sum / arr.length

//     if (average === Math.round(average)){
//         trigger = true
//     }

//     console.log(trigger)
// }


// isAvgWhole([1, 3]) //➞ true
// isAvgWhole([1, 2, 3, 4]) //➞ false
// isAvgWhole([1, 5, 6]) //➞ true
// isAvgWhole([1, 1, 1]) //➞ true
// isAvgWhole([9, 2, 2, 5]) //➞ false
 













////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










// Create a function that takes an integer and returns the
// factorial of that integer. That is, the integer multiplied by all positive lower integers.
 


// function factorial(n){
    
//     let answer = 1;

//     for(let i = n; i >= 1; i--){
//         answer = answer * i;
//     }

//     console.log(answer)
// }    
    

// factorial(3) //➞ 6
// factorial(5) //➞ 120
// factorial(13) //➞ 6227020800









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
















 
//Create a recursive function that takes two parameters and repeats the 
//string n number of times. The first parameter txt is the string to be 
//repeated and the second parameter is the number of times the string is to be repeated.
 

// function repetition (string, times){

//     let newString = ''

//     for (let i = 0; i < times; i++) {
        
//         newString += string
        
//     }

//     console.log(newString)
// }

// repetition("ab", 3) //➞ "ababab"
// repetition("kiwi", 1) //➞ "kiwi"
// repetition("cherry", 2) //➞ "cherrycherry"
  













////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








  
//Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices. indexes?
  




// function getOnlyEvens(arr){

//     let newArr = []

//     arr.map(num =>{
        
//         if(num%2 === 0 && num === arr.indexOf(num)){
//             newArr.push(num)
//         }
//     })

//     console.log(newArr)

// }

// getOnlyEvens([1, 3, 2, 6, 4, 8]) //➞ [2, 4]
// getOnlyEvens([0, 1, 2, 3, 4]) //➞ [0, 2, 4] 
// getOnlyEvens([1, 2, 3, 4, 5]) //➞ []
  








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







  
//Assume a program only reads .js or .jsx files. Write a function that accepts 
 //a file path and returns true if it can read the file and false if it can't.
  
 

// function isJS(string){

//     if(string.includes('.js') || string.includes('.jsx')){
//         console.log(true)
//     }   else{
//         console.log(false)
//     }


// }


// isJS("/users/user.jsx") //➞ true
// isJS("/users/user.js") //➞ true
// isJS("/users/user.ts") //➞ false
  








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  
// Create a function that takes an array of 10 numbers (between 0 and 9)
 
// and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
  

// function formatPhoneNumber(arr){

    
//     let str1 = '('
//     let str2 = ') '
//     let str3 = '-'
    

//     arr.map(num =>{

//         if(arr.indexOf(num) <= 2)
//         str1 += num

//         if(arr.indexOf(num) > 2 && arr.indexOf(num) <=5){
//             str2 += num
//         }

//         if(arr.indexOf(num) > 5){
//             str3 += num
//         }
//     })
    
//     console.log(str1 + str2 + str3)
// }


// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //➞ "(123) 456-7890"
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) //➞ "(519) 555-4468"
// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) //➞ "(345) 501-2527"
  
/////////////////////////////////////////////////////////////
  

















/*
//Write a function that takes a string as an argument and returns the left most digit in the string.
  
 leftDigit("TrAdE2W1n95!") //➞ 2
  
 leftDigit("V3r1ta$") //➞ 3
  
 leftDigit("U//DertHe1nflu3nC3") //➞ 1
  
 leftDigit("J@v@5cR1PT") //➞ 5


//Create a function which returns the number of true values there are in an array.
 
countTrue([true, false, false, true, false]) //➞ 2
 
countTrue([false, false, false, false]) //➞ 0
 
countTrue([]) //➞ 0
 
///////////////////////////////////////////////////////////////////////////
 
// Create a function that takes two arguments: the final price and the discount percentage as integers and returns the final price after the discount.
 
dis(1500, 50) //➞ 750
 
dis(89, 20) //➞ 71.2
 
dis(100, 75) //➞ 25
 
////////////////////////////////////////////////////////////////////
 
//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
 
arrayOfMultiples(7, 5) //➞ [7, 14, 21, 28, 35]
 
arrayOfMultiples(12, 10) //➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 
arrayOfMultiples(17, 6) //➞ [17, 34, 51, 68, 85, 102]
 
////////////////////////////////////////////////////////////////
 
//Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will //always be represented in the following order: quarters, dimes, nickels, pennies.
 
//To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
 
//quarter: 25 cents / $0.25

 //dime: 10 cents / $0.10

 //nickel: 5 cents / $0.05

 //penny: 1 cent / $0.01
 


 changeEnough([2, 100, 0, 0], 14.11) //➞ false
 
changeEnough([0, 0, 20, 5], 0.75) //➞ true
 
changeEnough([30, 40, 20, 5], 12.55) //➞ true
 
changeEnough([10, 0, 0, 50], 3.85) //➞ false
 
changeEnough([1, 0, 5, 219], 19.99) //➞ false
 
//////////////////////////////////////////////////////////////////
 
//Given an array of women and an array of men, either:
 
//Return "sizes don't match" if the two arrays have different sizes.

 //If the sizes match, return an array of pairs, with the first woman

 // paired with the first man, second woman paired with the second man, etc.
 
zipIt(["Elise", "Mary"], ["John", "Rick"])

  //➞ [["Elise", "John"], ["Mary", "Rick"]]
 
zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])

  //➞ "sizes don't match"
 
zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])

  //➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]


  */



// const boxOne = document.getElementById('boxOne')

// const boxTwo = document.getElementsByClassName('boxTwo')

// const boxThree = document.querySelector('span')

// const boxFour = document.querySelector('#span2')

// const boxFive = document.querySelector('.span3')

// const final = document.querySelectorAll('span')





//////// EVENTS





// const myButton = document.getElementById('btn1')
// myButton.addEventListener('click', doStuff)



// function doStuff(){
//     boxOne.style.backgroundColor = '#90e1fa'
//     boxOne.innerText = 'TEST GREAT SUCCESS!'



// upgrade one:
// Add two points on click. Cost: 100

// upgrade two:
// Add five points on click: Cost: 300

// upgrade three:
// Change background color: Cost: 50

// upgrade four:
// Make cookie to spin all the time: Cost 150

// upgrade five:
// change cookie image to new one: Cost: 200

const startDiv = document.getElementById('startDiv')
const gameDiv = document.getElementById('gameDiv')
const shopDiv = document.getElementById('shopDiv')
const scoreDiv = document.getElementById('scoreDiv')
const cookiePic = document.getElementById('cookiePic')
const backButton = document.getElementById('backButton')
const shopButton = document.getElementById('shopButton')
const upgradeOne = document.getElementById('upg1')
const upgradeTwo = document.getElementById('upg2')
const upgradeThree = document.getElementById('upg3')
const upgradeFour = document.getElementById('upg4')
const upgradeFive = document.getElementById('upg5')
const startButton = document.getElementById('clickStart')
const cookiePic2 = document.getElementById('cookiePic2')


startButton.addEventListener('click', goToGame)
cookiePic.addEventListener('click', addScore)
shopButton.addEventListener('click', goToShop)
backButton.addEventListener('click', goBack)
upgradeOne.addEventListener('click', addTwoPoints)
upgradeTwo.addEventListener('click', addFivePoints)
upgradeThree.addEventListener('click', changeBackground)
upgradeFour.addEventListener('click', rotateCookie)
upgradeFive.addEventListener('click', changeCookie)
cookiePic2.addEventListener('click', addScoreAgain)

let score = 0

let pointsToAdd = 1

function goToGame(){
    console.log('AcIU')
    startDiv.style.display = 'none'
    gameDiv.style.display = 'block'
}

function addScore(){
    score += pointsToAdd
    scoreDiv.innerText = `Score: ${score}`
}

function goToShop(){
    gameDiv.style.display = 'none'
    shopDiv.style.display = 'block'
}

function goBack(){
    gameDiv.style.display = 'block'
    shopDiv.style.display = 'none'
}


function addTwoPoints(){
    pointsToAdd = 2
    score -= 100
    scoreDiv.innerText = `Score: ${score}`
    gameDiv.style.display = 'block'
    shopDiv.style.display = 'none'
}

function addFivePoints(){
    pointsToAdd = 5
    score -= 300
    scoreDiv.innerText = `Score: ${score}`
    gameDiv.style.display = 'block'
    shopDiv.style.display = 'none'
}

function changeBackground(){
    score -= 50
    scoreDiv.innerText = `Score: ${score}`
    gameDiv.style.backgroundColor = '#9932cc'
    gameDiv.style.display = 'block'
    shopDiv.style.display = 'none'
}

function rotateCookie(){
    score -= 150
    scoreDiv.innerText = `Score: ${score}`
    cookiePic.classList.add('spinCookie')
    cookiePic2.classList.add('spinCookie')
    gameDiv.style.display = 'block'
    shopDiv.style.display = 'none'
}

function changeCookie(){
    score -= 200
    scoreDiv.innerText = `Score: ${score}`
    cookiePic.style.display = 'none'
    cookiePic2.style.display = 'block'
    gameDiv.style.display = 'block'
    shopDiv.style.display = 'none'
}

function addScoreAgain(){
    score += pointsToAdd
    scoreDiv.innerText = `Score: ${score}`
}

localStorage.setItem('score',)

//https://i.redd.it/5e7cf6b1nfy01.png