/*
//string manipulation

var string = "This is a string";

var char = 'a';

prompt("Enter a string: ");

document.write("this is a string")

var charArray = Array.from(string);

document.write(string + "<br>");

document.write(charArray + "<br>");


//------------------

function StringContains(string, char) {

    // This function checks if a string contains a specific character.
    var charArray = Array.from(string);

    for (var i = 0; i < charArray.length; i++) {

        if (charArray[i] == char) {

            // If the character is found, return true.
            return true;
        }
    }
    return false;
}
document.write(StringContains("hello world", "h") + "<br>"); // true
// or you can setup a var contains = false; declare it outside the loop and then inside the loop if the char is found set it to true and return it.

var fruit = "apple";

var charArray = Array.from(fruit);

//make this into a new string

var newFruit ="";

for (var i = 0; i < charArray.length; i++){

    newFruit += charArray[i]; // this will add the character to the new string.
}
document.write(fruit + "<br>"); // apple
document.write(charArray + "<br>"); // a,p,p,l,e
document.write(newFruit + "<br>"); // apple


//------------------

// # 1.
function PadLeft(word, char, number ){

var charArray = Array.from(word); // this will create an array from the string.

var result ="";


for (var i = 0; i < number; i++){

        charArray.unshift(char); // this will add the character to the new string.
} 

for(var i = 0; i < charArray.length; i++){  //can still use i because it is not nested within the first for loop.

    result += charArray[i]; // this will add the character to the new string.
}
    return result;
}
 document.writeln(PadLeft("piano", "c", 3)); // cccpiano


//------------------

// # 2.
function StringRemove(string, char){

    // this function removes a character from a string.

    var charArray = Array.from(string);

    var result = "";

    for (var i = 0; i < charArray.length; i++){

       if (charArray[i] !== char){

            result += charArray[i]; // this will add the character to the new string.
        }
    }
    return result; // this will return the new string.
     //document.write and calling the function is just doing two steps instead of one with the document.write(with function(string, char) );
}
document.writeln(StringRemove("apple", "p")); // ale

//------------------

// # 3.
function StringIntersection(string1, string2){

    // this function finds the intersection of two strings.

    var charArray1 = Array.from(string1);

    var charArray2 = Array.from(string2);

    var result = "";

    for (var i = 0; i < charArray1.length; i++){

        for (var j = 0; j < charArray2.length; j++){

            if (charArray1[i] == charArray2[j]){

                result += charArray1[i];
                break; // this will break the inner loop if the character is found.
            }
        }
    }
    return result; // this will return the new string.
}
document.write(StringIntersection("apple", "banana")); // a

//------------------

// # 4.
function StringUnion(string1, string2){

    // this function finds the union of two strings.

    var result = "";

    var charArray1 = Array.from(string1 + string2);

    var finalArray = [];

    for (var i = 0; i < charArray1.length; i++){

        if (!finalArray.includes(charArray1[i])){

            finalArray.push(charArray1[i]); // this will add the character to the new string.
        }
    }
    for (var i = 0; i < finalArray.length; i++){

            result += finalArray[i]; // this will add the character to the new string.
    }
    return result;
}
document.write(StringUnion("bear", "peas")); // fashionpassion


//------------------

// # 5.
function StringReplace(string, char, newChar){

    // this function replaces a character in a string.

    var charArray = Array.from(string);

    var result = "";

    for (var i = 0; i < charArray.length; i++){

        if (charArray[i] == char){

            charArray[i] = newChar;
        }
        result += charArray[i]; // this will add the character to the new string.
    }
 //   for (var j = 0; j < charArray.length; j++){

  //      result += charArray[j];     these have been commented out just to show another simplified way of doing it.

  //  }
    return result; // this will return the new string.
}
document.write(StringReplace("apple", "p", "b")); // abble


//------------------

// # 6.
function StringNumeric(string){

    // this function checks if a string is numeric.

    var charArray = Array.from(string);
    

    for (var i = 0; i < charArray.length; i++){

        if (isNaN (charArray[i]) && charArray[i] !== "."){

            return false;

        }

    } return true;
    
    
} document.write (StringNumeric("12al.24")); // true

//-------------------

// # 8.
function StringSplit(string, char){

    // this function splits a string into an array.

    var current = "";
    var charArray = Array.from(string);
    var result = []; // this will create an empty array.

    for (var i = 0; i <= charArray.length; i++){

        if (charArray[i] != char && i != charArray.length){
            // this will check if the character is not equal to the char and if it is not the last character.

            current += charArray[i];;

        }
        else{
            result.push(current); // this will add the current string to the new array.

            current = "";
        }
    }
    return result; // this will return the new array.

} document.write(StringSplit("apple banana cherry", ' ')); // p,p
*/

// Array.from is a built-in method that creates a new array from an array-like 
// (like a string or argument) or iterable object(like a set or map).

//You’d use it when:

//You want to convert something iterable (like a string or a Set) into a real array.

//You need to use array methods (map(), filter(), etc.) on something that’s not an array yet.

//You're dealing with array-like objects (like arguments in a function).








/*

//-----------------------

// #0.

var string = prompt("Enter a string: ");

var newArray = [];
var charArray = Array.from(string); // this will create an array from the string.
var finalArray = "";

for(var i = charArray.length -1; i >= 0; i--){

finalArray += charArray[i]; // this will add the character to the new string.

}document.write(finalArray + "<br>");

//-----------------------

// #1.

function SentenceCapitalizer(string){

    var result = ""; // this will create an empty string.

    var string = prompt("Enter two sentences: "); // this will create an input box.
    
    var charArray = Array.from(string); // this will create an array from the string.

    for(var i = 0; i < charArray.length; i++){

        if (i == 0){

            charArraycharArrary[i].toUpperCase(); // this will capitalize the first letter of the string.
        }
        else if(charArray[i] == " . "){

            charArray[i + 2] = charArray[i + 2].toUpperCase(); // this will capitalize the first letter of the next word.
        }
      
      result += charArray[i]; // this will add the character to the new string.
    
}
document.write(result + "<br>"); // this will write the new string to the document.
// this will write the new string to the document.
}
//-----------------------

// #2.
 function VowelsAndConsonants(string){

    var string = prompt("Enter a string: ");

     var charArray = Array.from(string); // this will create an array from the string.
     var totalVowels = 0; // this will create an empty string.
     var totalConstonants = 0;


    for (var i= 0; i < charArray.length; i++){

        if (charArray[i] == "a" || charArray[i] == "e" || charArray[i] == "i" || charArray[i] == "o" || charArray[i] == "u"){

            totalVowels ++; // this will add the character to the new string.
        }else if (charArray[i] != " " && charArray[i] != "." && charArray[i] != "," && charArray[i] != "!" && charArray[i] != "?" && isNaN()){ 
        totalConstonants ++; // this will add the character to the new string.
    }
    }
document.write("Total Vowels: " + totalVowels + "<br>"); // this will write the new string to the document.
document.write("Total Consonants: " + totalConstonants + "<br>"); // this will write the new string to the document.
 }
VowelsAndConsonants();    */

function VowelsAndConsonants(string){

    var string = prompt("Enter a string: ");

     var charArray = Array.from(string); // this will create an array from the string.
     var vowels = ["a", "e", "i", "o", "u"];
     var totalVowels = 0; // this will create an empty string.
     var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
     var totalConstonants = 0;


    for (var i= 0; i < charArray.length; i++){

        if (vowels.includes(charArray[i])){

            totalVowels ++; // this will add the character to the new string.

        }else if (consonants.includes(charArray[i])){

            totalConstonants ++; // this will add the character to the new string.
    }   
}
document.write("Total Vowels: " + totalVowels + "<br>"); // this will write the new string to the document.
document.write("Total Consonants: " + totalConstonants + "<br>"); // this will write the new string to the document.
 }
VowelsAndConsonants();

//-----------------------
/*
// #3.

function SumDigits(){

    var digits= prompt("Enter a string of number without separating them: "); // this will create an input box.

    var charArray = Array.from(digits); // this will create an array from the string.
    var total = 0; // this will create an empty string.

    for (var i =0; i< charArray.length; i++){

        total += Number(charArray[i]); // this will add the character to the new string.
    }
    document.write("The total is: " + total + "<br>"); // this will write the new string to the document.
}
SumDigits(); // this will call the function.

//-----------------------

// #4. this is shown well by Blake on recording at 58:10 on how starting off with the user input into the charArray then 
//using the for loop to check if the charArray includes each letter that is in the newArray and if it does not include it then push it into the newArray.

function FrequentCharacter(){

    var character = prompt("Enter a string: "); // this will create an input box.

    var charArray = Array.from(character); // this will create an array from the string.
    var newArray = []; // this will create an empty array.
    var maxCount = []; // this will create an empty string.

    for(var i= 0; i <charArray.length; i++){

        if(!newArray.includes(charArray[i])){

            newArray.push(charArray[i]); // this will add the character to the new string.

            maxCount.push(0); // this will add the character to the new string.
        }
    }
    for(var i= 0; i<newArray.length; i++){

        for(var j= 0; j<charArray.length; j++){

            if(charArray[j] == newArray[i]){

                maxCount[i] ++; // this will add the character to the new string.
            }
        }
    }

    var largest= 0; // this will create an empty string.
    var largestSlot = 0; // this will create an empty string.

    for(var i= 0; i<maxCount.length; i++){

        if(maxCount[i] > largest){

            largest = maxCount[i]; // this will add the character to the new string.
            largestSlot = i; // this will add the character to the new string.
        }
    }
    document.write(" The most frequent character is: " + newArray[largestSlot] + " with " + largest + " occurences " + "<br>"); // this will write the new string to the document.
}
FrequentCharacter(); // this will call the function.

//-----------------------

// #5.

function TelephoneTranslator(){

    var phoneNumber = prompt("Enter a phone number: "); // this will create an input box.

    var charArray = Array.from(phoneNumber); // this will create an array from the string.
    var result = ""; // this will create an empty string.

    for(var i= 0; i<charArray.length; i++){

        if(charArray[i] == "a" || charArray[i] == "b" || charArray[i] == "c"){

            result += "2"; // this will add the character to the new string.
        }else if(charArray[i] == "d" || charArray[i] == "e" || charArray[i] == "f"){

            result += "3"; // this will add the character to the new string.
        }else if(charArray[i] == "g" || charArray[i] == "h" || charArray[i] == "i"){

            result += "4"; // this will add the character to the new string.
        }else if(charArray[i] == "j" || charArray[i] == "k" || charArray[i] == "l"){

            result += "5"; // this will add the character to the new string.
        }else if(charArray[i] == "m" || charArray[i] == "n" || charArray[i] == "o"){

            result += "6"; // this will add the character to the new string.
        }else if(charArray[i] == "p" || charArray[i] == "q" || charArray[i] == "r" || charArray[i] == "s"){

            result += "7"; // this will add the character to the new string.
        }else if(charArray[i] == "t" || charArray[i] == "u" || charArray[i] == "v"){

            result += "8"; // this will add the character to the new string.
        }else if(charArray[i] == "w" || charArray[i] == "x" || charArray[i] == "y" || charArray[i] == "z"){

            result += "9"; // this will add the character to the new string.
        }else{
            result += charArray[i]; // this will add the character to the new string.
        }
    }
    document.write(" The phone number is: " + result + "<br>"); // this will write the new string to the document.

}
TelephoneTranslator(); // this will call the function.
*/