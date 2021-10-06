const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const pierre ="pierre";
const feuille ="feuille";
const ciseaux ="ciseaux"
const answers =[pierre, feuille, ciseaux];


rl.question(chalk.cyan(`${pierre} ${feuille} ${ciseaux}`), (humananswer) => {

    if (!answers.includes(humananswer)) {
        console.log(chalk.bgRed("Mauvaise saisie"));
        return rl.close();
    }
    console.log(chalk.cyan(`human choice : ${humananswer}`));
    
    const robotChoice = answers[Math.floor(Math.random() * answers.length)];
    console.log(chalk.yellow(`robot choice : ${robotChoice}`));

    console.log(game(humananswer, robotChoice));
    
  rl.close();
});


function game (humananswer, robotChoice){
    if (humananswer === robotChoice){
        return chalk.bgGray('égalité');
    }
    
    if (
        (humananswer === pierre && robotChoice === ciseaux) ||
        (humananswer === feuille && robotChoice === pierre) ||
        (humananswer === ciseaux && robotChoice === feuille)
    ){
        return chalk.bgGreen("Gagné");
    }
    return chalk.bgRed("Perdu");
    
}