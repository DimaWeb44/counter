import React, {useState} from 'react';
import './App.css';
import Scoreboard from "./components/scoreboard/Scoreboard";
import Button from "./components/buttons/button/button";
import SetScoreboard from "./components/scoreboard/SetScoreboard";
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "./redux/store";
import {changeMaxValueAC, changeStartValueAC, incValueAC, resetValueAC, setValueAC} from './redux/counter-reducer';


function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const dispatch = useDispatch()

    let [toggle, setToggle] = useState(true)

    const incCounter = () => {
        dispatch(incValueAC())
    }

    const resetCounter = () => {
        dispatch(resetValueAC())
    }

    const onChangeMaxValue = (newMaxValue: number) => {
        dispatch(changeMaxValueAC(newMaxValue))
    }

    const onChangeStartValue = (newStartValue: number) => {
        dispatch(changeStartValueAC(newStartValue))
    }

    const settingCounter = () => {
        setToggle(!toggle)
        dispatch(setValueAC(startValue))
    }

    return (
        <div className="App">
            <div>
                {toggle && <Scoreboard value={value}
                                       maxValue={maxValue}
                />}
                {!toggle && <SetScoreboard
                    onChangeMaxValue={onChangeMaxValue}
                    onChangeStartValue={onChangeStartValue}
                    maxValue={maxValue}
                    startValue={startValue}/>}
                <div className='buttons'>
                    {toggle && <Button onClick={incCounter}
                                       value={value}
                                       valueButton={'inc'}
                                       maxValue={maxValue}
                                       startValue={startValue}
                    />}
                    {toggle && <Button onClick={resetCounter}
                                       valueButton={'reset'}
                                       maxValue={maxValue}
                                       startValue={startValue}
                    />}
                    <Button onClick={settingCounter}
                            valueButton={'set'}
                            maxValue={maxValue}
                            startValue={startValue}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
