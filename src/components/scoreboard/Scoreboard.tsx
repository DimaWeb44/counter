import React from "react";
import s from './Scoreboard.module.css'


type ScoreboardPropsType = {
    counter: number
}

const Scoreboard = (props: ScoreboardPropsType) => {
    return <div className={s.scoreboard}>
        <div>
            <h1 className={props.counter === 5 ? s.active : ''}>{props.counter}</h1>
        </div>
    </div>
}

export default Scoreboard