// getElementById Method
let x = document.getElementById("elem1");
console.log(x);

// innerHTML Property
x.innerHTML = "DAYS";
console.log(x);

// getElementsByClassName Method
let elem = document.getElementsByClassName("class");
console.log(elem);
console.log(elem.length);
// iterating like an array 
for(let i = 0; i<elem.length; i++) {
    elem[i].innerHTML="<p> SUNDAY </p>";
}

// getElementsByTagName Method
let tag = document.getElementsByTagName("li");
console.log(tag);
let li_1 = document.getElementsByTagName("li")[0];
console.log(li_1);