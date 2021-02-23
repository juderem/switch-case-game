# switch-case-game
<h3>Javascript game made during the _nology course</h3>

This is a simple puzzle game created in Javascript and styled with SCSS. The aim of the game is to turn all the boxes from green to grey: once all the boxes are grey the win screen will be triggered.

<h4>Game Preview:</h4>

![game-preview](https://user-images.githubusercontent.com/63235971/108860302-fa2ac680-75e5-11eb-9fcc-7251b9cde325.jpg)

The main portion of the game was built using .toggle functions for each of the nine boxes. On each of the "switched" functions there is a "checkForWin()" function that checks that all of the switches are toggled to "full", when all nine are "full" the win screen is triggered.

<h4>JavaScript Example:</h4>

![code-preview](https://user-images.githubusercontent.com/63235971/108861110-c8662f80-75e6-11eb-8ff2-1c1d0211ad66.jpg)

For the styling I went with a 90's theme, putting the game inside a gameboy-esque styled div and choosing a thematic background:

<h4>Background Image:</h4>

![switchwallpaper](https://user-images.githubusercontent.com/63235971/108844443-0c9c0480-75d4-11eb-832d-d8fbb33f8bbc.jpg)

Bacground artwork found here: https://dribbble.com/shots/6413868-Moar-Rad-Patterns/attachments/6413868-Moar-Rad-Patterns?mode=media

I found a gif of 8bit fireworks online and included them on my victory screen.  

The 'Play Again?' button reloads the page onClick.

<h4>End Screen:</h4>

![win-screen](https://user-images.githubusercontent.com/63235971/108861914-a3be8780-75e7-11eb-9612-fa9968686622.jpg)

GIF source found here: https://8bitartwork.co.uk/
