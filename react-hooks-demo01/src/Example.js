import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'antd';
import { successNotify, errorNotify,normalNotify } from './utils/Notify';
import './style/antd-style.module.scss';
function Index() {
    useEffect(() => {
        successNotify('来自Index的问候', '来啦老弟');
        return () => {
            errorNotify('来自Index的挽留', '再玩会呗');
        };
    }, []);
    return <h2>Index Page</h2>
}
function List() {
    useEffect(() => {
        successNotify('来自List的问候', '来啦老弟');
        return () => {
            errorNotify('来自List的挽留', '再玩会呗');
        };
    }, []);
    return <h2>List Page</h2>
}

function Example() {
    //数组解构
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count) {
            successNotify('useEffect', `点击了${count}次`);
        }
        return () => {
            normalNotify('======');
        }
    },[count]);
    return (
        <div>
            <h2>点击了{count}次</h2>
            <Button
                type="primary"
                onClick={() => setCount(count + 1)}
            >
                点我
            </Button>
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index}></Route>
                <Route path='/list' component={List}></Route>
            </Router>
        </div>
    )
}
export default Example;