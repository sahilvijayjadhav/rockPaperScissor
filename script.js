let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawGame = () =>
    {
        console.log("game was draw");
        msg.innerText = "Game was draw. play again!"
        msg.style.backgroundColor = "#081b31";
    }
const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}
const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin)
        {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You Win! Your "${userChoice}" beats "${compChoice}"`
            msg.style.backgroundColor = "green";
        }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! "${compChoice}" beats your "${userChoice}"`
        msg.style.backgroundColor = "Red";
    }
}
const playGame = (userChoice) =>
    {
        const compChoice = genCompChoice();
        if(userChoice === compChoice)
            {
                drawGame();
            }
            else{
                let userwin = true;
                if(userChoice === "rock")
                {
                    userwin = compChoice === "paper" ? false : true;
                }else if(userChoice === "paper")
                    {
                        userwin = compChoice === "scissor" ? false : true;
                    }
                else{
                    userwin = compChoice === "rock" ? false : true;
                }
                showWinner(userwin,userChoice,compChoice);
            }
            
    }
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});