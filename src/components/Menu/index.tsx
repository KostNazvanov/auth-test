import React from 'react';
import { Menu as AntdMenu } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import routes, { IRoute } from '../../configs/routes';
import { IState } from '../../reducers';

interface IMenuProps extends RouteComponentProps {
  isLoggedIn: boolean;
}

function Menu(props: IMenuProps) {
  return (
    <AntdMenu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      mode="inline"
      selectedKeys={[props.location.pathname]}
    >
      {routes.map((value: IRoute) => value.isLoggedIn === props.isLoggedIn && (
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

const mapStateToProps = (state: IState) => {
  const { isLoggedIn } = state;
  return { isLoggedIn };
};

export default connect(mapStateToProps)(withRouter(Menu));
