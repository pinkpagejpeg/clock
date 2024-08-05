import { FC, useEffect } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"

const Timer: FC = () => {
    const { mode, timeLeft, isRunning } = useTypedSelector(state => state.timer)
    const {resetTimer, resetSession, resetBreak } = useActions()

    const formatTime = (timeLeft: number) => {
        const seconds = timeLeft % 60
        const minutes = (timeLeft - seconds) / 60
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    // useEffect(()=> {
    //     formatTime(timeLeft)
    // }, [timeLeft])

    const resetButtonHandler = () => {
        resetTimer()
        resetSession()
        resetBreak()
    }

    return (
        <div className={classes.clock__timer}>
            <div className={classes.clock__current}>
                <h2 id="timer-label" className={classes.clock__title}>{mode}</h2>
                <span id="time-left" className={classes.clock__time}>{formatTime(timeLeft)}</span>
            </div>
            <div className={classes.clock__buttons}>
                {isRunning ?
                    <button id="start_stop" className={classes.clock__timer_button}>&#9208;</button> :
                    <button id="start_stop" className={classes.clock__timer_button}>&#9205;</button>
                }
                <button id="reset" className={classes.clock__timer_button} onClick={resetButtonHandler}>&#11138;</button>
            </div>
        </div>
    );
}

export default Timer;