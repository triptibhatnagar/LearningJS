// HOW TO SELECT ELEMENTS :-

let demoTag = document.getElementsByTagName("h2");
// To select all the <h2> tags 
console.log(demoTag);

// To print "Hello" in the selected <h2> elements 
// for(let i = 0; i<demoTag.length; i++) {
//     demoTag[i].innerHTML = "Hello";
// }

// To select those <h2> elements inside the div tag only
let div1 = document.getElementById("div1");
let h2Tag = div1.getElementsByTagName("h2");
console.log(h2Tag);

// Query Selector , To select all <p> having className "intro"
let div2 = document.querySelectorAll("p.intro");
for(let i = 0; i<div2.length; i++) {
    div2[i].innerHTML = "Alpha Intern";
}

// To select a parent element <ul> from its child element
let child = document.getElementById("firstList");
let parent = child.parentElement;
console.log(parent);

// To select a child element <li> from its parent element <ul>
let parentElem = document.getElementById("secondList");
// for first child element -> List a
let firstChild = parentElem.firstElementChild;
console.log(firstChild);
// for last child element -> List d
let lastChild = parentElem.lastElementChild;
console.log(lastChild);

// To select sibling of an element with id="listB"
let listB = document.getElementById("listB");
// for previous sibling -> list a
let prevSibling = listB.previousElementSibling;
console.log(prevSibling);
// for next sibling -> list c
let nextSibling = listB.nextElementSibling;
console.log(nextSibling);


// HOW TO MODIFY ELEMENTS :-
let h2 = document.getElementById("intro");
console.log(h2.innerHTML);//here innerHTML is used to fetch
h2.innerHTML = "Jai Shri Ram";//here innerHTML is used to modify content

//Create and append elements
let thirdList = document.getElementById("thirdList");//parent
let newItem = document.createElement("h1");//new element created
thirdList.appendChild(newItem);//new element added
let text = document.createTextNode("A new heading is added");//text in new element by method
newItem.appendChild(text);//text added
newItem.className = 'new';//class added
newItem.id = 'heading';//id added
newItem.textContent = "New Content Added";//text in new element by property

// To read content 
let para = document.getElementById("para");
console.log(para.textContent);

// Insert before an element 
let list = document.getElementById("thirdList");
let item = document.createElement('li');
item.textContent = "new list 5";
let pos1 = list.firstElementChild;//pos1
let pos2 = list.firstElementChild.nextElementSibling;//pos2
let pos3 = list.firstElementChild.nextElementSibling.nextElementSibling;//pos3
list.insertBefore(item,pos1);
list.insertBefore(item,pos2);
list.insertBefore(item,pos3);

// Remove child element 
let prt = document.getElementById("menu");
prt.removeChild(prt.firstElementChild.nextElementSibling); // to remove "Products"

// Clone or copy element
let menu = document.getElementById("menu");
let cloneElem = menu.cloneNode(true);
cloneElem.id = "nav";
console.log(cloneElem);

// Replace Element
// let menu = document.getElementById("menu");
let createdElem = document.createElement("li");
createdElem.textContent = "Services";
let replace = menu.firstElementChild.nextElementSibling;
menu.replaceChild(createdElem,replace);