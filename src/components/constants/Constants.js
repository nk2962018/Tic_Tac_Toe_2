export const Constants = {
    TIC : "Tic",
    TAC : "Tac",
    TOE : "Toe",
    NO_OF_TILES_IN_THE_BOARD : 9,
    EMPTY : "",
    PLAYER_X : "X",
    PLAYER_O : "O",
    NEXT_PLAYER_TURN_MESSAGE : "Next Player : ",
    DECLARE_WINNER_MESSAGE : "The Winner is : ",
    FIRST_ROW_WINNING_POSITION : [0,1,2],
    SECOND_ROW_WINNING_POSITION : [3,4,5],
    THIRD_ROW_WINNING_POSITION : [6,7,8],
    FIRST_COL_WINNING_POSITION : [0,3,6],
    SECOND_COL_WINNING_POSITION: [1,4,7]

};

export const horizontalWinningPositions = [
    Constants.FIRST_ROW_WINNING_POSITION,
    Constants.SECOND_ROW_WINNING_POSITION,
    Constants.THIRD_ROW_WINNING_POSITION
];
