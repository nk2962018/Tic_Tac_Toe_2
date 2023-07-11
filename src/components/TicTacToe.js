import "../styles/TicTacToe.css";
import Board from "./Board";
import { Constants } from "./constants/Constants";

const TicTacToe = () => {
  return (
  <div className="tictactoe-container" data-testid="tictactoe">
    <div className="title" data-testid="title">
      {Constants.TIC} <span className="tac-color">{Constants.TAC}</span> {Constants.TOE} 
    </div>
    <Board/>
  </div>
  );
}

export default TicTacToe;
