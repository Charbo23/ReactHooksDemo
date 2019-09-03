import React, { useState } from 'react';
import { Button, Input } from 'antd';
import antdStyle from './style/antd-style.module.scss';
function Example() {
    //数组解构
    const [age, setAge] = useState(18);
    const [gender, setGender] = useState('male');
    const [job, setJob] = useState('Frontend engineer');
    return (
        <div>
            <h2>
                Age: {age}
            </h2>
            <Button
                type='primary'
                onClick={() => setAge(age + 1)}
            >
                Increase
            </Button>
            <h2>
                Gender: {gender}
            </h2>
            <Button
                type='primary'
                onClick={() => setGender(gender === 'male' ? 'female' : 'male')}
            >
                Switch
            </Button>
            <h2>
                Job: {job}
            </h2>
            <Input
                value={job}
                placeholder="Type to change"
                className={antdStyle['ant-input']}
                onChange={(e) => setJob(e.target.value)}
            />
            <Button
                type='primary'
                onClick={() => setJob('Frontend engineer')}
            >
                Reset
            </Button>
        </div>
    )
}
export default Example;