import { fireEvent, render, screen } from "@testing-library/react";
import TicTacToe from "../components/TicTacToe";
import { TestConstants } from "../components/constants/TestConstants";

describe("Tictactoe works fine when", () => {

    it("renders title with proper text", () => {
        render(<TicTacToe/>);
        const title = screen.getByTestId("title");
        expect(title.textContent).toBe(`${TestConstants.TIC} ${TestConstants.TAC} ${TestConstants.TOE}`)
    });

    it(("displays X on clicking a tile and rest tiles remain empty"), () =>{
        render(<TicTacToe/>)
        const tiles = screen.getAllByTestId("tile");
        const [firstTile, ...remainingTiles] = tiles;
        fireEvent.click(firstTile);
        expect(firstTile.textContent).toBe(TestConstants.PLAYER_X);
        remainingTiles.forEach((tile) => {
            expect(tile.textContent).toBe(TestConstants.EMPTY)
        });
    });

});




