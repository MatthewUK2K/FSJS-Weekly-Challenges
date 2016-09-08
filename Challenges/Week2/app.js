//create function
  //control and return statements

var input = prompt("Hello to You!")//Prompt user for input and store variable
//if (input.toLowerCase() == "hello"){
//  alert("Hello World!");
//} else {
  //prompt("That's not what I was looking for.  Try again.");
//}
function processInput(message){

  if (message == "hello") {
    return("Hello world");
  } else {
    return("You didnt say hello.");
  }

}
var response = processInput(input);
console.log(response);
