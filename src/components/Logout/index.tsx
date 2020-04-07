import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Button, Avatar } from 'antd';

import actions from '../../actions';
import { IState } from '../../reducers';

interface ILogoutProps {
  isLoggedIn: boolean;
}

const byeLink = 'https://cdn.lowgif.com/full/fc3d7d9abd06a92e-hi-bear-gifs-get-the-best-gif-on-giphy.gif';

const Logout = (props: ILogoutProps) => {
  if (!props.isLoggedIn) {
    return <Redirect to="/login"/>
  }

  return (
    <div>
      <Avatar
        src={byeLink}
        size={256}
      />
      <br/>
      <Button
        type="danger"
        size="large"
        onClick={() => actions.logout({})}
        style={{ width: '100%' }}
      >
        Logout
      </Button>
    </div>
  )
};

const mapStateToProps = (state: IState) => {
  const { isLoggedIn } = state;
  return { isLoggedIn };
};
export default connect(mapStateToProps)(Logout);
