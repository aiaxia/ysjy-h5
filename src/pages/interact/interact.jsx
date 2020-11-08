import { connect } from 'dva';
import * as React from 'react';
import Title from '../../components/title/title'
import styles from './interact.less';

class Interact extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    };
  }
  componentWillUnmount=()=>{

  }

  render() {
    return (
      <div className={styles.interactBox}>
        <div className={styles.title}>
          <Title title="互动方案" />
        </div>
        互动方案
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Interact)
