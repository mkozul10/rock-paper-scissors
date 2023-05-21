const CHOICES=['rock','paper','scissors'];

function getComputerChoice(){
    let choiceIndex=Math.floor(Math.random()*3);
    let choice=CHOICES[choiceIndex];
    return choice;
}
function getPlayerChoice(){
    let check;
    let choice=prompt('Enter rock, paper or scissors: ').toLowerCase();
    for(let i=0;i<3;i++){
        if(choice==CHOICES[i]){
            check=true;
        }
    }
    if(!check){
        alert('Invalid input, try again');
        return;
    }
    return choice;
}
