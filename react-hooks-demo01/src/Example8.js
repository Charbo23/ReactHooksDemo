import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Button, Input } from 'antd';
import antdStyle from './style/antd-style.module.scss';
function Example8() {
    const [title, setTitle] = useState('Title');
    const [input, setInput] = useState('');
    const inputRef = useRef();
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
    useEffect(() => {
        inputRef.current.inputValue = input;
    },[input])//只有当input改变才调用
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
        </Fragment>
    )
}
export default Example8;