const words = ["mango", "lemon", "pineapple", "apple", "banana", "kewi"];
const guessWordContainer = document.querySelector(".guess-word");
const wrongContainer = document.querySelector(".wrong-letter");
let randomWord;
let arr =[];

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
        for(let i=0; i<randomWord.length; i++){
            if(randomWord[i] === userGuess){
                wordSpans[i].innerHTML = userGuess
            }
          } //forloop ends
        
          //otherwhise put userGuess into the wrong container
        }else{
            arr.push(userGuess);
            wrongContainer.innerHTML = arr;
        }

    }

      })




    






 



