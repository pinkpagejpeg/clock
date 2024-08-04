export interface ISession {
    session_length: number
}

export enum sessionActionTypes {
    INCREMENT_SESSION = "INCREMENT_SESSION",
    DECREMENT_SESSION = "DECREMENT_SESSION",
    RESET_SESSION = "RESET_SESSION"
}

export interface IIncrementSessionAction {
    type: sessionActionTypes.INCREMENT_SESSION
}

export interface IDecrementSessionAction {
    type: sessionActionTypes.DECREMENT_SESSION
}

export interface IResetSessionAction {
    type: sessionActionTypes.RESET_SESSION
}

export type sessionAction = IIncrementSessionAction
    | IDecrementSessionAction
    | IResetSessionAction