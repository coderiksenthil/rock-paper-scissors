function myfunction() {
    //let name = prompt("Enter the number of times: ", "6");
    //console.log("Hello" + name);
    //for(let i = 0; name > i; i ++)
    for(let i = 0;i<5;i++){
        start();
    } 
}

function start(){
    let playerselection = prompt("Rock Paper or Scissors: ")
    playerselection = playerselection.toLowerCase();
    let computerselection = getComputerchoice();
    let text = choice(playerselection,computerselection);
    console.log(text);
    //computerreply();
}

function getComputerchoice(){
     elements = ['rock', 'paper', 'Scissors'];
     let random = Math.floor(Math.random()*3);
     return elements[random];
}

function choice(playerselection,computerselection){
    if(playerselection === "rock" && computerselection ==="Scissors"){
        let text = "You won, rock beats paper";
        return text;
    }else if(playerselection === "Scissors" && computerselection === "rock"){
        let text = "You lost, Rock beats paper";
        return text;

    }else if(playerselection === "paper" && computerselection === "rock"){
        let text = "You Won, paper beats paper";
        return text;
    }else if(playerselection === "rock" && computerselection === "paper"){
        let text = "You lost, Rock beats paper";
        return text;
    }else if(playerselection === computerselection){
        let text = "its a draw";
        return text;
    }else{
        let text = "you win";
        return text;
    }
}