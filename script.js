const options = ['Rock', 'Paper', 'Scissors'];
let computerChoice;
let playerChoice;
let button = document.querySelectorAll('.rpsButton');
let totalScore = {
    computerScore: 0,
    playerScore: 0
};
let resultDiv = document.getElementById('result');
let handDiv = document.getElementById('hands');
let playerScoreDiv = document.getElementById('player-score');

const getComputerChoice = () => {
    let b = Math.round(Math.random()*3);
    return options[b];
}

const getResult = (playerChoice, computerChoice) => {
    let score;
    if(playerChoice == computerChoice){
        score = 0;
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
        score =+ 1;
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        score =+ 1;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score =+ 1;
    } else {
        score =- 1;
    }
    return score;
}


const showResults = (score, playerChoice, computerChoice) => {
    if (score == -1){
        resultDiv.innerText = "Human lost!"
    } else if (score == 0){
        resultDiv.innerText = "It's a tie!"
    } else {
        resultDiv.innerText = "Human Won!"
    }

    handDiv.innerText = `Human choice: ${playerChoice} & Computer Choice: ${computerChoice}`;

}

const onClickButton = (playerChoice) => {
    console.log(`player choice: ${playerChoice}`)
    console.log(`Computer choice: ${computerChoice}`);
    let score = getResult(playerChoice, computerChoice);
    totalScore['playerScore'] += score;
    totalScore['computerScore'] += score;

    console.log({ totalScore });
    console.log({score});
    showResults(score, playerChoice, computerChoice);
}


const playGame = () => {
    button.forEach(button => {
        button.onclick = () => onClickButton(button.value);
        const stopGameButton = document.getElementById('endGameButton');
        stopGameButton.onclick = () => stopGame(totalScore);
    })
}

const stopGame = (totalScore) => {
    totalScore['playerScore'] = 0;
    totalScore['computerScore'] = 0;

    resultDiv.innerText = '';
    handDiv.innerText = '';
    playerScoreDiv.innerText = '';
}

computerChoice = getComputerChoice();
playGame();

