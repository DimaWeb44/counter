import {AppStateType} from "./store";


let initialState = {
    value: 0,
    maxValue: 5,
    startValue: 0,
}
export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case INC_VALUE: {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case RESET_VALUE: {
            return {
                ...state,
                value: state.startValue
            }
        }
        case CHANGE_MAX_VALUE: {
            return {
                ...state,
                maxValue: action.maxValue
            }
        }
        case CHANGE_START_VALUE: {
            return {
                ...state,
                startValue: action.startValue
            }
        }
        case SET_VALUE: {
            return {
                ...state,
                value: action.startValue,
            }
        }
        default:
            return state
    }

}

type ActionType =
    IncValueActionType
    | ResetValueActionType
    | SetValueActionType
    | ChangeMaxValueActionType
    | ChangeStartValueActionType

const INC_VALUE = 'INC-VALUE'
export const incValueAC = () => ({type: INC_VALUE} as const)
export  type  IncValueActionType = ReturnType<typeof incValueAC>

const RESET_VALUE = 'RESET-VALUE'
export const resetValueAC = () => ({type: RESET_VALUE} as const)
export  type  ResetValueActionType = ReturnType<typeof resetValueAC>

const CHANGE_MAX_VALUE = 'CHANGE-MAX-VALUE'
export const changeMaxValueAC = (maxValue: number) => ({type: CHANGE_MAX_VALUE, maxValue} as const)
export  type  ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>

const CHANGE_START_VALUE = 'CHANGE-START-VALUE'
export const changeStartValueAC = (startValue: number) => ({type: CHANGE_START_VALUE, startValue} as const)
export  type  ChangeStartValueActionType = ReturnType<typeof changeStartValueAC>

const SET_VALUE = 'SET-VALUE'
export const setValueAC = (startValue: number) => ({type: SET_VALUE, startValue} as const)
export  type  SetValueActionType = ReturnType<typeof setValueAC>
