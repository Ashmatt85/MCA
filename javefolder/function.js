/*
function GetArea(width, length){

    var area = width * length;

    return area;
}

var width = prompt ("Enter the width of the rectangle: ")

var length = prompt ("Enter the length of the rectangle: ")

var area = GetArea(width, length)

document.write(" The area is: " + area);

//---------------------------------------------------------

function feetToInches(feet){

    var inches = 12 * feet;
    return inches;

}

var feet= prompt("Enter the number  of feet: ")

var inches = feetToInches(feet);

document.write("The number of inches is: " + inches + " in " + feet + "<br>")


//----------------------------------------------------------------
function MathQuiz(randoNum1, randoNum2){

    
    var answer = randoNum1 + randoNum2;

    var problem = NumberPrompt("What is " + randoNum1 + " + " + randoNum2 + "?")

if(problem == answer){
    
    document.write("Congratulations " + answer + " is the correct answer. " + "<br>")

} else if(problem !== answer){

    document.write("Sorry that is not correct. The answer was " + answer + "<br>")

    
}
}

var randoNum1 = Math.floor(Math.random() * 1000 + 1); //Generate a random number

var randoNum2 = Math.floor(Math.random() * 1000 + 1);

MathQuiz( randoNum1, randoNum2)

//----------------------------------------------------------------


function Maxium(integer1, integer2){
    
    if(integer1 > integer2){

        return integer1;

    } else if (integer2 > integer1){

        return integer2;

    } else if(integer1 == integer2){

        return integer2;
    }

    } var integer1 = NumberPrompt("Enter the first number: ")

    var integer2 = NumberPrompt("Enter the second number: ") 
    
  document.write("The greater number of the two you entered is " + Maxium(integer1, integer2) + "<br>")

//----------------------------------------------------------------

function fallingDistance(time){
    
    var distance = 0.5 * 9.8 * Math.pow(time, 2);
    return distance;
}
for (var t = 1; t <= 10; t++){

   var distance = fallingDistance(t); //Call the function to calculate distance fallen

   document.write("The distance fallen after " + t + " seconds is " + distance.toFixed(2) + " meters." + "<br>");
}

           
//-------------------------------

function LetterGrade(grades){

    if ( grades >= 90 ){

        return "A";

    } else if( grades >= 80 ){

        return "B";

    } else if( grades >= 70 ){

        return "C";

    } else if( grades >= 60 ){

        return "D";

    } else{

        return "F";
    }
        
}

function Average(grades1, grades2, grades3, grades4, grades5){

    return (grades1 + grades2 + grades3 + grades4 + grades5) / 5; //Calculate the average of the five scores
}

var grades1 = NumberPrompt("Enter the first score: ");

var grades2 = NumberPrompt("Enter the second score: ");

var grades3 = NumberPrompt("Enter the third score: ");

var grades4 = NumberPrompt("Enter the fourth score: ");

var grades5 = NumberPrompt("Enter the fifth score: ");


document.write("The 1st score of " + grades1 + " is a " + LetterGrade(grades1) + "<br>")
document.write("The 2nd score is " + grades2 + " is a " + LetterGrade(grades2) + "<br>")
document.write("The 3rd score is " + grades3 + " is a " + LetterGrade(grades3) + "<br>")
document.write("The 4th score is " + grades4 + " is a " + LetterGrade(grades4) + "<br>")
document.write("The 5th score is " + grades5 + " is a " + LetterGrade(grades5) + "<br>")

document.write("The average of all five scores is " + Average(grades1, grades2, grades3, grades4, grades5));


//----------------------------------------

function Even(integer){

if (integer % 2 === 0){

    return true;
}else {
    return false;
}
}

function Odd(integer){

if (integer % 2 !== 0){

   return true;
}else{ return false;
}
}

var gunther = NumberPrompt("Enter a number:")


    document.write (" The number " + gunther + " is an even integer. ")

    document.write (" The number " + gunther + " is " +  Odd(integer));      //This is a short cut way... instead of the one right above it.




function NumberPrompt (msg){

    var input=prompt (msg)

    while (isNaN(input)){

        alert("Input invalid. Please try again")
        input=prompt (msg);

    } return Number(input);
}*/