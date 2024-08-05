export interface IBreak {
    break_length: number
}

export enum BreakActionTypes {
    INCREMENT_BREAK = "INCREMENT_BREAK",
    DECREMENT_BREAK = "DECREMENT_BREAK",
    RESET_BREAK = "RESET_BREAK"
}

export interface IIncrementBreakAction {
    type: BreakActionTypes.INCREMENT_BREAK
}

export interface IDecrementBreakAction {
    type: BreakActionTypes.DECREMENT_BREAK
}

export interface IResetBreakAction {
    type: BreakActionTypes.RESET_BREAK
}

export type BreakAction = IIncrementBreakAction
    | IDecrementBreakAction
    | IResetBreakAction