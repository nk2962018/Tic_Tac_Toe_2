import { useState } from "react";
import "../styles/TicTacToe.css";
import Board from "./Board";
import { 
  Constants, 
  horizontalWinningPositions, 
  verticalWinningPositions,
  diagonalWinningPositions
} from "./constants/Constants";
import Status from "./Status";

const TicTacToe = () => {

  const {
    TIC,
    TAC,
    TOE,
    NO_OF_TILES_IN_THE_BOARD,
    EMPTY,
    PLAYER_X,
    PLAYER_O,
    RESET_BUTTON_TITLE
  } = Constants;

  const [tiles, setTiles] = useState(Array(NO_OF_TILES_IN_THE_BOARD).fill(EMPTY));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);

  const declareWinner = () => {
    const winningPositions = [
      ...horizontalWinningPositions,
      ...verticalWinningPositions,
      ...diagonalWinningPositions
    ]
    for(let positions of winningPositions){
      const [winningIndexOne,winningIndexTwo,winningIndexThree] = positions;
      if (
        tiles[winningIndexOne] && 
        tiles[winningIndexOne] === tiles[winningIndexTwo] && 
        tiles[winningIndexOne] === tiles[winningIndexThree]
      ) {
        return tiles[winningIndexOne];
      }
    }
    return null;
  }
  
  const winner = declareWinner();
  
  const updatingTileOnClicking = (position) => {
    const updatedTiles = [...tiles];
    if(winner || updatedTiles[position]) return;
    updatedTiles[position] = currentPlayer === PLAYER_X ? PLAYER_X : PLAYER_O;
    setTiles(updatedTiles);
    nextPlayerTurn();
  };

  const nextPlayerTurn = () => {
    setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X );
  }

  return (
  <div className="tictactoe-container" data-testid="tictactoe">
    <div className="title" data-testid="title">
      {TIC} <span className="tac-color">{TAC}</span> {TOE} 
    </div>
    <Board tiles={tiles} onClick={updatingTileOnClicking}/>
    <Status player={currentPlayer} winner={winner} tiles={tiles}/>
    <button data-testid="reset" className="reset">{RESET_BUTTON_TITLE}</button>
  </div>
  );
}

export default TicTacToe;
