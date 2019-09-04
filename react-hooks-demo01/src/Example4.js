import React, { useState,createContext,useContext } from 'react';
import { Button } from 'antd';
import './style/antd-style.module.scss';
const countContext = createContext();
function Counter(){
    let count = useContext(countContext);
    return(
        <h2>子组件中的count：{count}</h2>
    )
}
function Example4() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>点击了{count}次</h2>
            <Button
                type="primary"
                onClick={() => setCount(count + 1)}
            >
                点我
            </Button>
            <countContext.Provider value={count}>
                <Counter/>
            </countContext.Provider>
        </div>
    )
}
export default Example4;