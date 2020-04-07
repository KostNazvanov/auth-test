import React from 'react';
import { connect } from 'react-redux';
import { Empty, Collapse, Card } from 'antd';

import actions from '../../actions';
import { IState, IDashboard } from '../../reducers';

interface IDashboardProps {
  dashboard: IDashboard | false;
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
              {body}
            </Collapse.Panel>
          );
        })}
      </Collapse>
    )
  }

  render = () => {
    const { dashboard } = this.props;

    return (
      <Card>
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
  const { dashboard, loading } = state;
  return { dashboard, loading };
};

export default connect(mapStateToProps)(Dashboard);
