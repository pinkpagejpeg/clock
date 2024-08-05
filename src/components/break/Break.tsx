import { FC, useEffect, useState } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"

const Break: FC = () => {
    const { break_length } = useTypedSelector(state => state.break)
    const { incrementBreak, decrementBreak } = useActions()
    const [disabledDecrement, setDisabledDecrement] = useState(false)
    const [disabledIncrement, setDisabledIncrement] = useState(false)

    useEffect(() => {
        setDisabledDecrement(break_length <= 1)
        setDisabledIncrement(break_length >= 60)
    }, [break_length])

    return (
        <div className={classes.clock__option}>
            <h2 id="break-label" className={classes.clock__title}>Break Lenght</h2>
            <div className={classes.clock__buttons}>
                <button id="break-decrement" className={classes.clock__button} disabled={disabledDecrement} onClick={() => decrementBreak()}>&#129131;</button>
                <span id="break-length" className={classes.clock__option_info}>{break_length}</span>
                <button id="break-increment" className={classes.clock__button} disabled={disabledIncrement} onClick={() => incrementBreak()}>&#129129;</button>
            </div>
        </div>
    );
}

export default Break;