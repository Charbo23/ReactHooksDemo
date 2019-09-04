import React, { createContext, useReducer } from 'react';
import { Map } from 'immutable';

export const ColorContext = createContext({ state: Map({ colorText: '未知', colorHex: '#aaaaaa' }) });

export const UPDATE_COLOR = "updateColor";

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return state.merge({
                colorText:action.colorText,
                colorHex:action.colorHex
            });
        default:
            return state;
    }
}

export const Color = (props) => {
    const [state, dispatch] = useReducer(reducer, Map({ colorText: '蓝色', colorHex: '#1890ff' }));
    return (
        <ColorContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    )
}