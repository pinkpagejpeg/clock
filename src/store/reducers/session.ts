import { ISession, SessionAction, SessionActionTypes } from "../../types/session"

const initialState: ISession = {
    session_length: 25
}

export const sessionReducer = (state = initialState, action: SessionAction) => {
    switch (action.type) {
        case SessionActionTypes.INCREMENT_SESSION:
            // return { ...state, session_length: state.session_length >= 60 ? 60 : state.session_length + 1 }
            return { ...state, session_length: state.session_length + 1 }

        case SessionActionTypes.DECREMENT_SESSION:
            // return { ...state, session_length: state.session_length <= 1 ? 1 : state.session_length - 1 }
            return { ...state, session_length: state.session_length - 1 }

        case SessionActionTypes.RESET_SESSION:
            return initialState

        default:
            return state
    }
}