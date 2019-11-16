
//GET TODAYS DAY
var d = new Date();
var n = d.getDay();
var today;

if (n == 2) {
 today = "Monday"
}
else if (n == 3) {
  today = "Tuesday"
  }
else if (n == 4) {
  today = "Wednesday"
}
else if (n == 5) {
  today = "Thursday"
}
else if (n == 6) {
  today = "Friday"
}
else if (n == 7) {
  today = "Saturday"
}
else if (n == 1) {
  today = "Sunday"
}

function getDayOfWeek() {
alert("Today is " + today);
}

//GET CURRENT DATE
var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = date.getFullYear();

date = dd + '/' + mm + '/' + yyyy;

function dateToday() {
  alert(date)
}

// GET CURRENT TIME

function getTime() {
var idag = new Date();

var hours;
var minutes;
var seconds;

if (idag.getHours() < 10) {
  hours = "0" + idag.getHours();
}
else {
  hours = idag.getHours();
}

if (idag.getMinutes() < 10) {
  minutes = "0" + idag.getMinutes();
}
else {
  minutes = idag.getMinutes();
}

if (idag.getSeconds() < 10) {
  seconds = "0" + idag.getSeconds();
}
else {
  seconds = idag.getSeconds();
}

var time = hours + ":" + minutes + ":" + seconds;

  alert(time);
}


// TIME AGO CREATED

function ageOfPage() {

  var age = new Date("nov 7, 2019 9:00:00").getTime();
  var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = now - age;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dage").innerHTML = "This site was created " + days + " days,  ";

    document.getElementById("timer").innerHTML = hours + " hours,  ";

    document.getElementById("minutter").innerHTML = minutes + " minutes,  ";

    document.getElementById("sekunder").innerHTML = seconds + " seconds ago";

    document.getElementById("frick").style.display = "block";
  }, 1000);
}


// GAME

function game() {
alert("You started a game");
  var random = Math.floor(Math.random()*10);
  // alert(random);

  let guess = prompt("Guess a number between 1 and 10, click 'cancel' to quit");

  if (guess == random) {
    alert("Congratz, you guessed it!");
  }
  else {
    alert("Wrong, try again");
  }

}


//GAME 2

function game2() {
  alert("You started a game");
  let guess = prompt("Write a random word, click 'cancel' to quit");
  let firstLetter = guess.charAt(0);
  alert(firstLetter + guess + firstLetter);
}


//GAME 3

function game3() {
  alert("You started a game");

  let guess = prompt("Write a sentence");

  let x = guess.trim().split(' ');

  if (x.length == 1) {

    alert("This is one word with " + x[0].length + " characters.");

  } else {

    alert("This is a sentence with " + x.length + " words.");

  }

}


//GAME 4

function game4() {
  alert("You started a game");

  let guess = prompt("What year where you born?")

  let today = new Date();

  let age = today.getFullYear() - guess;

  alert("You are " + age + " years old");

}


//GAME 5

function game5() {
  alert("You started a game");

  let guess1 = Number(prompt("Input a number"));
  let guess2 = Number(prompt("Input another number"));
  let guess3 = Number(prompt("Input last number"));


  let nums = [guess1,guess2,guess3];


  function avg (nums) {
    let lgt = nums.length;
    let x = 0;

    for (let i = 0; i < lgt; i++) {
      x = x + nums[i];
    }
    return x / lgt;
  }

  alert(avg(nums));
}


//3.06

function js_style() {
  document.getElementById("text").style.color = "blue";
  document.getElementById("text").style.fontSize = "30px";
}

//3.07

var countDownDate = new Date("dec 24, 2019 12:00:00").getTime();
var x = setInterval(function () {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days + " days - ";

document.getElementById("hours").innerHTML = hours + " hours - ";

document.getElementById("minutes").innerHTML = minutes + " minutes - ";

document.getElementById("seconds").innerHTML = seconds + " seconds";

}, 1000);


// CALCULATOR

 function startCalc() {
   alert("Welcome to my caluclator")

   let result;

   let num1 = Number(prompt("Write the first number in the calculation"));

   if (num1.toString() === 'NaN') {
     alert("Hey, that is not a number");
     return;
   } else if (num1 === 0) {
     alert("Hey, that is not a number");
     return;
   }

   let num2 = Number(prompt("Write the second number in the calculation"));

   if (num2.toString() === 'NaN') {
     alert("Hey, that is not a number")
     return;
   } else if (num2 === 0) {
     alert("Hey, that is not a number");
     return;
   }

   let input = prompt("Write either 'plus', 'minus' 'multiply' or 'divide'");

   let method = input.toLowerCase();
   //convert to all lower case

   if (method == "plus") {
     result = num1 + num2;
     alert("The result is " + result)
   }
   else if (method == "minus") {
     result = num1 - num2;
     alert("The result is " + result)
   }
   else if (method == "multiply") {
     result = num1 * num2;
     alert("The result is " + result)
   }
   else if (method == "divide") {
     result = num1 / num2;
     alert("The result is " + result)
   }
   else {
     alert("No such thing as " + method + ". Please try again" )
   }
   return;

 }


 // FEAST OF THE BEAST

function FOTB() {

  let inAnimal = prompt("Insert name of Beast / Animal");
  let inDish = prompt("Insert Name of Dish");

  let animal = inAnimal.toLowerCase();
  let dish = inDish.toLowerCase();

  let animal2 = inAnimal.charAt(0).toUpperCase() + inAnimal.slice(1);
  let dish2 = inDish.charAt(0).toUpperCase() + inDish.slice(1);

  let firstCh1 = animal.charAt(0);
  let firstCh2 = dish.charAt(0);

  let lastCh1 = animal[animal.length - 1];
  let lastCh2 = dish[dish.length - 1];

  if (firstCh1 === firstCh2 && lastCh1 === lastCh2) {
    alert(animal2 + " is allowed to bring " + dish2)
  } else {
    alert(animal2 + " is not allowed to bring " + dish2)
  }

}






