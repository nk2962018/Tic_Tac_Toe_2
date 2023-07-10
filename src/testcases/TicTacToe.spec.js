import { render, screen } from "@testing-library/react";
import TicTacToe from "../components/TicTacToe";
import { TestConstants } from "../components/constants/TestConstants";

describe("Tictactoe works fine when", () => {

    it("renders title with proper text", () => {
        render(<TicTacToe/>);
        const title = screen.getByTestId("title");
        expect(title.textContent).toBe(`${TestConstants.TIC} ${TestConstants.TAC} ${TestConstants.TOE}`)
    });
});
