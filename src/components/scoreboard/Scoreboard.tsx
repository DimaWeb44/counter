import React from "react";
import s from './Scoreboard.module.css'


type ScoreboardPropsType = {
    value: number
    maxValue: number
}

const Scoreboard = (props: ScoreboardPropsType) => {
    return <div className={s.scoreboard}>
        <h1 className={props.value === props.maxValue ? s.active : ''}>{props.value}</h1>
    </div>
}

export default Scoreboard