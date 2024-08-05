import { combineReducers } from "redux"
import { timerReducer } from "./timer"
import { sessionReducer } from "./session"
import { breakReducer } from "./break"

export const rootReducer = combineReducers({
    timer: timerReducer,
    session: sessionReducer,
    break: breakReducer
})

export type RootState = ReturnType<typeof rootReducer>