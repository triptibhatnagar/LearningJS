// self-invoking -> they are called automatically
(function () {
    console.log("I am a self invoking function .");
  })();


(() => {
  console.log("I called myself !!");
})();

(function fullName () {
  let a = prompt("Enter first name");
  let b = prompt("Enter last name");
  console.log(a+" "+b);
})();