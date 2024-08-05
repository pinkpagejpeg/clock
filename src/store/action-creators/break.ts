import { Dispatch } from "redux"
import { BreakAction, BreakActionTypes } from "../../types/break"

export const incrementBreak = () => {
    return (dispatch: Dispatch<BreakAction>) => {
        dispatch({
            type: BreakActionTypes.INCREMENT_BREAK
        })
    }
}

export const decrementBreak = () => {
    return (dispatch: Dispatch<BreakAction>) => {
        dispatch({
            type: BreakActionTypes.DECREMENT_BREAK
        })
    }
}

export const resetBreak = () => {
    return (dispatch: Dispatch<BreakAction>) => {
        dispatch ({
            type: BreakActionTypes.RESET_BREAK
        })
    }
}