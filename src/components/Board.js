import "../styles/Board.css";
import { Constants } from "./constants/Constants";

const Board = () => {

    const renderTile = (position) => {
        return <button className="tile" data-testid="tile" key={position}></button>
    }

    const generateBoard = () => {
        const tiles = [];
        for(let i=0; i<Constants.NO_OF_TILES_IN_THE_BOARD; i++){
            tiles.push(renderTile(i));
        }
        return tiles;
    }

    return(
        <div className="board" data-testid="board">
            {generateBoard()}
        </div>
    );
}

export default Board;