import React, { useContext } from 'react';
import { Button } from 'antd';
import { ColorContext, UPDATE_COLOR } from './Color';
import '@/style/antd-style.module.scss';
function Buttons() {
    const { dispatch } = useContext(ColorContext);
    return (
        <div>
            <Button
                type='danger'
                style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
                onClick={()=>dispatch({type:UPDATE_COLOR,colorText:'红色',colorHex:'#ff4d4f'})}
            >
                红色
            </Button>
            <Button
                type='primary'
                style={{ backgroundColor: '#faad14', borderColor: '#faad14' }}
                onClick={()=>dispatch({type:UPDATE_COLOR,colorText:'黄色',colorHex:'#faad14'})}
            >
                黄色
            </Button>
        </div>
    )
}

export default Buttons;