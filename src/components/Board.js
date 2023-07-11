import "../styles/Board.css";

const Board = ({tiles, onClick}) => {

    const renderTile = (value, position) => {
        return <button className="tile" data-testid="tile" key={position} onClick={() => onClick(position)}>{value}</button>
    }

    const generateBoard = () => {
        return tiles.map((value,position) => {
            return renderTile(value,position)
            });
        }

    return(
        <div className="board" data-testid="board">
            {generateBoard()}
        </div>
    );
}

export default Board;