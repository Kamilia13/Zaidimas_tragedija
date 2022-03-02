"use strict";

var player1 = document.getElementsByTagName("button")[0];
var player2 = document.getElementsByTagName("button")[1];
var displayNumber = document.getElementById("displayNumber");
var displayNumber1 = document.getElementById("displayNumber");
var dataPlace = document.querySelector("[dataPlace]");
var number = 0;

displayNumber.innerText = number;

function myFunction() {
  document.getElementById("myNumber").value = "5";
  gameNumber = myNumber;
}







// // Kvadrateliu pridejimas 1
// player1.addEventListener("click", function(){
//     var newBox = document.createElement("number");
//     var number = dataPlace.querySelectorAll("number");

//     if(number.length){
//     number = number.length + 1;
//     displayNumber.innerText = number;
//     } else {
//     number = 1
//     displayNumber.innerText = number;
//     }


//     newBox.innerHTML = 
//     `
        
//     <h2>${number}</h2>
            
//     `
//     dataPlace.append(newBox);
//     istrinti.disabled = false;




// // Pridejimo animacija
// newBox.style.transform = " scale(1.2)";
//  newBox.style.boxShadow = " 0 0 5px grey,0 0 10px grey,0 0 15px grey;";
//     setTimeout(function(){
//         newBox.style.boxShadow = " 0 0 0 grey";
//         newBox.style.transform = " scale(1)";
//     })

// });

// // Kvadrateliu istrinimas
// istrinti.addEventListener("click", function(){
// var divs = dataPlace.querySelectorAll("div");

// if(divs.length){
    
//     divs[divs.length - 1].classList.add("remove");
// setTimeout(function(){
//     divs[divs.length - 1].remove();
// }, 500);

// // Display number
//     number = divs.length - 1;
//     displayNumber.innerText = number;
// } else{
//     istrinti.disabled = true;
// }

// });