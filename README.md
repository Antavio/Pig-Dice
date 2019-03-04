# Pig Dice

## Author
[Anthony Njuguna Kiarie](https://github.com/Antavio)

## Project Description
This is a javascript game for rolling a Die. It allows two players at a time to play against each other. At first the players fill in their names to start the game. The first player rolls a die. If the die lands on number 1 they cannot continue playing, so prompting the second player to roll the die. If the second player does not roll number 1 they continue rolling the die until they roll number 1 which stops them from continuing to play. In addition any player can hold their current score, prompting the other player to play next. Whoever scores 100 points first, they emerge the winner.

### Project Setup instructions
Use the following commands to use this project.
- git clone https://github.com/Antavio/Pig-Dice.git
- cd Quiz-Board
- atom .  //For those using atom text editor.
- code .  //For those using Visual Studio editor.

### Technologies used
The different technologies that were used to develop this program include:
1. HTML.
2. CSS.
3. JavaScript.
4. jQuery.
5. Bootstrap.

### Project's BDD
|Behaviour   |Expected Results   |
|---|---|
|The programs prompts both players to enter their names| Display Players name on the Name Tags  |
|Player One prompted to roll the die   |A random number is generated for the die.  |
|If the generated number is a number 1 | The Player one is disabled to continue playing & instead Player two alerted to play.|
|If number generated for Player one is not equal to 1   |The first player proceeds to roll the die until they roll side with number 1 or they hold the play.The cumulative score, die side rolled & total are all displayed|
|If Player one chances are over Player Two is alerted to roll the die.If the generated number is not a number 1   |They player proceeds to roll the die until they roll side with number 1 or they hold the play . The cumulative score, die side rolled & total are all displayed   |
| If Player two rolls a number 1 or hold their play  | Player one is alerted to play since its their turn   |
|If either Player One/Two holds their play   |Their current score is held & if they resume play, the cumulative score builds from their last score|
| When either player rolls a number 1  | No score is awarded i.e they score a zero|
| When the cumulative score is equal or greater than 100  |The first player to get a cumulative of 100 is declared the winner|

### Link to live site
Here is a link to the live website https://antavio.github.io/Pig-Dice/

### Contact Me
If you have any suggestions, additions or modifications on this project you can reach me via my email: njuguna13@gmail.com

### License  & Copyright information
Copyright (c) 2019 Anthony Njuguna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
