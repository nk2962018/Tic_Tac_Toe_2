import { useState } from "react";
import "../styles/TicTacToe.css";
import Board from "./Board";
import { Constants } from "./constants/Constants";

const TicTacToe = () => {

  const [tiles] = useState(Array(Constants.NO_OF_TILES_IN_THE_BOARD).fill(Constants.EMPTY));

  return (
  <div className="tictactoe-container" data-testid="tictactoe">
    <div className="title" data-testid="title">
      {Constants.TIC} <span className="tac-color">{Constants.TAC}</span> {Constants.TOE} 
    </div>
    <Board tiles={tiles}/>
  </div>
  );
}

export default TicTacToe;
