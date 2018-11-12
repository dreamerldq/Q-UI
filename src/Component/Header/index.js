import React from 'react';
import { Link } from 'react-router-dom';
import HuaMenu from '../HuaMenu';
import menuConfig from '../../menuConfig';

const { Item } = HuaMenu;

class AppHeader extends React.Component {
  render() {
    return (
      <HuaMenu
        theme="dark"
        // selectedKeys={[this.state.current]}
        onSelect={this.choiceMenu}
        >
      {menuConfig.map(menu => (
          <Item key={menu.path}>
           <Link to={menu.path}>{menu.name}</Link>
          </Item>
      ))}
    </HuaMenu>
    );
  }
}
export default AppHeader;
