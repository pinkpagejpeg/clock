import { FC } from "react"
import classes from "../../styles/main.module.scss"

const Break: FC = () => {
    return (
        <div className={classes.clock__option}>
            <h2 id="break-label" className={classes.clock__title}>Break Lenght</h2>
            <div className={classes.clock__buttons}>
                <button id="break-decrement" className={classes.clock__button}>&#129131;</button>
                <span id="break-length" className={classes.clock__option_info}>5</span>
                <button id="break-increment" className={classes.clock__button}>&#129129;</button>
            </div>
        </div>
    );
}

export default Break;