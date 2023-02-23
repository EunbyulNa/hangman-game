const words = ["mango", "lemon", "pineapple", "apple", "banana", "kewi"];
const guessWordContainer = document.querySelector(".guess-word");
const wrongContainer = document.querySelector(".wrong-letter");
let randomWord;
let arr =[];
let lives = 8;
let isGameover = false;

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
  };

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

      const drawContainer = document.querySelector(".hangman-draw");

      const pillar = document.querySelector(".pillar");

      function drawHangman(){
        if(lives === 7){
          let drawOne = document.createElement('span');
          drawOne.classList.add("draw-one");
         
          pillar.insertAdjacentElement('afterend', drawOne);
        }
        if(lives === 6){
          let drawTwo = document.createElement('span');
          drawTwo.classList.add("draw-two");
         
          pillar.insertAdjacentElement('afterend', drawTwo);
        }
        if(lives === 5){
          let drawThree = document.createElement('span');
          drawThree.classList.add("draw-three");
          pillar.insertAdjacentElement('afterend', drawThree);
        }
        if(lives === 4){
          let drawFour = document.createElement('span');
          drawFour.classList.add("draw-four");
          pillar.insertAdjacentElement('afterend', drawFour);
        }
        if(lives === 3){
          let drawFive = document.createElement('span');
          drawFive.classList.add("draw-five");
          pillar.insertAdjacentElement('afterend', drawFive);
        }
        if(lives === 2){
          let drawSix = document.createElement('span');
          drawSix.classList.add("draw-six");
          pillar.insertAdjacentElement('afterend', drawSix);
        }
        if(lives === 1){
          let drawSeven = document.createElement('span');
          drawSeven.classList.add("draw-seven");
          pillar.insertAdjacentElement('afterend', drawSeven);
        }
        if(lives === 0){
          let drawEight = document.createElement('span');
          drawEight.classList.add("draw-eight");
          pillar.insertAdjacentElement('afterend', drawEight);
          
          const gameOverTime = setTimeout(gameover, 1);
         
        }
       

      }

      function gameover() {
        alert("game over");
        isGameover = true;
      }








 



