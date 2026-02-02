    let score=JSON.parse(localStorage.getItem('score'))||{
      wins:0,
      losses:0,
      draws:0
    };
    let computerMove="";
    let usermove="";
    let result="";
    document.body.addEventListener('keydown',(event)=>{
      if(event.key==='r'){
        usermove='rock';
        playGame(usermove);
      }
      if(event.key==='p'){
        usermove='paper';
        playGame(usermove);
      }
      if(event.key==='s'){
        usermove='scissors';
        playGame(usermove);
      }
    });
    function playGame(usermove){
      if(usermove=='rock'){
        computerMove=checkCompMove();
        if(computerMove=='rock'){
          result="its a tie!";
        } else if (computerMove=='scissors'){
          result="You win!";
        } else {
          result="You lose!";
        }
      }
      if(usermove=='paper'){
        computerMove=checkCompMove();
        if(computerMove=='rock'){
          result="You win!";
        } else if (computerMove=='scissors'){
          result="its a tie!";
        } else {
          result="You lose!";
        }
      }
      if(usermove=='scissors'){
        computerMove=checkCompMove();
        if(computerMove=='rock'){
          result="You lose!";
        } else if (computerMove=='scissors'){
          result="its a tie!";
        } else {
          result="You win!";
        }
      }
      if(result=="You lose!"){
        score.losses++;
      } else if(result=="You win!"){
        score.wins++;
      } else {
        score.draws++;
      }
      showresult();
      showmoves();
      showscore();
      localStorage.setItem('score',JSON.stringify(score));
    }
    function checkCompMove(){
      let randomNumber=Math.random();
      if(randomNumber>=0 && randomNumber<1/3){
        computerMove='rock';
      } else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove='paper';
      } else {
        computerMove='scissors';
      }
      return computerMove;
    } 
    function showresult(){
      document.querySelector('.result').innerHTML=result;
    }
    function showscore(){
      document.querySelector('.score').innerHTML=`Wins = ${score.wins} Losses = ${score.losses} Draws = ${score.draws}`;
    }
    function showmoves(){
      document.querySelector('.moves').innerHTML=`You <img src="images/${usermove}-emoji.png" class="move-icon"> vs <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
    }