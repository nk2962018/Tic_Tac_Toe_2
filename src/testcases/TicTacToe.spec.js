import { fireEvent, render, screen } from "@testing-library/react";
import TicTacToe from "../components/TicTacToe";
import { TestConstants } from "../components/constants/TestConstants";

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
});




