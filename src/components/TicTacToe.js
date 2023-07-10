import "../styles/TicTacToe.css";
import { Constants } from "./constants/Constants";

const TicTacToe = () => {
  return (
  <div className="tictactoe-container" data-testid="tictactoe">
    <div className="title" data-testid="title">
      {Constants.TIC} <span className="tac-color">{Constants.TAC}</span> {Constants.TOE} 
    </div>
  </div>
  );
}

export default TicTacToe;
