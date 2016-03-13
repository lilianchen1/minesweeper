# minesweeper
Minesweeper game implemented with React

[Game link](http://lilianchen1.github.io/minesweeper/minesweeper.html)

![game pic] (https://github.com/lilianchen1/minesweeper/blob/master/pic_one.png)

### Click events on the tiles triggers rerendering of components via state changes.

* flagging on a tile updates number of flagges available (total 15, which is the count of number of bombs)
* flagging on a tile or clicking on a tile will trigger a change in information about that tile and as a result a change in the state of the boardGrid stored inside the Board Component
* revealing of neighboring tiles by clicking on a tile with no neighboring bombs is done via a BFS algorithm
* revealing all non-bombs tiles (winning) and clicking on a bomb (losing) end the game and triggers a modal with a click button to start a new game

