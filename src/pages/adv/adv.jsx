import { connect } from 'dva';
import * as React from 'react';
import Title from '../../components/title/title'
import styles from './adv.less';

class Adv extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    };
  }
  componentWillUnmount=()=>{

  }

  render() {
    return (
      <div className={styles.advBox}>
        <div className={styles.title}>
          <Title title="广告设计制作" />
        </div>
        <div>
          广告设计制作
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Adv)
