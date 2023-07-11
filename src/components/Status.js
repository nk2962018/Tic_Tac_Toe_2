import "../styles/Status.css";
import { Constants } from "./constants/Constants";

const Status = ({player}) => {

    const {
        NEXT_PLAYER_TURN_MESSAGE
    } = Constants;

    return(
        <div className="status" data-testid="status">
            {
                (() => {
                        return `${NEXT_PLAYER_TURN_MESSAGE} ${player}`;
                })()
            }
        </div>
    );
}

export default Status;