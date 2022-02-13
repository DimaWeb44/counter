import {AppStateType} from "../redux/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        if (+state.counter.maxValue && +state.counter.startValue >= 0 &&
            +state.counter.maxValue > +state.counter.startValue) {
            localStorage.setItem('state', serializedState);
        }
    } catch {
        // ignore write errors
    }
};


