/*
function PayrollProgram(){

    document.write("<h2> Payroll</h2>")

 // (don't need these because payRate is being declared by whatever the user inputs)  var payRate=0;

 // (don't need this)  var hoursWorked=0;

 //(don't need to declare because this is not a running total with +=)   var grossPay=0;

     payRate= NumberPrompt ("Enter employee hourly pay rate must be within $7.50-$18.25")

     while (payRate > 18.25 || payRate < 7.50){

        alert ("Please enter an amount between $7.50-$18.25")

        payRate= NumberPrompt ("Enter employee hourly pay rate must be within $7.50-$18.25")

     }

     hoursWorked= NumberPrompt ("Enter number of hours worked between 0-40")
 
     while (hoursWorked < 0 || hoursWorked > 40 ){
 
        alert ("The number entered is not within range. Hours must be between 0-40")

        hoursWorked= NumberPrompt ("Enter number of hours worked between 0-40")
         
     }  grossPay= payRate * hoursWorked

        document.write ("Your total Gross Pay is:" +"$" + grossPay.toFixed(2))


}
//PayrollProgram();

function NumberPrompt (msg){

    var input=prompt (msg)

    while (isNaN(input)){

        alert("Input invalid. Please try again")

        input=prompt (msg);

    } return Number(input);


}

//------------------------------------------------------

function SeatingRevenue(){

    document.write("<h2>Seating Revenue</h2>")

    var sectionATicket=20;

    var sectionBTicket=15;

    var sectioncTicket=10;



 var sectionA= NumberPrompt ("Enter the number of tickets sold in section A");

while (sectionA < 0 || sectionA >300){

    alert ("Number entered exceeds 300. Please try again.");

    var sectionA= NumberPrompt ("Enter the number of tickets sold in section A between 0-300");

}

var sectionB= NumberPrompt ("Enter the number of tickets sold in section B between 0-500");

while (sectionB < 0 || sectionB > 500){

    alert ("Number entered exceeds 500. Please try again.");

    var sectionB= NumberPrompt ("Enter the number of tickets sold in section B");

}    

var sectionC= NumberPrompt ("Enter the number of tickets sold in section C between 0-200");

while (sectionC <0 || sectionC >200){

    alert ("Number entered exceeds 200. Please try again.");

    var sectionC= NumberPrompt ("Enter the number of tickets sold in section C");

}  ticketGrossA = sectionATicket * sectionA;

    ticketGrossB = sectionBTicket * sectionB;

    ticketGrossC = sectioncTicket * sectionC;

    Income = ticketGrossA + ticketGrossB + ticketGrossC;

    document.write("Total income from tickets sales is: $" + Income);

}
//SeatingRevenue();

//--------------------------------------------------------

function Fatgrams(){

document.write("<h2>Fat Gram Calculator</h2>");


var calories= NumberPrompt("Enter the number of calories in the food item");

while (calories <0 || calories < fat * 9){

    alert("Calories must be greater than 0.")

    calories= NumberPrompt("Enter the number of calories in the food item");

}
var fat= NumberPrompt("Enter the number of fat in the food item");

while (fat <0){

    alert("Fat must be greater than 0.")

    fat= NumberPrompt("Enter the number of fat in the food item");

}

    var fatPercentage= (fat * 9) / calories

   if(isNan(fatPercentage)){

    fatPercentage =0;

   }
 
   fatPercentage *=100;

 if(fatPercentage <= 30){

    document.write("This is a low fat food. It has" + fatPercentage + "% calories of fat")

 }

}
//Fatgrams();

//--------------------------------------------------------

function SpeedViolation(){

document.write("<h2>Speed Violation Calculator</h2>");

var limit= NumberPrompt("What is the speed limit? Enter 20-70");

while(limit < 20 || limit > 70){

    alert("Number does not meet parameters. Enter limit between 20-70");

    var limit= NumberPrompt("What is the speed limit? Enter 20-70");

}

var speed= NumberPrompt("What was the speed that you were going?");

while (speed <= limit){

    alert("Driver's speed must be greater than speed limit. Please re-enter.");

    var speed= NumberPrompt("What is your speedthat you were going?");

} equation = speed - limit

    document.write("You were going " + equation + "mph" + " over the speed limit");

}
//SpeedViolation();

//-----------------------------------------------------


