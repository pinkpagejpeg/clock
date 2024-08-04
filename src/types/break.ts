export interface IBreak {
    break_length: number
}

export enum breakActionTypes {
    INCREMENT_BREAK = "INCREMENT_BREAK",
    DECREMENT_BREAK = "DECREMENT_BREAK",
    RESET_BREAK = "RESET_BREAK"
}

export interface IIncrementBreakAction {
    type: breakActionTypes.INCREMENT_BREAK
}

export interface IDecrementBreakAction {
    type: breakActionTypes.DECREMENT_BREAK
}

export interface IResetBreakAction {
    type: breakActionTypes.RESET_BREAK
}

export type breakAction = IIncrementBreakAction
    | IDecrementBreakAction
    | IResetBreakAction