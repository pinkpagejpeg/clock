import { BreakAction, BreakActionTypes, IBreak } from "../../types/break"

const initialState: IBreak = {
    break_length: 5
}

export const breakReducer = (state = initialState, action: BreakAction) => {
    switch (action.type) {
        case BreakActionTypes.INCREMENT_BREAK:
            // return { ...state, break_length: state.break_length >= 60 ? 60 : state.break_length + 1 }
            return { ...state, break_length: state.break_length + 1 }

        case BreakActionTypes.DECREMENT_BREAK:
            // return { ...state, break_length: state.break_length <= 1 ? 1 : state.break_length - 1 }
            return { ...state, break_length: state.break_length - 1 }

        case BreakActionTypes.RESET_BREAK:
            return initialState

        default:
            return state
    }
}