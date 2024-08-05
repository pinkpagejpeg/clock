import { bindActionCreators } from "redux"
import { useAppDispatch } from "./useAppDispatch"
import actionCreators from "../store/action-creators"

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(actionCreators, dispatch)
}