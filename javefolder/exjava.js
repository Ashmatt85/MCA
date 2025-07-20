/*
Salestax();

//Total_purchase()

Prediction();

function  information(){

    document.write('<h2>please fill out the form below</h2><br>');

    var name= "<h2>Ashley Matthews</h2>";

    var city="tupelo";

    var state= "Mississippi";

    var zip= "38801";

    var phone= "662-854-2020";

    var jobTitle= "Student";

    document.write(name) ;
    document.write("<ul>");
    document.write("<li>City:" + city + "</li><br>");
    document.write("<li>State: " + state + "</li><br>");
    document.write("<li>Zip:" + zip + "</li><br>");
    document.write("<li>Telephone:" + phone + "</li><br>");
    document.write("<li>Job Status" + jobTitle + "</li><br>");
    document.write("</ul>")

}

Milespg();
//---------------------------------------------------------------------------------------------------
function Prediction(){

    document.write("<h2>Sales Prediction</h2>");

    var num1= .23;
    
    var annual= prompt ("Annual Sales");
    
    var total= (annual * num1);
    
    document.write ("The profit for the year: $" + total + "<br>");

}


//----------------------------------------------------------------------------------------------------

document.write("<h2>Land Calculations</h2>");

var sqFeet=prompt ("Total Sqaure Feet in the land?");

var acre= 43560;

var results= (sqFeet/acre);

document.write ("You have <sp></sp>" + results.toFixed(2) + "<sp></sp>acres");

//-------------------------------------------------------------------------------------------------------

function Salestax(){

    document.write("<h2>Sales Tax</h2>");

    var purchase= prompt ('Enter the Amount of the Purchase');

    var state=.04;

    var county=.02;

    var stateTax= Number(purchase) * state;

    var countyTax= Number(purchase) * county;

    var countyStateTax= (stateTax + countyTax);

    var fullAmount= Number(purchase) + countyStateTax;
    document.write("<ul>");
    document.write("<li>purchase: $" + Number(purchase).toFixed(2) +"</li>");
    document.write("<li>state: $" + stateTax.toFixed(2) + "</li>");
    document.write("<li>county: $" + countyTax.toFixed(2) + "</li>");
    document.write("<li>countySTateTax: $" + countyStateTax.toFixed(2) + "</li>");
    document.write("<li> fullAmount: $" + fullAmount.toFixed(2) + "</li>");
    document.write("</ul>");
}


//-----------------------------------------------------------------------------------------------------------------

function Total_purchase(){

    document.write("<h2>Total_Purchase</h2>");

    var item1=prompt Number("Price of item 1?");
    
    var item2=prompt Number("Price item 2?");
    
    var item3=prompt Number("Price item 3?");
    
    var item4=prompt Number("Price item 4?");
    
    var item5=prompt Number('Price item 5?');
    
    var salesTax=subtotal * .06;
    
    var subtotal= item1 + item2 + item3 + item4 + item5;
    
    var paidAmount= subtotal + salesTax;
    
    document.write("<ol>");
    document.write("<li>salesTax: $" + salesTax.toFixed(2) +"</li>")
    document.write("<li>subTotal: $" + subtotal.toFixed(2) + "</li>")
    document.write("<li>paidAmount: $" + paidAmount.toFixed(2) + "</li>")
    document.write("</ol>")

}

//----------------------------------------------------------------------------------------------------------
function Distance(){

    document.write("<h2>Distance Traveled</h2>");

    var speed= 60;
    
    var hour1= 5;
    
    var hour2= 8;
    
    var hour3= 12;
    
    var distance= (60 * hour1);
    
    document.write(distance + "<br>");
    
     distance= (60 * hour2);
    
    document.write(distance + "<br>");
    
     distance= (60 * hour3);
    
    document.write(distance + "<br>");

}


//-----------------------------------------------------------------------------------------------------------
function Milespg(){

    document.write("<h2>Miles Per Gallon</h2>");

    var milesRode=prompt ("how many miles driven?");
    
    var gasUsed=prompt ("how many gallons gas used?");
    
    var MPG= Number(milesRode)/Number(gasUsed);

    document.write("Your MPG is:" + MPG);

}


//------------------------------------------------------------------------------------------------------------
/*
document.write("<h2>Tips, Tax and Total</h2>");

var foodPrice=prompt ("total amount of food");

var tip= foodPrice * .15;

var saleTax= foodPrice * .07;

var totalAll= foodPrice =

document.write()


//----------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------

function CelsiustoFahrenheit(celsius){

    document.write("<h2> C to F </h2>");

    var fahren= 32;
    
    var Formula= 1.8;
    
    var convert= celsius * 1.8 + 32;
    
    document.write(convert + "F");


}
var input=prompt ("what is the temperature in celsius");

CelsiustoFahrenheit(input);

Distance();

information(); 


//-----------------

*/

function Bugscollected(){

    document.write("<h2>Bugs Collected</h2>");

    var total= 0;

    for(var i=1; i<=7; i++){

        var bugs= Number(prompt("How many bugs did you collect today?")); 

        total += bugs;  
                 
}
        document.write("You've collected " + total +"<br>" + "total" + "<br>");

}



//Bugscollected();
//----------------------------------------------------------------

function Calories(){

    document.write("<h2>Calories Burned</h2>");

    var calBurned= 3.9;

    for(var i=10; i<=30; i+=5){

        var total= calBurned * i;

       // if(i<=10){

        document.write("You have burned " + total + i + "minutes"+ "<br>");


   /* } else if(i<=15){

        document.write("You have burned " + total + "in 15 minutes" + "<br>");

    } else if(i<=20){

        document.write("You have burned " + total + "in 20 minutes" + "<br>");

    } else if(i<=25){    

        document.write("You have burned " + total + "in 25 minutes" + "<br>");

    } else if(i<=30){

        document.write("You have burned " + total + "in 30 minutes" + "<br>");

    }*/

}

}

//Calories();

//----------------------------------------------------------------

function Budget(){

    document.write("<h2>Budget</h2>");

    var budget = Number(prompt("Enter the budget for the month?"));

    var runTotal= 0;

    for( var i=1; i<=30; i++){

        var expenses= Number(prompt("Enter the expenses for the day" + i + ":"));

         runTotal += expenses;
       
}  
    document.write("The total expenses for the month is: $" + runTotal + "<br>");

    if(runTotal <= budget){

        var under= budget - runTotal;

        document.write("You are under budget by" + "$" + under + " Good job!");


}   else if(runTotal >= budget){

        var over= runTotal - budget;

        document.write("You are over budget by" + "$" + over + "you need to cut back!");

}



}

//Budget();

//----------------------------------------------------------------

function SumofNumbers(){

    document.write("<h2>Sum of Numbers</h2>");

    var series= true;

    var results= 0;

 while(series){

    var positiveNumber= Number(prompt("Enter a positive number exit by entering a -1"));

    results += positiveNumber;

    if(0>=positiveNumber){

        var series= false;
}
}
    
    document.write("The sum of the numbers is: " + results + "<br>");
}

//SumofNumbers();

//----------------------------------------------------------------

function Tuition(){

    document.write("<h2>Tuition Increase</h2>");

    var tuition=6000;

     var increase=.02;

     var yearly=0;

    for(var year=1; year<=5; year++){

        yearly += tuition * increase  

        document.write("The tuition for year " +"<sp></sp>" + year + " is: $" + yearly.toFixed+ "<br>");

    }
    

}

  //Tuition();

//----------------------------------------------------------------

function Distance(){

    document.write("<h2>Distance Traveled</h2>");

    var distance=0

    var speed= Number(prompt("Enter the speed of the vehicle"));

    var time= Number(prompt("Enter the hours traveled"));

for(var i=1; i<=time; i++){

    distance = speed * i;

    document.write("The distance traveled in hour " + i + " is: " + distance + "<br>");

}
}

 //Distance();

//----------------------------------------------------------------

function AverageRainfall(){

    document.write("<h2>Average Rainfall</h2>");

    var monthrain= 12;

    var total= 0;

    var year= Number(prompt("Enter the number of years"));

    for(var i=1; i<=year; i++){

    } for(var j=1; j<=monthrain; j+=1){

        var rain= Number(prompt("Enter the inches of rainfall for month"));

        total += rain;

        document.write("The total rainfall for month " + j + " is: " + total + "inches" + "<br>");

        var average= total / monthrain;

        document.write("The average rainfall for month " + j + " is: " + average + "inches" + "<br>");

}

}
//AverageRainfall();

//--------------------------------------------------------------

function Blakeexample(){

var input= prompt("how many years are we calculating?");

var totalRain=0;

for(var i=1; i<=input; i++){

    for(var j=1; j<=12; j++){

        var rain= Number(prompt("Enter the inches of rainfall" + i + "month" + j));

        totalRain += rain;

    }

        months= input * 12;

        average= totalRain / months;


}              document.write("The total months: " + months + "<br>");

            document.write("The total rainfall is: " + totalRain + "<br>");

            document.write("The average: " + average + "<br>");
}        

//Blakeexample();

//----------------------------------------------------------------


function CelsiustoFahren(){

    document.write("<h2>Celsius to Fahren</h2>");

    document.write("<table> <tr> <th> Celsius </th> <th> Fahrenheit </th> </tr>")

    for (var i=0; i<=20; i++){

        var fahrenheit= (i * 9/5) + 32; 

        document.write("<tr>" + " <td>" + i + "</td>"+"<td>" + fahrenheit + "</td>"+ "</tr>" + "<br>");

}           
        document.write("</table>")
}
//CelsiustoFahren();

//----------------------------------------------------------------

function Pennies(){

    document.write("<h2>Pennies Per Day</h2>");

    (document.write("<table> <tr> <th> Day </th> <th> Daily Pay </th> </tr>"))

    var daysWorked=Number(prompt("Enter the number of days worked"));

    var total=0;

    var dailySalary=0.01;

    for(var i=1; i<=daysWorked; i++){

       total +=dailySalary;

       document.write("<tr> <td>" + i + "</td> is: $ " +"<td>" + dailySalary.toFixed(2) +"</td> </tr>" + "<br>");

       dailySalary*=2;

}   document.write("Total amount earned is: $<sp></sp>" + total.toFixed(2) + "<br>");

}
//Pennies();

//----------------------------------------------------------------

function Largesttosmallest(){

    document.write("<h2>Largest to Smallest</h2>");


     var series = Number(prompt("Enter a number (Enter -99 to exit):"));

     if (series === -99) {

        checkflag =false;

    document.write("You have exited the program.<br>");

    } else {

        var largest= series;

        var smallest=series;

        var checkflag = true;

    }
    
    while(checkflag) { sequence= Number(prompt("Enter any numbers, enter -99 to exit"));
        
        if (sequence===-99){

            checkflag = false;

            document.write("You have entered -99 to exit the program" + "<br>");

        }else if(sequence<smallest){

            var smallest= sequence;

        }else if(sequence>largest){

            var largest= sequence;
        }
            
           
}   document.write("Your largest number is:" +largest + "<br>")

    document.write("Your smallest number is:" +smallest + "<br>")
}
        
//Largesttosmallest();

//----------------------------------------------------------------

function Factorial(){

    document.write("<h2>Factorial</h2>");

    var integer= Number(prompt("Enter a positive number"));
    
    if (integer < 0) {

        document.write("Factorial is not defined for negative numbers.");

    } else {

        var results = 1;

        var factorial = "";
    
        for (var i = 1; i <= integer; i++) {

            results *= i; // Multiply numbers

            factorial += i; // Add number to the factorial string
    
            if (i < integer) {

                factorial += " * "; // Add " * " between numbers
            }
        }
    document.write( integer + "! =" + factorial + "=" + results + "<br>");

}

}
//Factorial();

//--------------------------------------------------------------

function Firstandlast(){


    var checkflag= true;

    var name= prompt("enter a name. enter FINISH to stop")

    var first= name;

    var last= name;

    //you could set it up to start it like factorial with -99 entered first the exit program

    while (checkflag){

        var name= prompt ("enter a name (enter FINISH to stop")

    if(name== FINISH){

        checkflag= false;

    }else if (name.toUpperCase() < first.toUpperCase()){

        first = name;

    }else if (name.toUpperCase() >last.toUpperCase()){

        last = name;
    }


}//fix again
}
//Firstandlast();