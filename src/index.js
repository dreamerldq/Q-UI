import React from 'react';
import ReactDom from 'react-dom';
// import { Button, Icon } from 'antd';
import HuaComponents from './Route/HuaComponents';
import Router from './route.jsx';
import styles from './index.scss';

const App = () => (
    <div>
      {Router}
    </div>
);

ReactDom.render(<App/>, document.getElementById('app'));
