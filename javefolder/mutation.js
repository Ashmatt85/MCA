/*  // Jessika Example
var elList, addLink, newEl, newText, counter, listItems; // Declare variables
 
elList  = document.getElementById('list');               // Get list
addLink = document.querySelector('a');                   // Get add item button
counter = document.getElementById('counter');            // Get item counter
 
function addItem(e) {                                    // Declare function
  e.preventDefault();                                    // Prevent link action
  newEl = document.createElement('li');                  // New <li> element
  newText = document.createTextNode('New list item');    // New text node
  newEl.appendChild(newText);                            // Add text to <li>
  elList.appendChild(newEl);                             // Add <li> to list
}
 
function updateCount() {                                 // Declare function
  listItems = elList.getElementsByTagName('li').length;  // Get total of <li>s
  counter.innerHTML = listItems;                         // Update counter
}
 
addLink.addEventListener('click', addItem, false);       // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated
*/
//Self Paced Example

const container = document.getElementById("container");
const button = document.getElementById("add");

const observer = new MutationObserver(mutations => {
console.log("DOM changed:", mutations);
});

observer.observe(container, {
childList: true
});

button.addEventListener("click", () => {
        // Create a new paragraph element and append it to the container
    const newP = document.createElement("p");

    newP.textContent = "New paragraph added!";

    container.appendChild(newP);
});

const colorBox = document.getElementById("colorBox");
const toggleButton = document.getElementById("toggleColor");

const colorObserver = new MutationObserver(mutations => {
console.log("Attribute changed:", mutations);
});

colorObserver.observe(colorBox, {
attributes: true
});

toggleButton.addEventListener("click", () => {

colorBox.className = (colorBox.className === "white") ? "blue" :
"white";
});

const list = document.getElementById("itemList");
const addItem = document.getElementById("addItem");

const listObserver = new MutationObserver(mutations => {
console.log("List changed:", mutations);
});

listObserver.observe(list, { childList: true });

addItem.addEventListener("click", () => {
const li = document.createElement("li");
li.textContent = "New Item";
list.appendChild(li);
});

const stopButton = document.getElementById("stopObserving");

stopButton.addEventListener("click", () => {
observer.disconnect();
console.log("Observer stopped.");
});


//UI-Window Load Alert

//const check = document.getElementById("alertButton");

//check.addEventListener("click", () => {
//    alert("Button has been clicked!");
//});

window.addEventListener("load", () =>{


})

//Mouse Event- Change Box Color on Click

const clickable = document.getElementById("clickable");
const boxButton = document.getElementById("boxButton");

const newNew = new MutationObserver(mutations => {
console.log("Attribute changed:", mutations);
});

newNew.observe(boxButton, {
attributes: true
});

clickable.addEventListener("click", () => {

boxButton.className = (boxButton.className === "yellow") ? "green" :
"yellow";
});

//-------------------------------

//Keyboard Event-Display Pressed Key

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
    output.textContent += `You pressed "${event.key}".`
});

