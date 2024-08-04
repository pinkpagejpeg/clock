import { FC } from "react"
import classes from "../../styles/main.module.scss"

const Session: FC = () => {
    return (
        <div className={classes.clock__option}>
            <h2 id="session-label" className={classes.clock__title}>Session Lenght</h2>
            <div className={classes.clock__buttons}>
                <button id="session-decrement" className={classes.clock__button}>&#129131;</button>
                <span id="session-length" className={classes.clock__option_info}>25</span>
                <button id="session-increment" className={classes.clock__button}>&#129129;</button>
            </div>
        </div>
    );
}

export default Session;