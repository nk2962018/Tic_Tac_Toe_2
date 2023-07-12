import { fireEvent, render, screen } from "@testing-library/react";
import TicTacToe from "../components/TicTacToe";
import { TestConstants, tilePositionsToDeclareWinner } from "../components/constants/TestConstants";

describe("Tictactoe works fine when", () => {

    it("renders title with proper text", () => {
        render(<TicTacToe/>);
        const title = screen.getByTestId("title");
        expect(title.textContent).toBe(`${TestConstants.TIC} ${TestConstants.TAC} ${TestConstants.TOE}`)
    });

});

describe("Tictactoe game works fine when", () => {

    let tiles;
    beforeEach(() => {
        render(<TicTacToe/>)
        tiles =screen.getAllByTestId("tile");
    });

    const checkTileSymbolOnClicking = (tile, expectedSymbol) => {
        fireEvent.click(tile);
        expect(tile.textContent).toBe(expectedSymbol);
      };
    
      const checkTileSymbol = (tiles, expectedSymbol) => {
        tiles.forEach((tile) => {
          expect(tile.textContent).toBe(expectedSymbol);
        });
      };

    it(("displays X on clicking a tile and rest tiles remain empty"), () =>{
        const [firstTile, ...remainingTiles] = tiles;
        checkTileSymbolOnClicking(firstTile,TestConstants.PLAYER_X);
        checkTileSymbol(remainingTiles,TestConstants.EMPTY);
    });

    it(("marks first tile with X second with O on clicking and rest tiles remain empty"), () =>{
        const [firstTile, secondTile, ...remainingTiles] = tiles;
        checkTileSymbolOnClicking(firstTile,TestConstants.PLAYER_X);
        checkTileSymbolOnClicking(secondTile,TestConstants.PLAYER_O);
        checkTileSymbol(remainingTiles,TestConstants.EMPTY)
    });

    it(("cannot update an already marked tile"), () =>{
        tiles.forEach((tile)=>{
            (tile.textContent != TestConstants.EMPTY) ? 
            (checkTileSymbolOnClicking(tile,TestConstants.PLAYER_X ) || checkTileSymbolOnClicking(tile,TestConstants.PLAYER_O))
            : null
        });
    });

    const declareWinnerOnMarkingDesiredPositions = ({
        WINING_POSITIONS: positions,
        WINNER: winner,
    }) => {
        const { DECLARE_WINNER_MESSAGE } = TestConstants;
        positions.forEach((position) => {
          fireEvent.click(tiles[position]);
        });
        const status = screen.getByTestId("status");
        expect(status).toHaveTextContent(`${DECLARE_WINNER_MESSAGE}${winner}`);
    };

    it(("displays winning message for X when it marks all the first row winning positions"), () => {
        declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningPositionsFirstRow_X)
    });
    
    it(("displays winning message for O when it marks all the first row winning positions"), () => {
        declareWinnerOnMarkingDesiredPositions(tilePositionsToDeclareWinner.winningPositionsFirstRow_O)
    });

});




