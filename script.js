function myfunction() {
    let name = prompt("Enter the number of times: ", "6");
    //console.log("Hello" + name);
    for(let i = 0; name > i; i ++){
        start();
    } 
}

function start(){
    let start = prompt("Rock Paper or Scisccors: ")
    start = start.toLowerCase();
    computerreply();
}