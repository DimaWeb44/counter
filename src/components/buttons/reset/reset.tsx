import React from 'react';
import s from './reset.module.css'

type ButtonResetPropsType = {
    counter: number
    resetCounter: () => void
}

function ButtonReset(props: ButtonResetPropsType) {
    return (
        <div>
            <button disabled={props.counter === 0}
                    onClick={props.resetCounter}
                    className={s.reset}>reset
            </button>
        </div>
    );
}

export default ButtonReset;
