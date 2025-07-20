/*
var items = document.getElementsByClassName("items");

for (var i = 0; i < items.length; i++) {

    items[i].textContent = "I am list item number " + i;
}

//items[0].innerHTML = "I have <em>freedom</em> of choice.";
//items[0].className = "item selected";

//document.write();

var list = document.getElementById("list");
var newItem = document.createElement("li");
var newText = document.createTextNode("I am a new list item.");
newItem.appendChild(newText);
list.appendChild(newItem);

var remove = list.firstElementChild.nextElementSibling;

list.removeChild(remove);

//----------

// 0. Add New List Items

var list = document.getElementById("list");
var newItem = document.createElement("li");
var newText = document.createTextNode("New Item.");
var addbutton = document.getElementById("addButton");

addbutton.onclick = function() {
    newItem = document.createElement("li");
    newText = document.createTextNode("New Item.");
    newItem.appendChild(newText);
    list.appendChild(newItem);
}
        // 1. Remove Last List Item

var removebutton = document.getElementById("removeButton");

removebutton.onclick = function() {
    list.removeChild(list.lastChild);
}

//----------

// 2. Change Element's Class

var para = document.getElementsByClassName("normal")[1];
var classButton = document.getElementById("changeButton");
var newClass = "highlight";

classButton.onclick = function(){

    para.className = newClass;

}



//----------

// 3. Change Element's Attribute

var link = document.getElementById("balloon");
var imageButton = document.getElementById("imageButton");

imageButton.onclick = function() {
    if(link.hasAttribute("src")) {

     link.setAttribute("src", "../images/Jazmin.png");
    }
}
//----------
*/
//4. Toggle Element's Visibility

var toggleButton = document.getElementById("toggleButton");
var invisible = document.getElementById("visible");

toggleButton.onclick = function() {
  invisible.hidden = !invisible.hidden;
};

//----------

