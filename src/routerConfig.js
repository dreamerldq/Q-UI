import React from 'react';
import Layout from './Route/Layout/index';
import Button from './Route/Button';
import TimeLine from './Route/TimeLine';
import Table from './Route/Table';
import Transfer from './Route/Transfer';

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
];
export default routerConfig;
