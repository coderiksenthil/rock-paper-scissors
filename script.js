function myfunction() {
    let name = prompt("Enter the number of times: ", "6");
    //console.log("Hello" + name);
    for(let i = 0; name > i; i ++){
        start();
    } 
}

function start(){
    let playerselection = prompt("Rock Paper or Scissors: ")
    playerselection = start.toLowerCase();
    let computerselection = getComputerchoice();
    let text = choice(playerselection,computerselection);
    console.log(text);
    //computerreply();
}

function getComputerchoice(){
     elements = ['rock', 'paper', 'Scissors'];
     let random = math.floor(math.random()*3);
     return elements[random];
}

function choice(playerselection,computerselection){
    if(playerselection == "rock" && computerselection =="Scissors"){
        print("You won, rock beats paper");
    }else if(playerselection == "Scissors" && computerselection == "rock"){
        print("You lost, Rock beats paper");

    }else if(playerselection == "paper" && computerselection == "rock"){
        print("You Won, paper beats paper");
    }else if(playerselection == "rock" && computerselection == "paper"){
        print("You lost, Rock beats paper");
    }else if(playerselection == computerselection){
        print("its a draw");
    }

}