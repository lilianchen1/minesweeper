# minesweeper
Minesweeper game implemented with React

### Click events on the tiles triggers rerendering of components via state changes.

* flagging on a tile updates number of flagges available (total 15, which is the count of number of bombs)
* flagging on a tile or clicking on a tile will trigger change in information about that tile and as a result a change in state of the boardGrid stored inside the Board Component

