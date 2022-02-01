import React from "react";
import s from './Scoreboard.module.css'


type ScoreboardPropsType = {
    counter: number
    maxValue: number
}

const Scoreboard = (props: ScoreboardPropsType) => {
    return <div className={s.scoreboard}>
        <h1 className={props.counter === props.maxValue  ? s.active : ''}>{props.counter}</h1>
    </div>
}

export default Scoreboard