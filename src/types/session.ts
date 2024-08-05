export interface ISession {
    session_length: number
}

export enum SessionActionTypes {
    INCREMENT_SESSION = "INCREMENT_SESSION",
    DECREMENT_SESSION = "DECREMENT_SESSION",
    RESET_SESSION = "RESET_SESSION"
}

export interface IIncrementSessionAction {
    type: SessionActionTypes.INCREMENT_SESSION
}

export interface IDecrementSessionAction {
    type: SessionActionTypes.DECREMENT_SESSION
}

export interface IResetSessionAction {
    type: SessionActionTypes.RESET_SESSION
}

export type SessionAction = IIncrementSessionAction
    | IDecrementSessionAction
    | IResetSessionAction