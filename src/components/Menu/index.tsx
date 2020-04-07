import React from 'react';
import { Menu as AntdMenu } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import routes, { IRoute } from '../../configs/routes';
import { signOut } from '../../helpers/firebase';

interface IMenuProps extends RouteComponentProps {}

function Menu(props: IMenuProps) {
  return (
    <AntdMenu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      mode="inline"
      selectedKeys={[props.location.pathname]}
    >
      {routes.map((value: IRoute) => (
        <AntdMenu.Item
          key={value.path}
          disabled={value.path === props.location.pathname}
        >
          <Link to={value.path}>
            {value.label}
          </Link>
        </AntdMenu.Item>
      ))}
    </AntdMenu>
  );
}

export default withRouter(Menu);
