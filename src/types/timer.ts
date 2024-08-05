export interface ITimer {
    mode: string,
    timeLeft: number,
    isRunning: boolean,
}

export enum TimerActionTypes {
    START_TIMER = "START_TIMER",
    STOP_TIMER = "STOP_TIMER",
    RESET_TIMER = "RESET_TIMER",
    SWITCH_MODE_TIMER = "SWITCH_MODE_TIMER",
    COUNT_TIMER = "COUNT_TIMER",
    SET_TIME_LEFT_TIMER = "SET_TIME_LEFT_TIMER"
}

export interface IStartTimerAction {
    type: TimerActionTypes.START_TIMER,
}

export interface IStopTimerAction {
    type: TimerActionTypes.STOP_TIMER,
}

export interface IResetTimerAction {
    type: TimerActionTypes.RESET_TIMER,
}

export interface ISwitchModeTimerAction {
    type: TimerActionTypes.SWITCH_MODE_TIMER,
}

export interface ICountTimerAction {
    type: TimerActionTypes.COUNT_TIMER,
}

export interface ISetTimeLeftTimer {
    type: TimerActionTypes.SET_TIME_LEFT_TIMER,
    payload: number
}

export type TimerAction = IStartTimerAction
    | IStopTimerAction
    | IResetTimerAction
    | ISwitchModeTimerAction
    | ICountTimerAction
    | ISetTimeLeftTimer


