import React, { useState, Fragment, useMemo, useRef, useEffect } from 'react';
import { Button } from 'antd';
import '@/style/antd-style.module.scss';

function Example7() {
    const [xiaohong, setXiaohong] = useState('小红在等待');
    const [zhiling, setZhiling] = useState('小林在等待');
    const [text, setText] = useState('');
    const btnRef = useRef();

    useEffect(() => {
        console.log('useEffect');
        setText(btnRef.current.props.style.backgroundColor);
    }, [])
    return (
        <div>
            <Button
                type='danger'
                style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
                onClick={() => setXiaohong(new Date().getTime())}
            >
                小红
            </Button>
            <Button
                type='primary'
                style={{ backgroundColor: '#faad14', borderColor: '#faad14' }}
                onClick={() => setZhiling(new Date().getTime() + '，小林来了')}
                ref={btnRef}
            >
                {'小林'+text}
            </Button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </div>
    )
}
export default Example7;

function ChildComponent({ name, children }) {
    function changeXiaohong() {
        //点击小林按钮依然会调用，存在性能问题
        console.log('小红来了');
        return name + '，小红来了';
    }
    //用useMemo规定只有当name改变才调用changeXiaohong方法
    const actionXiaohong = useMemo(changeXiaohong, [name])
    return (
        <Fragment>
            <h2>{actionXiaohong}</h2>
            <h2>{children}</h2>
        </Fragment>
    )
}