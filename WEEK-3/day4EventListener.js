// mouse-click event 
let btn = document.getElementById("btn");
function btnClick() {
    console.log("Button was clicked!");
}
btn.addEventListener('click',btnClick);

// mouse-over event 
btn.addEventListener('mouseover',function(){
    console.log("Mouseover Activated!");
})

// mouse-out event 
btn.addEventListener('mouseout',function(){
    console.log("Mouseout Activated!");
})