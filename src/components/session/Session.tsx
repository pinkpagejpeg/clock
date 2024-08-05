import { FC, useEffect, useState } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"

const Session: FC = () => {
    const { session_length } = useTypedSelector(state => state.session)
    const { incrementSession, decrementSession, setTimeLeftTimer } = useActions()
    const [disabledDecrement, setDisabledDecrement] = useState(false)
    const [disabledIncrement, setDisabledIncrement] = useState(false)

    useEffect(() => {
        setDisabledDecrement(session_length <= 1)
        setDisabledIncrement(session_length >= 60)
        setTimeLeftTimer(60 * session_length)
    }, [session_length])

    return (
        <div className={classes.clock__option}>
            <h2 id="session-label" className={classes.clock__title}>Session Lenght</h2>
            <div className={classes.clock__buttons}>
                <button id="session-decrement" className={classes.clock__button} disabled={disabledDecrement} onClick={()=> decrementSession()}>&#129131;</button>
                <span id="session-length" className={classes.clock__option_info}>{session_length}</span>
                <button id="session-increment" className={classes.clock__button} disabled={disabledIncrement} onClick={() => incrementSession()}>&#129129;</button>
            </div>
        </div>
    );
}

export default Session;