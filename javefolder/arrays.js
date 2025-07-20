function NumberPrompt (msg){

    var input=prompt (msg)

    if (input === null) {  // User clicked cancel
        alert("Game exited. Your remaining money: $" + money);
        document.getElementById("percentage").innerHTML = "<h3>Game exited early. Your winning percentage is:" + winPercentage + "%</h3>";
        throw new Error ("Game exited");  // Stops further execution
    }

    while (isNaN(input)){

        alert("Input invalid. Please try again")
        input=prompt (msg);

    } return Number(input);


}

//This is setting up an Array
/*
var fruits= ["Apple", "Banana", "Orange"];

var temp= fruits[1];

document.write(temp + "<br>");



//example on how to use .push

var fruits= ["Apple", "Banana", "Orange"];

fruits.push('Grapes');

var temp = fruits[3];

document.write(temp + "<br>");



// example on how to use .pop

var fruits= ["Apple", "Banana", "Orange"];

fruits.push("Grapes");

document.write(fruits + "<br>");

var temp = fruits.pop();

document.write(fruits + "<br>");

document.write(temp + "<br>");
//you can change things in the array with name[0]="whatever you want to change it to"



// example how you use .shift

 var fruits= ["Apple", "Banana", "Orange"];

document.write(fruits + "<br>");

fruits.shift();

document.write(fruits + "<br>");



// example how to .unshift

var fruits= ["Apple", "Banana", "Orange"];

document.write(fruits + "<br>");

fruits.unshift("Cherry"); // value must be put in to have new name put in front otherwise if it is left fruit.unshift(); it replaces the first one

document.write(fruits + "<br>");



// Using Loops with arrays

var numbers = [1, 3, 8, 42]

document.write(numbers + "<br>")
        //or
document.write(numbers[0] + "<br>")
document.write(numbers[1] + "<br>")
document.write(numbers[2] + "<br>")
document.write(numbers[3] + "<br>" + "<br>")

var checkflag = true;
var array = [];

while (checkflag){

    var temp = Number(prompt("Enter a number to store. -1 to exit"));

if (temp == -1){

    checkflag = false;

    break;
}else{

    array.push(temp);
}

}

for (var i = 0; i < array.length; i++ ){ // <-- this is the example of the for loop with arrays

    document.write(array[i] + "<br>");

}   //.length allows the array size to change with the loop of the input the user has done.



//Multi-Dimensional Array

var board = [

    [1,2,3],
    [4,5,6],
    [7,8,9]
];

document.write(board [2][1]); // this way will give you access inside the array to the number 8 on row 2
        //or

board[2].push [10];  // is row 2 add on 10

document.write(board [2]);
        //or

board.push([11, 12, 13]);  // adds a new row entirely

document.write(board);


//example on outputting this whole array uses two for loops

var board = [

    [1,2,3],
    [4,5,6],
    [7,8,9,10]
];

for (i = 0; row< board.length; row++){   //this will loop thru all, row replace i

    for(j =0; col<board.length; col++){   //

        document.write(board[row][col] + "<br>")
    }
}


//--------------------------------------------------------------------------------------------


function rollDice(max) {

    var roll = Math.floor(Math.random() * (max)) + 1;

}
   
    var sides= NumberPrompt("How many sides does the dice have?");

    var numberOfDice = NumberPrompt("How many dice would you like to roll?");

    results = [];

     for (var i = 0; i < numberOfDice; i++){

        results.push(rollDice(sides));

     }

//-------------------------------

    var sales =[];
    var weeklySales = 0;

    //fill up array with user input
    for (i = 0; i<= 6; i++){

        sales.push(NumberPrompt("Enter the store's sales for day" + (i + 1)));

        weeklySales += sales[i];

    }document.write ("Your sales is; " + sales + " for the week. " )
     document.write("Total weekly sales: $" + weeklySales);
     

//---------------------------------

var lottery = [];

for (var i = 0; i< 7; i++){    

    lottery[i] = Math.floor(Math.random() * 9) + 1;
    }

    document.write("Lottery numbers for today are: " + "<br>");

    for (var i = 0; i< lottery.length; i++){

        document.write( lottery[i] + " , ");
    }

    

//----------------------------------


var totalRainfall = [];
var total = 0;
var average = 0;

for (var i = 0; i< 12; i++){

    totalRainfall[i] = NumberPrompt("Enter the rainfall for month " + (i + 1) + ": ");
}

var smallest =totalRainfall[0];
var largest =totalRainfall[0];

    for (var i = 0; i< totalRainfall.length; i++){
    
         total += totalRainfall[i];
   

    if (totalRainfall[i] < smallest){

        smallest = totalRainfall[i];
    }
    if (totalRainfall[i] > largest){

        largest = totalRainfall[i];
    }
   }   
    document.write("Total rainfall for the year is: " + total + "inches" +"<br>"); 
    document.write("Largest rainfall: " + largest + "inches" +"<br>");
    document.write("Smallest rainfall: " + smallest + "inches" +"<br>");

        average = total / totalRainfall.length;
    document.write("Average rainfall for the year: " + average.toFixed(2) + "inches" +"<br>");

    document.write("Rainfall for each month: " + totalRainfall + "<br>");


//-------------------------------

//Blake's version of rainfall

var totalRainfall = [];
var total = 0;
var average = 0;
var lowest = 0;
var highest = 0;

for (var i = 0; i< 12; i++){

    totalRainfall.push(NumberPrompt("Enter the rainfall for month " + (i + 1) + ": "));

}

for (var i = 0; i< totalRainfall.length; i++){

    total += totalRainfall[i];

    if (i == 0){
        lowest = totalRainfall[i]; // Initialize lowest to the first element
        highest = totalRainfall[i]; // Initialize highest to the first element

    }
        else if (totalRainfall[i] < lowest){
        
            lowest = totalRainfall[i];
        
        }
        else if (totalRainfall[i] > highest){

            highest = totalRainfall[i];
        }
}
    average = total / totalRainfall.length;


//----------------------------------

var array2 = [1,2.3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

var array1 = [];

//for(var i = 0; i < 25; i++){
//    array1[i] = array2[i] ;
for(var i = 0; i < array2.length; i++){

    array1.push(array2[i]) ;
}
document.write("Array 1: " + array1 + "<br>");

document.write("Array 2: " + array2 + "<br>");


//-------------------------------

var salsas = ["Mild", "Medium", "Sweet", "Hot", "Zesty"];  // This is the array of salsa names
var jarsSold = [];
var totalSales = 0;
var lowest = 0;
var highest = 0;
var lowestPos = 0;
var highestPos = 0;

for (var i = 0; i< salsas.length; i ++){

    jarsSold.push(NumberPrompt("How many jars of " + salsas[i] + " salsa were sold?"));

    document.write(salsas[i] + " salsa: " + jarsSold[i] + " jars sold" + "<br>"); // fix this by looking at example blake did 

    totalSales += jarsSold[i];

if (i == 0){

    lowest = jarsSold[i]; // Initialize lowest to the first element
    highest = jarsSold[i]; // Initialize highest to the first element
}

if (jarsSold[i] < lowest){

    lowest = jarsSold[i];
    lowestPos =  i;

}
if (jarsSold[i] > highest){

    highest = jarsSold[i];
    highestPos = i;

}
}
    document.write("Total jars sold: " + totalSales + "<br>");

    document.write("Highest jars sold is: " + highest + "<br>");

    document.write("Lowest jars sold is: " + lowest + "<br>");

*/

//-------------------------------

