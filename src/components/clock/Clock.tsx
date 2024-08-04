import Break from "../break/Break"
import Session from "../session/Session"
import classes from "../../styles/main.module.scss"

const Clock = () => {
    return (
        <div>
            <h1 className={classes.title}>25 + 5 Clock</h1>
            <div>
                <Break />
                <Session />
            </div>
            <div>
                <h2 id="timer-label">Session</h2>
                <span id="time-left">25:00</span>
            </div>
            <div>
                <button id="start_stop"></button>
                <button id="reset"></button>
            </div>
        </div>
    );
}

export default Clock;