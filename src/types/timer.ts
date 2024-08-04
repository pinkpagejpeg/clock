export interface ITimer {
    mode: string,
    timeLeft: number,
    isRunning: boolean,
}

export enum timerActionTypes {
    START_TIMER = "START_TIMER",
    STOP_TIMER = "STOP_TIMER",
    RESET_TIMER = "RESET_TIMER",
    SWITCH_MODE_TIMER = "SWITCH_MODE_TIMER",
    COUNT_TIMER = "COUNT_TIMER"
}

export interface IStartTimerAction {
    type: timerActionTypes.START_TIMER,
}

export interface IStopTimerAction {
    type: timerActionTypes.STOP_TIMER,
}

export interface IResetTimerAction {
    type: timerActionTypes.RESET_TIMER,
}

export interface ISwitchModeTimerAction {
    type: timerActionTypes.SWITCH_MODE_TIMER,
}

export interface ICountTimerAction {
    type: timerActionTypes.COUNT_TIMER,
}

export type timerAction = IStartTimerAction
    | IStopTimerAction
    | IResetTimerAction
    | ISwitchModeTimerAction
    | ICountTimerAction


