import React from 'react';
import s from './inc.module.css'

type ButtonIncPropsType = {
    counter: number
    inCounter: () => void
}

function ButtonInc(props: ButtonIncPropsType) {
    return (
        <div>
            <button disabled={props.counter === 5}
                    onClick={props.inCounter}
                    className={s.inc}>inc
            </button>
        </div>
    );
}

export default ButtonInc;
