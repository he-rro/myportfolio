
let num1;
let num2;
let result=0;
let num1El=document.getElementById('num1El');
let num2El=document.getElementById('num2El');
let resultEl=document.getElementById('resultEl');
let errorEl =document.getElementById('error');

function genarateNum(){
    num1=Math.floor((Math.random() * 1000) )
   num2=Math.floor((Math.random() * 1000) )
   num1El.textContent=num1;
    num2El.textContent=num2;
  }
  
function add(){
   genarateNum();
result=num1+num2;
resultEl.innerText='sum : '+result;
}

function subtract(){
  genarateNum()
  result=num1-num2;
  resultEl.textContent='sub : '+result;
  }

function multiply(){
    genarateNum()
    result=num1*num2;
    resultEl.textContent='mul : '+result;
    }

function divide(){
    genarateNum()
      result=num1/num2;
      resultEl.textContent='div : '+result;
      }

