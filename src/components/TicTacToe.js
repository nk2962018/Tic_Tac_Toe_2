import { useState } from "react";
import "../styles/TicTacToe.css";
import Board from "./Board";
import { Constants } from "./constants/Constants";

const TicTacToe = () => {

  const [tiles, setTiles] = useState(Array(Constants.NO_OF_TILES_IN_THE_BOARD).fill(Constants.EMPTY));

  const updatingTileOnClicking = (position) => {
    const updatedTiles = [...tiles];
    updatedTiles[position] = Constants.PLAYER_X;
    setTiles(updatedTiles);
  };

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
