import { connect } from 'dva';
import * as React from 'react';
import Title from '../../components/title/title'
import Mainitem from '../../components/mainitem/mainitem';
import styles from './active.less';

class Active extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={

    };
  }
  componentWillUnmount=()=>{

  }

  render() {
    const {checked} = this.state
    return (
      <div className={styles.meichenBox}>
        <div className={styles.title}>
          <Title title="活动会展" />
        </div>
        <div className={styles.main}>
          <Mainitem show={2} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Active)
