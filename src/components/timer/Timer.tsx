import { FC } from "react"
import classes from "../../styles/main.module.scss"

const Timer: FC = () => {
    return ( 
        <div className={classes.clock__timer}>
            <div className={classes.clock__current}>
                <h2 id="timer-label" className={classes.clock__title}>Session</h2>
                <span id="time-left" className={classes.clock__time}>25:00</span>
            </div>
            <div className={classes.clock__buttons}>
                <button id="start_stop" className={classes.clock__timer_button}>&#9205;</button>
                {/* &#9208; */}
                <button id="reset" className={classes.clock__timer_button}>&#11138;</button>
            </div>
        </div>
     );
}
 
export default Timer;