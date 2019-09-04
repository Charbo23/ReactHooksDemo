import React, { useReducer } from 'react';
import { Button } from 'antd';
import './style/antd-style.module.scss';
import { Map } from 'immutable';
function countReducer(state, action) {
    switch (action.type) {
        case 'add':
            return state.update('count', (origin) => origin + 1);
        case 'sub':
            return state.get('count') > 0 ?
                state.update('count', (origin) => origin - 1) : state.set('count', 0);
        default:
            return state
    }
}
function ReducerDemo() {
    const [state, dispatch] = useReducer(countReducer, Map({ count: 0 }));
    console.log('here');
    return (
        <div>
            <h2>现在的分数是{state.get('count')} </h2>
            <Button
                type="primary"
                onClick={() => dispatch({ type: 'add' })}
            >
                加
            </Button>
            <Button
                type="primary"
                onClick={() => dispatch({ type: 'sub' })}
            >
                减
            </Button>
        </div>
    )
}


export default ReducerDemo;