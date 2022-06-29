
let cards=[];
let sumOfCards=0;
let hasBlackjack=false;
let isAlive=false;
let message="";
let messageEl=document.getElementById('messageEl');
let cardEl=document.getElementById('cardEl');
let sumEl=document.querySelector('#sumEl');

function renderGame(){

cardEl.textContent ='Cards : ';
   for(let i =0 ;i<cards.length ;i ++){  
 cardEl.textContent +=' '+cards[i];
  }

  sumEl.textContent= 'Sum :  '+sumOfCards;
  if(sumOfCards<=20){
    message="Add new Card";
  }
  else if(sumOfCards===21){
    message="you've got blackJack";
    hasBlackjack=true;
  }
  else{
    message="you are out Of The Game ";
    isAlive=false;
  }
  messageEl.textContent=message;
  
}

 function startGame(){
  isAlive=true
  let firstCard=randomCard();
let secondCard=randomCard();
 cards=[firstCard,secondCard]
 sumOfCards=firstCard+secondCard;
  renderGame();
}

function newCard(){
  if(isAlive===true && hasBlackjack===false){
    let addNewCards=Math.floor((Math.random() * 13) + 1);
    cards.push(addNewCards);
   sumOfCards +=addNewCards;
   renderGame();
  }else{
    message="Game Over ,Click Start Game ";
    messageEl.textContent=message;
  }

 
}

function randomCard(){
let number=Math.floor((Math.random() * 13) + 1);
if(number===1){
  return 1;
}
if (number>10) {
  return 10;
} 
else{
  return number;
}

}






/* //for Loop
let greatings=['hey ','my name is ','hero'];
let greatId=document.getElementById('greatId');
for(let g=0 ; g<greatings.length ;g ++){ 
  console.log(greatings[g]); 
  greatId.textContent += greatings[g];
} */

