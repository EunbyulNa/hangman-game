# FAC-Application-Project [Game]

## ✨ Planning

Firstly, I designed the layout for the hangman game, which includes a hint header, a hangman drawing section, and a word section. 
I began by sketching the design by hand. 
The logic of the hangman game is quite simple!
The user must guess what the word is and input a letter. 
If the user's guess is correct, the letter will be displayed in the word section. 
If the guess is incorrect, the hangman will be drawn one step at a time, and the incorrect guess will be displayed in the hangman drawing section. 
This will help the user can keep track of which letters they have already guessed incorrectly.


## 🛠️ Building 
#### `1. Store the fruit words in an array`

I have stored many fruit words in the array, so that every time the user refreshes the game, they can play with a new word.
  

#### `2. Generate a random word`
To generate a random word, I used Math.random() * words.length to create a random number between 1 and words.length, 
and then used Math.floor to round it down to an integer. I then looped through the random word's length to create a span element.
So that the word section would be generated according to the length of the random word. 
For example, if the randomw word is "apple", then 5 spans will be generated.
 
#### `3. Key down function`
The key down event only works when the user presses one of alphabetical key. 
Then, checks whether the user has inputted one of the letters from the randomw word or not, using the indexOf method. 
If the user's guess is in the random word, then the index of the random word will be returned, if not, it will return -1. 

 
##### `3-1. When the user's guess is correct`
It will loop through the random word's index, to check which index the letter is at.
Put the user guess in the correct span element. If the index is 0 (i.e., the first letter), it will capitalize the letter.

To check if a user win, I grab all right letter spans, than looping through it. 
And store each spans html text in the correct array, so that I can check the correct array is equal to the random word. 
I chaged the random word's first letter to upper case, so I need to re-change it to match the random word. 

If, the words in the correct array equal to the randomw word, that means a user perfectily fill out the spans. 
And show the "Well done" message. 


##### `3-2. When the user's guess is incoreect`

If the user's guess is incorrect, store the incorrect letter in an array called "wrongArr", than it will display on the wrong letter container.
Also lives will decrement by 1, execute the drawing hangman function.

#### `4. Draw hangman`

I first created the hangman element using HTML and CSS. I also created a variable called "lives" and set its initial value to 8. Every time the user guesses incorrectly, the lives variable is decremented.

To draw the hangman, I used a switch statement. For example, if the "lives" variable is equal to 7 (meaning the user has made one incorrect guess), I draw a part of the hangman. For each case, I created a span element and added a style class to it. Then, I added this span element to the existing spans that make up the hangman.

Finally, if the "lives" variable reaches 0, I show a "game over" message with a delay of 1 millisecond.

#### `5. Show the message (Game over / Well done)`


#### `6.Re start the game`


## 👾 Debugging 



