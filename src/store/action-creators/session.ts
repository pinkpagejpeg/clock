import { Dispatch } from "redux"
import { SessionAction, SessionActionTypes } from "../../types/session"

export const incrementSession = () => {
    return (dispatch: Dispatch<SessionAction>) => {
        dispatch({
            type: SessionActionTypes.INCREMENT_SESSION
        })
    }
}

export const decrementSession = () => {
    return (dispatch: Dispatch<SessionAction>) => {
        dispatch({
            type: SessionActionTypes.DECREMENT_SESSION
        })
    }
}

export const resetSession = () => {
    return (dispatch: Dispatch<SessionAction>) => {
        dispatch({
            type: SessionActionTypes.RESET_SESSION
        })
    }
}