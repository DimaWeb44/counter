import React, {useEffect, useState} from 'react';
import './App.css';
import Scoreboard from "./components/scoreboard/Scoreboard";
import Button from "./components/buttons/button/button";
import SetScoreboard from "./components/scoreboard/SetScoreboard";


function App() {
    let [counter, setCounter] = useState(0)
    let [toggle, setToggle] = useState(true)
    let [maxValue, setMaxValue] = useState(5)
    let [startValue, setStartValue] = useState(0)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        let statValueAsString = localStorage.getItem('startValue')
        if (statValueAsString && maxValueAsString != null &&
            +maxValueAsString && +statValueAsString >= 0 &&
            +maxValueAsString > +statValueAsString){
            setStartValue(+statValueAsString)
            setMaxValue(+maxValueAsString)
            setCounter(+statValueAsString)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    const inCounter = () => {
        setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(startValue)
    }

    const settingCounter = () => {
        setToggle(!toggle)
        setCounter(startValue)
    }

    return (
        <div className="App">
            <div>
                {toggle && <Scoreboard counter={counter}
                                       maxValue={maxValue}
                />}
                {!toggle && <SetScoreboard
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    startValue={startValue}/>}
                <div className='buttons'>
                    {toggle && <Button onClick={inCounter}
                                       counter={counter}
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
