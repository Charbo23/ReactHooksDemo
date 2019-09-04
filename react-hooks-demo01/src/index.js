import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Example7 from './Example7';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Example7/>, document.getElementById('root'));

//可让网站像一个应用一样离线访问，但只有在localhost或https协议下才有效
serviceWorker.register();