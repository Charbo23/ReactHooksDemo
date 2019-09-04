import React from 'react';
import { notification, Icon } from 'antd';

export function errorNotify(message,description,duration=4.5) {
    notification.open({
        message: message,
        description: description,
        icon: <Icon type="frown" style={{ color: '#f5222d' }} />,
        duration:duration
    });
}
export function successNotify(message,description,duration=3) {
    notification.open({
        message: message,
        description: description,
        icon: <Icon type="smile" style={{ color: '#52c41a' }} />,
        duration:duration
    });
}

export function normalNotify(message,description,duration=3) {
    notification.open({
        message: message,
        description: description,
        duration:duration
    });
}
