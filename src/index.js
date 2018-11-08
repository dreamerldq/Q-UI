import React from 'react';
import ReactDom from 'react-dom';
// import { Button, Icon } from 'antd';
import HuaComponents from './Route/HuaComponents';
// import HuaSelect from './Component/HuaSelect';
// import HuaTable from './Component/HuaTable';
// import HuaPagination from './Component/HuaPagination';
// import HuaTabs from './Component/HuaTabs';
// import HuaCollapse from './Component/HuaCollapse';
// import notification from './Component/HuaNotification';
// import HuaTimeLine from './Component/HuaTimeline';
// import HuaDrawer from './Component/HuaDrawer';
// import HuaLoading from './Component/HuaLoading';
// import HuaLayout from './Component/HuaLayout';
// import HuaMenu from './Component/HuaMenu';
// import HuaButton from './Component/HuaButton';
// import HuaInputNumber from './Component/HuaInputNumber';
// import HuaBreadCrumb from './Component/HuaBreadCrumb';
import styles from './index.scss';

const App = () => (
      <HuaComponents></HuaComponents>
);

ReactDom.render(<App/>, document.getElementById('app'));
// module.exports = {
//   HuaButton,
//   HuaBreadCrumb,
//   HuaCollapse,
//   HuaTable,
//   HuaPagination,
//   HuaTabs,
//   HuaTimeLine,
//   notification,
//   HuaDrawer,
//   HuaLoading,
//   HuaLayout,
//   HuaMenu,
//   HuaInputNumber,
// };
