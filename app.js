// let outcomeElem = document.querySelector('#outcome')
let rockElem = document.querySelector('#rockout')
let paperElem = document.querySelector('#paperout')
let scissorElem = document.querySelector('#scissorout')


function play(playerChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // if (playerChoice == computerChoice) {
  //   // console.log("Tie!");
  //   outcomeElem.innerHTML = "Tie!"
  // }
  if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      // console.log("Paper covers rock")
      rockElem.innerHTML = "Paper covers rock, you lose!"
    } else if (computerChoice == "scissors") {
      // console.log("Nice Job!")
      rockElem.innerHTML = "Nice Job!"
    } else {
      rockElem.innerHTML = "Tie!"
    }
  }
  if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      // console.log("You Win!")
      paperElem.innerHTML = "You Win!"
    } else if (computerChoice == "scissors") {
      // console.log("Ouch!")
      paperElem.innerHTML = "Ouch!"
    } else {
      paperElem.innerHTML = "Tie!"
    }
  }
  if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      // console.log("Your scissors! Smashed!")
      scissorElem.innerHTML = "Your scissors! Smashed!"
    } else if (computerChoice == "paper") {
      // console.log("Take that, paper!")
      scissorElem.innerHTML = "Take that, paper!"
    } else {
      scissorElem.innerHTML = "Tie!"
    }
  }
}