import { useState } from "react";
import "../styles/TicTacToe.css";
import Board from "./Board";
import { Constants } from "./constants/Constants";
import Status from "./Status";

const TicTacToe = () => {

  const {
    TIC,
    TAC,
    TOE,
    NO_OF_TILES_IN_THE_BOARD,
    EMPTY,
    PLAYER_X,
    PLAYER_O
  } = Constants;

  const [tiles, setTiles] = useState(Array(NO_OF_TILES_IN_THE_BOARD).fill(EMPTY));
  const [currentPlayer, setCurrentPlayer] = useState(Constants.PLAYER_X);

  const updatingTileOnClicking = (position) => {
    const updatedTiles = [...tiles];
    if(updatedTiles[position]) return;
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
    <Status player={currentPlayer}/>
  </div>
  );
}

export default TicTacToe;
