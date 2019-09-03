import React from 'react';
import { notification, Icon } from 'antd';

export function errorNotify(message,description) {
    notification.open({
        message: message,
        description: description,
        icon: <Icon type="frown" style={{ color: '#f5222d' }} />,
    });
}
export function successNotify(message,description) {
    notification.open({
        message: message,
        description: description,
        icon: <Icon type="check-circle" style={{ color: '#52c41a' }} />,
    });
}
