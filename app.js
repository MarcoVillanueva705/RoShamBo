let outcomeElem = document.querySelector('#outcome')



function play(playerChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice == computerChoice) {
    // console.log("Tie!");
    outcomeElem.innerHTML = "Tie!"
  }
  if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      // console.log("Paper covers rock")
      outcomeElem.innerHTML = "Paper covers rock, you lose!"
    } else if (computerChoice == "scissors") {
      // console.log("Nice Job!")
      outcomeElem.innerHTML = "Nice Job!"
    }
  }
  if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      // console.log("You Win!")
      outcomeElem.innerHTML = "You Win!"
    } else if (computerChoice == "scissors") {
      // console.log("Ouch!")
      outcomeElem.innerHTML = "Ouch!"
    }
  }
  if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      // console.log("Your scissors! Smashed!")
      outcomeElem.innerHTML = "Your scissors! Smashed!"
    } else if (computerChoice == "paper") {
      // console.log("Take that, paper!")
      outcomeElem.innerHTML = "Take that, paper!"
    }
  }
}
