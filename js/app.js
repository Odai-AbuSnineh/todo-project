'use strict'

// phase 1 :

let userName, userAge, userGender;

userName = prompt("Give me your name");
userGender = prompt("Give me your gender (male, female)");
userAge = Number(prompt("Give me your age"));

if (userAge <= 0) alert("A negative number is not allowed for age");

function welcomingMessage() {
  if (userGender === "female") alert("Hello Ms " + userName);
  else if (userGender === "male") alert("Hello Mr " + userName);
  else alert("Hello " + userName);
}

let welcomeQuestion = confirm("Do you want to skip the welcoming message?");
if (welcomeQuestion == false) {
  welcomingMessage()
}


// phase 2 :

let additionalQuestions = confirm("Would you like to take other questions?")

if (additionalQuestions === true) {

  let question1, question2, question3;

  question1 = prompt("Do you have tasks you want to get done? (yes, no)")
  question2 = prompt("Does our website help you organize your time? (yes, no)")
  question3 = prompt("Do you recommend our site to your friends? (yes, no)")

  let arrAnswers = [];

  function checkResult(question) {
    if (question === "yes") { arrAnswers.push("yes") }
    else if (question === "no") { arrAnswers.push("no") }
    else if (question === "") { arrAnswers.push("invalid") }
  }

  checkResult(question1)
  checkResult(question2)
  checkResult(question3)
  console.log(arrAnswers);

  for (let i = 0; i < arrAnswers.length; i++) {
    console.log(arrAnswers[i]);
  }

}







