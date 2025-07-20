
// 0. Click Even to Change Text

const text = document.getElementById("textButton");

text.addEventListener("click", () =>{

    var text = document.getElementById("textButton");

    text.textContent = "You clicked the button!";
});


//-----------------

// 1. Mouseover Event to Change Background Color

const colorHover = document.getElementById("divContainer");

colorHover.addEventListener("mouseover", ()=>{

    e.target.style.backgroundColor = "lightblue";
});
colorHover.addEventListener("mouseout", ()=>{

    e.target.style.backgroundColor = "white";
});



//-----------------

// 2. Keydown Event to Display Key Pressed

const textBox = document.querySelector("#inputText");
const display = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
    display.textContent = `You pressed "${event.key}".`;
    console.log("test");
});

//-----------------

// 3. Double-Click to Change Image

const picture = document.getAttribute("image");

 picture.addEventListener("dblclick", ()=>{

    if (picture.hasAttribute("src")){

        if(picture.getAttribute("src") == "../images/aang.jpg")

    }else if( picture.)
 });


//------------------

// 4. Form Submit Event to Prevent Default Action

const form = document.getElementById("form");
const submit = document.getElementById("submit");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {

    e.preventDefault(); // prevent the default form submission

    const username = document.getElementById("username");

    const output = document.getElementById("ouput");

    output.textContent = `Hello, ${nameInput.value}!`;
});



//submit.addEventListener("click", (e) => {
//     e.preventDefault(); // prevent the default form submission
// output.textContent = "Thank you for submitting!";
// });