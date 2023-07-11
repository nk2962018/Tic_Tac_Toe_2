import { useState } from "react";
import "../styles/TicTacToe.css";
import Board from "./Board";
import { Constants } from "./constants/Constants";

const TicTacToe = () => {

  const [tiles, setTiles] = useState(Array(Constants.NO_OF_TILES_IN_THE_BOARD).fill(Constants.EMPTY));
  const [currentPlayer, setCurrentPlayer] = useState(Constants.PLAYER_X);

  const updatingTileOnClicking = (position) => {
    const updatedTiles = [...tiles];
    if(updatedTiles[position]) return;
    updatedTiles[position] = currentPlayer === Constants.PLAYER_X ? Constants.PLAYER_X : Constants.PLAYER_O;
    setTiles(updatedTiles);
    nextPlayerTurn();
  };

  const nextPlayerTurn = () => {
    setCurrentPlayer(currentPlayer === Constants.PLAYER_X ? Constants.PLAYER_O : Constants.PLAYER_X );
  }

  return (
  <div className="tictactoe-container" data-testid="tictactoe">
    <div className="title" data-testid="title">
      {Constants.TIC} <span className="tac-color">{Constants.TAC}</span> {Constants.TOE} 
    </div>
    <Board tiles={tiles} onClick={updatingTileOnClicking}/>
  </div>
  );
}

export default TicTacToe;
