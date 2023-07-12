import "../styles/Status.css";
import { Constants } from "./constants/Constants";

const Status = ({player, winner}) => {

    const {
        NEXT_PLAYER_TURN_MESSAGE,
        DECLARE_WINNER_MESSAGE
    } = Constants;

    return(
        <div className="status" data-testid="status">
            {
                (() => {
                    if (winner) return `${DECLARE_WINNER_MESSAGE} ${winner}`
                    else return `${NEXT_PLAYER_TURN_MESSAGE} ${player}`
                })()
            }
        </div>
    );
}

export default Status;