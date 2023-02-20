const words = ["dog", "cat", "pineapple", "apple"];
const container = document.querySelector(".container");
const wrong = document.querySelector(".wrong");
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
        spans.classList.add("span");
        container.appendChild(spans);
    }
  };

  //Keydown 
  
  window.addEventListener("keydown", function(e){
    let userKeyDown = e.key;
    if(randomWord.indexOf(userKeyDown) > -1){
        console.log(userKeyDown);
    }else{   
      arr.push(userKeyDown);
      wrong.innerHTML = arr;
       
    }

   
    
   
  
 
    
    
  })

