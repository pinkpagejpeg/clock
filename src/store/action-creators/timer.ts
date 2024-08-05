import { Dispatch } from "redux"
import { TimerAction, TimerActionTypes } from "../../types/timer"

export const startTimer = () => {
    return (dispatch: Dispatch<TimerAction> ) => {
        dispatch ({
            type: TimerActionTypes.START_TIMER
        })
    }
}

export const stopTimer = () => {
    return (dispatch: Dispatch<TimerAction>) => {
        dispatch({
            type: TimerActionTypes.STOP_TIMER
        })
    }
}

export const resetTimer = () => {
    return (dispatch: Dispatch<TimerAction>) => {
        dispatch({
            type: TimerActionTypes.RESET_TIMER
        })
    }
}

export const switchModeTimer = () => {
    return (dispatch: Dispatch<TimerAction>) => {
        dispatch({
            type: TimerActionTypes.SWITCH_MODE_TIMER
        })
    }
}

export const countTimer = () => {
    return (dispatch: Dispatch<TimerAction>) => {
        dispatch({
            type: TimerActionTypes.COUNT_TIMER
        })
    }
}