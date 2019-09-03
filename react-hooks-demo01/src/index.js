import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './Example';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<Example/>, document.getElementById('root'));

//可让网站像一个应用一样离线访问，但只有在localhost或https协议下才有效
serviceWorker.register();