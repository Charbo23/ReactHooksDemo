import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { successNotify } from './utils/Notify';
function Example() {
    //数组解构
    const [count, setCount] = useState(0);
    useEffect(() => {
        successNotify('useEffect',`点击了${count}次`);
    });
    return (
        <div>
            <h2>点击了{count}次</h2>
            <Button
                type="primary"
                onClick={() => setCount(count + 1)}
            >
                点我
            </Button>
        </div>
    )
}
export default Example;