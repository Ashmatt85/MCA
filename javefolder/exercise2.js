function Sevenfigures(){

    document.write("<h2>Accounting Firm</h2>");

    var bankAccount =Number(prompt("what is the amount in your bank account?") );
    
    var movieStar =Number(prompt("Are you a celebrity?"));

    
    
    if ( bankAccount >= 999999 || movieStar=="yes") {
    
        document.write("Thank for your patience we will be with you shortly"); 
        
    } else { document.write( "Follow this link to accountants.com"); }
    
} 
    
Sevenfigures();
    //----------------------------------------------------------------------------
    
    function Shibuya(){

    document.write("Shibuya");

    var msg= " ";

    var Earnings=0;
    
    var grossSales= Number(prompt("What was the gross sales for last week?"));
    
    var salesCount= Number(prompt("How many sale for the week?"));

    var bonus= 0.09;
    
    var totalGross= grossSales * salesCount;

    var Earnings= 500 + (grossSales * .09);
    
    document.write("You total gross sales are: $" + totalGross);
    
    if (grossSales > 1000) {
    
     msg= grossSales * .09;
    
    }else { !grossSales *.09;}
    
}

//Shibuya();
    //-----------------------------------------------------------------------------
    
    function Testsoup(temperature){

    var temperature= Number(prompt("What was the temperature?"));


    if(temperature < 58.333 ) {
    
        msg= "The temp of <sp></sp>" + temperature + "celsius" + " from this porridge is too cold!";
        
        document.write(msg);

    } else if (temperature >= 58.333 && temperature <= 73.888) {
    
        msg= "The temp of<sp></sp>" + temperature + "celsius" + " from this porridge just right!";
        
        document.write(msg);

    } else if (temperature > 73.888) {
    
        msg= "The temp of <sp></sp>" + temperature + "celsius" + " from this porridge is too hot!";
        
        document.write(msg);

    }
    else{
        msg= "Error, Invalid input";
        document.write(msg);   
    }

    }
    //Testsoup();
    //---------------------------------------------------

    function Lifestage(stage){


    var name= prompt("What is your name?");

    var birthYear= prompt("What year were you born?");

    var age=2025-birthYear;


    if (age >= 130) {
    
        stage= "corpse";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);
    
    }else if (age >= 80) {

        stage= "ancient";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);
    
    }else if (age >= 65) {  
    
        stage= "senior";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);
    
    }else if (age >= 50) {
    
        stage= "middle-aged";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);

    }else if (age >= 25) {

        stage= "adult";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);

    }else if (age >= 20) {

        stage= "young adult";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);

    }else if (age >= 13) {

        stage= "teenager";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);

    }else if (age >= 11) {

        stage= "preteen";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);

    }else if (age >= 5) {

        stage= "child";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);

    }else if (age >= 3) {

        stage= "toddler";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);

    }else if (age >= 1) {

        stage= "infant";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);

    }else if (age < 1) {

        stage= "newborn";

        document.write("You are a <sp></sp>" + stage + "<sp></sp> " + name);

    }
}

//Lifestage();