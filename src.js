const CHOICES=['rock','paper','scissors'];

function getComputerChoice(){
    let choiceIndex=Math.floor(Math.random()*3);
    let choice=CHOICES[choiceIndex];
    return choice;
}
function getPlayerChoice(){
    return new Promise((resolve)=>{
        let PlayerChoice;
        const buttons=document.querySelectorAll('.button1');
        buttons.forEach(button=>{
        button.addEventListener('click',()=>{
            PlayerChoice=button.getAttribute('data-option');
            resolve(PlayerChoice);
        });
    });
    });
    
}

function playRound(PlayerChoice,ComputerChoice){
    switch(PlayerChoice){
        case CHOICES[0]:
            if(ComputerChoice===CHOICES[0]) return 'TIE, rock vs rock';
            else if(ComputerChoice===CHOICES[1]) return 'YOU LOST, paper covers rock';
            else return 'YOU WON, rock crushes scissors';
            break;
        case CHOICES[1]:
            if(ComputerChoice===CHOICES[0]) return 'YOU WON, paper covers rock';
            else if(ComputerChoice===CHOICES[1]) return 'TIE, paper vs paper';
            else return 'YOU LOST, scissors cut paper';
            break;
        case CHOICES[2]:
            if(ComputerChoice===CHOICES[0]) return 'YOU LOST, rock crushes scissors';
            else if(ComputerChoice===CHOICES[1]) return 'YOU WON, scissors cut paper';
            else return 'TIE, scissors vs scissors';
            break;
        default:
            break;
    }
}
function game(){
    getPlayerChoice().then((message)=>{
        //console.log(playRound(message,getComputerChoice()));
        const span=document.querySelector('#result1');
        span.innerHTML=playRound(message,getComputerChoice());
    });
}



const buttons=document.querySelectorAll('.button1');
buttons.forEach((button)=>{
    button.addEventListener('click',game);
});







