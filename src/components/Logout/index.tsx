import React from 'react';
import { Button } from 'antd';

import actions from '../../actions';

const Logout = () => {
  return (
    <Button
      type="danger"
      onClick={() => actions.logout({})}
    >
      Logout
    </Button>
  )
};

export default Logout;
