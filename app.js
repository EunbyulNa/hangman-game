const words = ["mango", "lemon", "pineapple", "apple", "banana", "kewi",
"strawberries", "grape", "orange", "watermelon", "cherry", "papaya",
"cranberry", "peach", "lychee", "pear", "blueberry"];
const guessWordContainer = document.querySelector(".guess-word");
const wrongContainer = document.querySelector(".wrong-letter");
const drawContainer = document.querySelector(".hangman-draw");
const pillar = document.querySelector(".pillar");
let randomWord;
let arr =[];
let lives = 8;
let isGameover = false;
let isRestart = false;


document.addEventListener( "DOMContentLoaded", function() {  
    random();     
});
  

  //randomize words
  function random() {   
    let randomNum = Math.floor(Math.random() * words.length);
    randomWord = words[randomNum];
    console.log(randomWord)

    for(i=0; i<randomWord.length; i++){
        let spans = document.createElement("span"); 
        spans.classList.add("right-letter");
        guessWordContainer.appendChild(spans);
    }
   
    makePillar()
  };

  //make a pillar
  function makePillar(){
    let pillar = document.createElement('span');
    pillar.classList.add("pillar");
    drawContainer.appendChild(pillar);   
  }

  //Keydown 
     
      window.addEventListener("keydown", function(e) {
        //if game is over exit the keydown function, so a user can't put the word anymore
        if(isGameover) return;

        let eventKeyCode = e.keyCode;
        let userGuess = e.key;
        let wordIndex = randomWord.indexOf(userGuess);
        let wordSpans = document.querySelectorAll(".right-letter");
        
    
         //Only works when a user press down alphabet keyboard
        if ( (eventKeyCode > 64 && eventKeyCode < 91) || (eventKeyCode > 96 && eventKeyCode < 123) || (eventKeyCode == 8) ) 
        
        { 
         //if indexOf is bigger than -1, means if there's a correct guess
        if( wordIndex > -1) {

        //loop through the randomWord, if user put the right guess, 
        //and fill the correct word into the each span
     
          for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userGuess) {
              
           
              
              if (i === 0) {
                wordSpans[i].innerHTML = randomWord[i].toUpperCase();
              } else {
                wordSpans[i].innerHTML = userGuess;
              }
             
             
              let correct = document.querySelectorAll(".right-letter");
              let correctArr =[];
             correct.forEach( (span) => {
               correctArr.push(span.innerHTML)
             })
             if(correctArr.join('').toLowerCase() === randomWord){
              setTimeout(wellDone,1)
             }
            
             
            }
             
          }
       
          //otherwhise put userGuess into the wrong container
        }else{
            arr.push(userGuess);
            wrongContainer.innerHTML = arr;
            lives --;
            drawHangman()
              
        }
       }
      });


      
      function drawHangman(){
        let aPillar = document.querySelector(".pillar");
      switch (lives) {
          case 7:
            let drawOne = document.createElement('span');
            drawOne.classList.add("draw-one"); 
            aPillar.insertAdjacentElement('afterend', drawOne);
            break;
          case 6:
           let drawTwo = document.createElement('span');
          drawTwo.classList.add("draw-two");
          aPillar.insertAdjacentElement('afterend', drawTwo);
           break;

           case 5:
         let drawThree = document.createElement('span');
          drawThree.classList.add("draw-three");
          aPillar.insertAdjacentElement('afterend', drawThree);
          break;

          case 4:
        let drawFour = document.createElement('span');
          drawFour.classList.add("draw-four");
          aPillar.insertAdjacentElement('afterend', drawFour);
          break;    
         
         case 3: 
         let drawFive = document.createElement('span');
          drawFive.classList.add("draw-five");
          aPillar.insertAdjacentElement('afterend', drawFive);
         break;
         
         case 2:
         let drawSix = document.createElement('span');
          drawSix.classList.add("draw-six");
          aPillar.insertAdjacentElement('afterend', drawSix);
        break;
        
        case 1:
         let drawSeven = document.createElement('span');
          drawSeven.classList.add("draw-seven");
          aPillar.insertAdjacentElement('afterend', drawSeven);
         break;
        
         case 0:
          let drawEight = document.createElement('span');
          drawEight.classList.add("draw-eight");
          aPillar.insertAdjacentElement('afterend', drawEight);
          const gameOverTime = setTimeout(gameover, 1);
         
        }

      
      }

      function gameover() {
        let msg = document.createElement("div");
        let gameOverMsg = document.createElement("p");
       
   
        gameOverMsg.innerText = "Poor man..Press Enter to replay";
    

        msg.classList.add("msg");
       
       msg.appendChild( gameOverMsg);
        document.body.appendChild(msg);
    
        isGameover = true;
        window.addEventListener("keydown", reStart);
      
    
      };

      function wellDone(){
        let msg = document.createElement("div");
        let wellDoneMsgp = document.createElement("p");
       
   
        wellDoneMsgp.innerText = "Well done! Press Enter to replay";
    

        msg.classList.add("msg");
       
       msg.appendChild(wellDoneMsgp);
        document.body.appendChild(msg);
    
        isGameover = true;
        window.addEventListener("keydown", reStart);
      
      }

      

      const reStart = function(e) {
        let msg= document.querySelector(".msg");
        if(e.key === "Enter") {
          guessWordContainer.innerHTML = "";
          wrongContainer.innerHTML = "";
          drawContainer.innerHTML = "";
          arr = [];
          lives = 8;
          msg.remove();
          random(); 
          isGameover = false;
        }
      };
      
     
       








 


