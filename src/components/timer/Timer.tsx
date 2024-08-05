import { FC, useEffect, useState } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"

const Timer: FC = () => {
    const { mode, timeLeft, isRunning } = useTypedSelector(state => state.timer)
    const { break_length } = useTypedSelector(state => state.break)
    const { session_length } = useTypedSelector(state => state.session)
    const { resetTimer, resetSession, resetBreak, startTimer, stopTimer, switchModeTimer, countTimer, setTimeLeftTimer } = useActions()
    const [time, setTime] = useState(String(timeLeft))

    const formatTime = (timeLeft: number) => {
        const seconds = timeLeft % 60
        const minutes = (timeLeft - seconds) / 60
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    useEffect(() => {
        const newTime = formatTime(timeLeft)
        setTime(newTime)
    }, [timeLeft])

    useEffect(() => {
        if (!isRunning) return

        const interval = setInterval(() => {
            if (timeLeft > 0) {
                countTimer()
            } else {
                playSound()
                setTimeLeftTimer(mode === 'break' ? 60 * session_length : 60 * break_length)
                switchModeTimer()
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [timeLeft, isRunning])

    const resetButtonHandler = () => {
        resetTimer()
        resetSession()
        resetBreak()
        stopSound()
    }

    const startStopHandler = () => {
        if (isRunning) {
            stopTimer()
        } else {
            startTimer()
        }
    }

    const playSound = () => {
        const audio = document.getElementById("beep") as HTMLAudioElement
        if (audio) {
            audio.play()
        }
    }

    const stopSound = () => {
        const audio = document.getElementById("beep") as HTMLAudioElement
        if (audio) {
            audio.pause()
            audio.currentTime = 0
        }
    }

    return (
        <div className={classes.clock__timer}>
            <div className={classes.clock__current}>
                <h2 id="timer-label" className={classes.clock__title}>{mode}</h2>
                <audio id="beep" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav" />
                <span id="time-left" className={classes.clock__time}>{time}</span>
            </div>
            <div className={classes.clock__buttons}>
                {isRunning ?
                    <button id="start_stop" className={classes.clock__timer_button} onClick={startStopHandler}>&#9208;</button> :
                    <button id="start_stop" className={classes.clock__timer_button} onClick={startStopHandler}>&#9205;</button>
                }
                <button id="reset" className={classes.clock__timer_button} onClick={resetButtonHandler}>&#11138;</button>
            </div>
        </div>
    );
}

export default Timer;