/*
//SELECTING THE ELEMENT TO ATTACH HANDLER TO
//const btn = document.getElementById("resetButton");  *commenting out this to show querySelectorAll
const buttons = document.querySelectorAll("button"); //SELECTING ALL BUTTONS

for (const button of buttons) {
    button.addEventListener("click", changeColor)
}

//CREATE A FUNCTION THAT RUNS WHEN ELEMENT EVENT HANDLER IS FIRED
function random(number){
    return Math.floor(Math.random() * (number + 1));
}


//CREATE CALLBACK FUNCTION
function changeColor(){
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}

//ADD EVENT LISTENER TO THE BUTTON
btn.addEventListener("click",(changeColor);

 
//SELCTING THE ELEMENT TO ATTACH HANDLER TO
const button = document.querySelector("button");
 
for (const button of buttons) {
    button.addEventListener("click", changeColor)
}
//CREATE A FUNCTION THAT RUNS WHEN ELEMENT EVENT HANDLER IS FIRED
function random(number){
    return Math.floor(Math.random() * (number + 1));
}
 
//Create callback function
function changeColor(){
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}
   */ 



//SELCTING THE ELEMENT TO ATTACH HANDLER TO
const buttons = document.querySelector("button");
 

//CREATE A FUNCTION THAT RUNS WHEN ELEMENT EVENT HANDLER IS FIRED
function random(number){
    return Math.floor(Math.random() * (number + 1));
}
 
//Create callback function
function changeColor(e){
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    //target the button NOT THE PAGE
    
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

buttons.addEventListener("click", changeColor)
 
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`
});

/*
// Traditional DOM EVENT HANDLER
function checkUsername(){ //code starts by defining the name function
    //code to check the length of the username
    //reference to the DOM element node, stored in a variable
    var el = document.getElementById("username");
    //the function will be called be the event handler but parenthesis are omitted
    el.onblur = checkUsername;
    //event name is preceded by the word "on"
}*/

var elUsername = document.getElementById("username"); //get the element by id
var elMsg = document.getElementById("feedback"); //get the element by id

function checkUsername(minLength){  //declare function
    //get feedback element
    if(elUsername.value.length < minLength){ //check the length of the username
    elMsg.textContent = "Username must be" + minLength + " characters"; //set msg
    }else{ //otherwise
        elMsg.innerHTML = ""; //clear msg
    }

}

    elUsername.addEventListener("blur", () =>{
        checkUsername(5);
    },false);



    var el = document.getElementById("username");
    //the function will be called be the event handler but parenthesis are omitted
    //because the function is not called directly, but rather by the event handler

    el.onblur = checkUsername;
    //even name is preceded by the word "on"


//USING PARAMETERS WITH EVENT HANDLERS AND LISTENERS
var elUsername = document.getElementById("username");
var elMsg = document.getElementById("feedback");

function checkUsername(minLength) { //declare function
     //get feedback element
    if(elUsername.value.length < minLength) { //if username is too short
        elMsg.textContent ="Username must be " + minLength + " characters or more" //set msg
    }else{ //otherwise
        elMsg.innerHTML = "";//clear msg
    }
 
}
 
elUsername.addEventListener('blur', () => {
    checkUsername(5);
}, false)
 
 

//event listener with no params
function checkUsername(e) { //num 2
    var target = e.target; //get target of event, what element its happening on
 
}
var el = document.getElementById("username"); //num 3
el.addEventListener("blur", checkUsername, false); //num 1 is checkUsername here
 
/*
1. Without you doing anything, a reference to the event obj is automatically passed from
the number 1 where the event listener calls the function
2. to here where the function is defined. at this point, the parameter must
be named. its often give the name "e" for event
3. THis name can then be used inside the function as a reference to the event
obj. you can now use the props and methods of the event obj

//event listener with params */
/*
function checkUsername(e, minLength) { //num 2
    var target = e.target; //get target of event, what element its happening on
 
}
var el = document.getElementById("username"); //num 3
el.addEventListener("blur", (e) => {
    checkUsername(e,5);
} , false);

*/