import React from 'react';
import { connect } from 'react-redux';
import { User } from 'firebase';
import { Empty, Collapse, Card } from 'antd';

import actions from '../../actions';
import { IState, IDashboard } from '../../reducers';

interface IDashboardProps {
  dashboard: IDashboard | false;
  user: User | null;
  loading: boolean;
}

export class Dashboard extends React.Component<IDashboardProps> {
  componentDidMount = () => {
    actions.getDashboard({});
  };

  get content() {
    const { dashboard } = this.props;

    return (
      <Collapse>
        {Object.values(dashboard).map((value, index) => {
          const {
            label = '',
            body,
            image = false,
          } = value;

          return (
            <Collapse.Panel
              header={label}
              key={index}
            >
              {image && <img src={image} alt=""/>}
              <br/>
              <br/>
              {body}
            </Collapse.Panel>
          );
        })}
      </Collapse>
    )
  }

  render = () => {
    const { dashboard, user } = this.props;

    return (
      <Card title={user && `Welcome, ${user.email}`}>
        {dashboard
          ? (
            this.content
          ) : (
            <Empty/>
          )}
      </Card>
    )
  }
}

const mapStateToProps = (state: IState) => {
  const { dashboard, loading, user } = state;
  return { dashboard, loading, user };
};

export default connect(mapStateToProps)(Dashboard);
