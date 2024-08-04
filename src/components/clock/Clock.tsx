import { FC } from "react"
import classes from "../../styles/main.module.scss"
import Break from "../break/Break"
import Session from "../session/Session"
import Timer from "../timer/Timer"

const Clock: FC = () => {
    return (
        <div className={classes.clock__mainbox}>
            <h1 className={classes.title}>25 + 5 Clock</h1>
            <div className={classes.clock__options}>
                <Break />
                <Session />
            </div>
            <Timer />
        </div>
    );
}

export default Clock;