import React, {ChangeEvent} from "react";
import s from './Scoreboard.module.css'


type ScoreboardSetPropsType = {
    maxValue: number
    startValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void

}

const SetScoreboard = (props: ScoreboardSetPropsType) => {
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
    }
    return <div className={s.scoreboard_set}>
        <div>max value:
            <input type={"number"}
                   className={props.startValue < 0 || props.maxValue <= props.startValue ? s.error : s.input}
                   value={props.maxValue}
                   onChange={onChangeMaxValue}/></div>
        <div>start value:
            <input type={"number"}
                   className={props.maxValue <= props.startValue || props.startValue < 0 ? s.error : s.input}
                   value={props.startValue}
                   onChange={onChangeStartValue}/></div>
    </div>
}

export default SetScoreboard