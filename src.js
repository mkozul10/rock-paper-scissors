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
