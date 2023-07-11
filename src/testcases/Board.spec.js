import { render, screen } from "@testing-library/react";
import Board from "../components/Board";
import { TestConstants } from "../components/constants/TestConstants";

describe(("Board works fine when"), () => {
    
    let tiles;
    beforeEach(() => {    
        render(<Board tiles={Array(TestConstants.NO_OF_TILES_IN_THE_BOARD).fill(TestConstants.EMPTY)}/>)
        tiles = screen.getAllByTestId("tile");
    });

    it(("render 3X3 tiles"), () => {
        expect(tiles).toHaveLength(TestConstants.NO_OF_TILES_IN_THE_BOARD);
    });

    it(("renders 3X3 board with no initial values"), () =>{
        tiles.forEach((tile) => {
            expect(tile.textContent).toBe(TestConstants.EMPTY);
        });
    });
    
});