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
function game(){
    let scorePlayer=0;
    let scoreComputer=0;
    let arr;
    let result;
    let winner;
    for(let i=0;i<5;i++){
        arr=playRound(getPlayerChoice(),getComputerChoice()).split(',');
        result=arr[0];
        if(result==='YOU WON') scorePlayer++;
        else if(result==='YOU LOST') scoreComputer++;
        else{
            scorePlayer++;
            scoreComputer++;
        }
        console.log(`Round ${i+1}:\nComputer: ${scoreComputer}\nYou: ${scorePlayer}`);
    }
    if(scoreComputer>scorePlayer) winner='Computer won';
    else if(scorePlayer>scoreComputer) winner='You won';
    else winner='Tied';
    console.log(`Result is:\nYou: ${scorePlayer}\nComputer: ${scoreComputer}\nOverall result: ${winner}`);
}
game();

