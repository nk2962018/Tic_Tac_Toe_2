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
    MATCH_DRAW_MESSAGE : "Match Draw",
    FIRST_ROW_WINNING_POSITION : [0,1,2],
    SECOND_ROW_WINNING_POSITION : [3,4,5],
    THIRD_ROW_WINNING_POSITION : [6,7,8],
    THIRD_COL_WINNING_POSITION : [2,5,8],
    TOP_LEFT_BOTTOM_RIGHT_DIAGONAL_WINNING_POSITION : [0,4,8]

};

export const tilePositionsToDeclareWinner = {
    
    winningPositionsFirstRow_X : {
        WINING_POSITIONS : [0,3,1,6,2],
        WINNER : TestConstants.PLAYER_X
    },

    winningPositionsFirstRow_O : {
        WINING_POSITIONS : [3,0,6,1,4,2],
        WINNER : TestConstants.PLAYER_O
    },

    winningPositionsSecondRow_X : {
        WINING_POSITIONS : [3,6,4,1,5],
        WINNER : TestConstants.PLAYER_X
    },

    winningPositionsSecondRow_O : {
        WINING_POSITIONS : [1,3,6,4,2,5],
        WINNER : TestConstants.PLAYER_O
    },

    winningPositionsThirdRow_X : {
        WINING_POSITIONS : [6,1,7,2,8],
        WINNER : TestConstants.PLAYER_X
    },

    winningPositionsThirdRow_O : {
        WINING_POSITIONS : [1,6,5,7,2,8],
        WINNER : TestConstants.PLAYER_O
    },

    winningPositionsFirstCol_X : {
        WINING_POSITIONS : [0,4,3,2,6],
        WINNER : TestConstants.PLAYER_X
    },

    winningPositionsFirstCol_O : {
        WINING_POSITIONS : [1,0,5,3,7,6],
        WINNER : TestConstants.PLAYER_O
    },

    winningPositionsSecondCol_X : {
        WINING_POSITIONS : [1,3,4,2,7],
        WINNER : TestConstants.PLAYER_X
    },

    winningPositionsSecondCol_O : {
        WINING_POSITIONS : [0,1,5,4,2,7],
        WINNER : TestConstants.PLAYER_O
    },

    winningPositionsThirdCol_X : {
        WINING_POSITIONS : [2,3,5,1,8],
        WINNER : TestConstants.PLAYER_X
    },

    winningPositionsThirdCol_O : {
        WINING_POSITIONS : [0,2,3,5,1,8],
        WINNER : TestConstants.PLAYER_O
    },

    winningPositionsTopLeftBottomRightDiagonal_X : {
        WINING_POSITIONS : [0,3,4,1,8],
        WINNER : TestConstants.PLAYER_X
    },

    winningPositionsTopLeftBottomRightDiagonal_O : {
        WINING_POSITIONS : [2,0,3,4,1,8],
        WINNER : TestConstants.PLAYER_O
    },

    winningPositionsTopRightBottomLeftDiagonal_X : {
        WINING_POSITIONS : [2,3,4,1,6],
        WINNER : TestConstants.PLAYER_X
    },

    winningPositionsTopRightBottomLeftDiagonal_O : {
        WINING_POSITIONS : [5,2,3,4,1,6],
        WINNER : TestConstants.PLAYER_O
    }

}

export const tilePositionsForMatchDraw = {
    matchDrawPositions : {
        DRAW_POSITIONS : [0,1,2,3,6,4,5,8,7]
    }
}