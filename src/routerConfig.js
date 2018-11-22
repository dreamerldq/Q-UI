import React from 'react';
import Layout from './Route/Layout/index';
import Button from './Route/Button';
import TimeLine from './Route/TimeLine';
import Table from './Route/Table';
import Transfer from './Route/Transfer';
import Progress from './Route/Progress';
import Notification from './Route/Notification';
import Carouseal from './Route/Carouseal'
import CustomLayout from './Route/CustomLayout';
import DatePicker from './Route/DatePicker'
import Tabs from './Route/Tabs';

const routerConfig = [
  {
    path: '/button',
    component: Button,
    layout: Layout,
  },
  {
    path: '/timeline',
    component: TimeLine,
    layout: Layout,
  },
  {
    path: '/table',
    component: Table,
    layout: Layout,
  },
  {
    path: '/transfer',
    component: Transfer,
    layout: Layout,
  },
  {
    path: '/notice',
    component: Notification,
    layout: Layout,
  },
  {
    path: '/tabs',
    component: Tabs,
    layout: Layout,
  },
  {
    path: '/progress',
    component: Progress,
    layout: Layout,
  },
  {
    path: '/layout',
    component: CustomLayout,
  },
  {
    path: '/lunbo',
    component: Carouseal
  },
  {
    path: '/datepicker',
    component: DatePicker,
    layout: Layout
  }
];
export default routerConfig;
