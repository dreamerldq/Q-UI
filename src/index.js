import React from 'react';
import ReactDom from 'react-dom';
import HuaComponents from './Route/HuaComponents';
import styles from './index.scss';

const App = () => (
      <HuaComponents></HuaComponents>
);
ReactDom.render(<App/>, document.getElementById('app'));
