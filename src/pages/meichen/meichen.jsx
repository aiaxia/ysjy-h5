import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import Title from '../../components/title/title'
import Mainitem from '../../components/mainitem/mainitem';
import styles from './meichen.less';

class Index extends React.PureComponent {
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
          <Title title="美陈定制" />
        </div>
        <div className={styles.main}>
          <Mainitem show={1} />
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Index)
