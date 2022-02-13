import React from 'react';
import s from './button.module.css'

type ButtonPropsType = {
    value?: number
    onClick: () => void
    valueButton: string
    maxValue: number
    startValue: number
}

function Button(props: ButtonPropsType) {
    return (
        <div>
            <button
                disabled={props.value === props.maxValue
                || props.maxValue === props.startValue
                || props.maxValue < props.startValue
                || props.maxValue <= 0
                || props.startValue < 0}
                onClick={props.onClick}
                className={s.button}>
                {props.valueButton}
            </button>
        </div>
    );
}

export default Button;
