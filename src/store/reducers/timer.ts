import { ITimer, TimerAction, TimerActionTypes } from "../../types/timer"

const initialState: ITimer = {
    mode: 'session',
    timeLeft: 1500,
    isRunning: false
}
export const timerReducer = (state = initialState, action: TimerAction) => {
    switch (action.type) {
        case TimerActionTypes.START_TIMER:
            return {...state, isRunning: true }

        case TimerActionTypes.STOP_TIMER:
            return {...state, isRunning: false }

        case TimerActionTypes.RESET_TIMER:
            return initialState

        case TimerActionTypes.SWITCH_MODE_TIMER:
            return {...state, mode: state.mode === 'session' ? 'break' : 'session' }

        case TimerActionTypes.COUNT_TIMER:
            return {...state, timeLeft: state.timeLeft - 1 }
        
        case TimerActionTypes.SET_TIME_LEFT_TIMER:
            return {...state, timeLeft: action.payload}

        default:
            return state
    }
}