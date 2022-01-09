import React, {useState} from 'react';
import './App.css';
import Scoreboard from "./components/scoreboard/Scoreboard";
import ButtonInc from "./components/buttons/inc/inc";
import ButtonReset from "./components/buttons/reset/reset";


function App() {
    let [counter, setCounter] = useState(0)
    const inCounter = () => {
        setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <div className="App">
            <div>
                <Scoreboard counter={counter}/>
                <div className='buttons'>
                    <ButtonInc inCounter={inCounter} counter={counter}/>
                    <ButtonReset resetCounter={resetCounter} counter={counter}/>
                </div>
            </div>
        </div>
    );
}

export default App;
