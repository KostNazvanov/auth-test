import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { signOut } from '../../helpers/firebase';

const Logout = () => {
  return (
    <Link to="./login">
      <Button
        type="danger"
        onClick={signOut}
      >
        Logout
      </Button>
    </Link>
  )
};

export default Logout;
