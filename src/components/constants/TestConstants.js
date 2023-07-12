export const TestConstants = {
    TIC : "Tic",
    TAC : "Tac",
    TOE : "Toe",
    NO_OF_TILES_IN_THE_BOARD : 9,
    EMPTY : "",
    PLAYER_X : "X",
    PLAYER_O : "O",
    NEXT_PLAYER_TURN_MESSAGE : "Next Player : ",
    DECLARE_WINNER_MESSAGE : "The Winner is : ",
    FIRST_ROW_WINNING_POSITION : [0,1,2]
};

export const tilePositionsToDeclareWinner = {
    
    winningPositionsFirstRow_X : {
        WINING_POSITIONS : [0,3,1,6,2],
        WINNER : TestConstants.PLAYER_X
    },

    winningPositionsFirstRow_O : {
        WINING_POSITIONS : [3,0,6,1,4,2],
        WINNER : TestConstants.PLAYER_O
    }

}