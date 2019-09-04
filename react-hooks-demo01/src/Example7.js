import React, { useState, Fragment, useMemo } from 'react';
import { Button } from 'antd';
import '@/style/antd-style.module.scss';

function Example7() {
    const [xiaohong, setXiaohong] = useState('小红在等待');
    const [zhiling, setZhiling] = useState('小林在等待');
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
                onClick={() => setZhiling(new Date().getTime() + '，小林向我们走来了')}

            >
                小林
            </Button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </div>
    )
}
export default Example7;

function ChildComponent({ name, children }) {
    function changeXiaohong() {
        //点击小林按钮依然会调用，存在性能问题
        console.log('他来了他来了');
        return name + '，小红来了';
    }
    const actionXiaohong = useMemo(changeXiaohong,[name])
    return (
        <Fragment>
            <h2>{actionXiaohong}</h2>
            <h2>{children}</h2>
        </Fragment>
    )
}