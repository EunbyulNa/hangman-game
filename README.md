# FAC-Application-Project [Game]

## ✨ Planning

Firstly, I designed the layout for the hangman game, which includes a hint header, a hangman drawing section, and a word section.<br>
I began by sketching the design by hand. <br>

The logic of the hangman game is quite simple!<br>
The user must guess what the word is and input a letter. If the user's guess is correct, the letter will be displayed in the word section. <br>
If the guess is incorrect, the hangman will be drawn one step at a time, and the incorrect guess will be displayed in the hangman drawing section. 
This will help the user can keep track of which letters they have already guessed incorrectly.


## 🛠️ Building 
### 1. Store the fruit words in an array
I have stored many fruit words in the array, so that every time the user refreshes the game, they can play with a new word.


### 2. Generate a random word
To generate a random word, I used `Math.random() * words.length` to create a random number between 1 and words.length, <br>
and then used `Math.floor` to round it down to an integer. I then looped through the random word's length to create a span element.<br>
So that the word section would be generated according to the length of the random word. <br>
For example, if the randomw word is "apple", then 5 spans will be generated.


### 3. Key down function
The key down event only works when the user presses one of alphabetical key. <br>
Then, checks whether the user has inputted one of the letters from the random word or not, using the `indexOf()` method. <br>
If the user's input is in the random word, then the `indexOf()` method will return the index of the random word. Otherwise, it will return -1.<br>


#### 3-1. When the user's guess is correct
It will loop through the random word's index, to check which index the letter is at.<br>
Put the user guess in the correct span element. If the index is 0 (i.e., the first letter), it will capitalize the letter.<br>

To check if the user has won, I select all the word spans (in this case, called `correct`) and loop through each span. <br>
I store each span's HTML text in an array called `correctArr`. To match the `correctArr` with the `random word`, I convert the array to a string. 
If the correct letters match the random word, it means that the user has perfectly filled out the spans. In this case, I display a "Well done" message.<br>


#### 3-2. When the user's guess is incoreect
If the user's guess is incorrect, store the incorrect letter in an array called `wrongArr`, than it will display on the wrong letter container.<br>
Also lives will decrement by 1, execute the drawing hangman function.

### 4. Draw hangman
I first created the hangman element using HTML and CSS. <br>
I also created a variable called `lives` and set its initial value to 8. Every time the user guesses incorrectly, the lives variable is decremented.<br>

To draw the hangman, I used a `switch` statement. For example, if the "lives" variable is equal to 7 (meaning the user has made one incorrect guess),
I draw a part of the hangman. For each case, I created a span element and added a style class to it.
Then, I added this span element to the existing spans that make up the hangman.

Finally, if the `lives` variable reaches 0, I show a "game over" message with a delay of 1 millisecond.


### 5. Show the message (Game over / Well done)
 #### 5-1. Game over
 Display the following paragraph, "Poor man! Press Enter to play again." <br>
 Then, set the `isGameover` variable to true, so the user cannot press any alphabetical keys on the keyboard anymore. <br>
 If the user presses the Enter key, the game will start with a new word.
 
 #### 5-2. Well Done
 The same logic as Game over, but the paragraph will be different.

### 6. Re start the game
If the user presses the Enter key, the message display will disappear, and the user input and the drawing of the hangman will be reset to empty. <br>
The `lives` variable will be reset to its original number of 8, and the `random()` function will be executed to randomize the word. 
`isGameover` variable will be set to false, so the user can access the alphabetical keyboard again.
 

## 👾 Debugging
Whenever I face a bug or get stuck with the logic, I use these four methods:

- Read an article :
When I found that it is difficult to put a user input into the spans, I searched online and found a helpful article. 
The article suggested looping through the length of the random word, and if the user's guess matches one of the letters at randomword[i], 
put the user guess into the span. It's good to read an article getting some hint! 

- Ask a mentor : 
When I struggled to change only the first letter to uppercase, I spent two days thinking about it without success. 
Eventually, I asked a mentor for help, and she gave me valuable advice.

- Be a friend with Console.log() :
I use console.log() to check if I have selected the correct element. 
Sometimes, I select the wrong elements, and it leads to unexpected results. So it is important to be a besty with console :) 

- Build one part at a time :
"Rome wasn't built in a day." 
Creating something from nothing always takes time, so I keep this phrase in my mind. 
I focus on one feature at a time, so I won't be overwhelmed. Doing

