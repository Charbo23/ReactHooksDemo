import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Button, Input } from 'antd';
import antdStyle from './style/antd-style.module.scss';
import useWinSize from './Example9';
import { List } from 'immutable';
function Example8() {
    const [title, setTitle] = useState('Title');
    const [input, setInput] = useState('');
    const [list, setList] = useState(List([]));
    const inputRef = useRef();
    const size = useWinSize();
    const handleClick = () => {
        let inputValue = (inputRef.current.inputValue || '').trim();
        if (inputValue) {
            setTitle(inputValue);
        }
        setInput('');
    }
    const changeInput = (e) => {
        setInput(e.target.value)
    }
    const fetchList = ({ page = 1, size = 10 }) =>
        new Promise(resolve => resolve(list => list.push('1', '2')));
    //原生数组的push方法返回的是长度不是新数组！！大坑
    useEffect(() => {
        inputRef.current.inputValue = input;
        fetchList({}).then(setList);
    }, [input])//只有当input改变才调用
    return (
        <Fragment>
            <h1>{title}</h1>
            <Input
                className={antdStyle['ant-input']}
                type='text'
                placeholder="Type Something"
                allowClear
                ref={inputRef}
                value={input}
                onChange={changeInput}
            />
            <Button
                type='primary'
                onClick={handleClick}
            >
                打印
            </Button>
            <h2>{'Width:' + size.width}</h2>
            <h2>{'Height:' + size.height}</h2>
            <h2>{list.map((item, index) => {
                return index === 0 ? item : ',' + item;
            })}</h2>
        </Fragment>
    )
}
export default Example8;