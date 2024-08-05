import * as TimerActionCreators from "./timer"
import * as SessionActionCreators from "./session"
import * as BreakActionCreators from "./break"

export default {
    ...TimerActionCreators,
    ...SessionActionCreators,
    ...BreakActionCreators
}