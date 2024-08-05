import { ITimer, TimerAction, TimerActionTypes } from "../../types/timer"

const initialState: ITimer = {
    mode: 'session',
    timeLeft: 1500,
    isRunning: false
}
export const timerReducer = (state = initialState, action: TimerAction) => {
    switch (action.type) {
        case TimerActionTypes.START_TIMER:
            return {...state }

        case TimerActionTypes.STOP_TIMER:
            return {...state }

        case TimerActionTypes.RESET_TIMER:
            return initialState

        case TimerActionTypes.SWITCH_MODE_TIMER:
            return {...state }

        case TimerActionTypes.COUNT_TIMER:
            return {...state }

        default:
            return state
    }
}