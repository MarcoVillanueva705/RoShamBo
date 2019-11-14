function play(playerChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice == "rock" && computerChoice == "rock") {
    console.log("Tie!");
  }
  if (playerChoice == "rock") {
    if (computerChoice == "paper") {
      console.log("Paper covers rock :(")
    }
  }
  if (playerChoice == "rock") {
    if (computerChoice == "scissors") {
      console.log("Nice Job!")
    }
  }
  if (playerChoice == "paper" && computerChoice == "paper") {
    console.log("Another Tie!");
  }
  if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("You Win!")
    }
  }
  if (playerChoice == "paper") {
    if (computerChoice == "scissors") {
      console.log("Ouch!")
    }
  }
  if (playerChoice == "scissors" && computerChoice == "scissors") {
    console.log("Wow! Tied again!");
  }
  if (playerChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("Your scissors! Smashed!")
    }
  }
  if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      console.log("Take that, paper!")
    }
  }
}
