let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");
const genCompChoice = ()=>{
    const options = ["paper","rock","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "game was draw, Play again";
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` 
        msg.style.backgroundColor = "green"
        userScore++;
        user_score.innerText = userScore;
    }
        
    else{
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
        compScore++;
        comp_score.innerText = compScore;
    }
}

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false: true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false: true;
        }
        else{
            userWin = compChoice === "rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})