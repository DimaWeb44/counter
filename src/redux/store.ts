import {combineReducers, createStore} from "redux";
import {loadState, saveState} from "../utils/locolstorage-util";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
type  AppStoreType = typeof store