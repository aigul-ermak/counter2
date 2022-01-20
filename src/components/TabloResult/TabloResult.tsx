import React from 'react';
import {Button} from '../Button/Button';

import './TabloResult.css'

type PropsType = {

}

export const TabloResult = (props: PropsType) => {
    return (
        <div className="containerRes">
            <div className="resBlock">
                <h3>Result</h3>
            </div>

            <div className="btnRes">
                <Button/>
                <Button/>
            </div>

        </div>
    )
}
