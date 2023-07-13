import "../styles/Status.css";
import { Constants } from "./constants/Constants";

const Status = ({player, winner, tiles}) => {

    const {
        NEXT_PLAYER_TURN_MESSAGE,
        DECLARE_WINNER_MESSAGE,
        MATCH_DRAW_MESSAGE
    } = Constants;

    return(
        <div className="status" data-testid="status">
            {
                (() => {
                    if (winner) return `${DECLARE_WINNER_MESSAGE} ${winner}`
                    else if(tiles.every(Boolean)) return `${MATCH_DRAW_MESSAGE}`
                    else return `${NEXT_PLAYER_TURN_MESSAGE} ${player}`
                })()
            }
        </div>
    );
}

export default Status;