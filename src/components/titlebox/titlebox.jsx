import { connect } from 'dva';
import * as React from 'react';
import styles from './titlebox.less';

class Titlebox extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={

    };
  }
  componentDidMount(){
  }
  render() {
    const {title} = this.props
    return (
      <div className={styles.titleBox}>
        <span className={styles.title}>{title}</span>
        <span className={styles.more}>更多案例{`>>`}</span>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Titlebox)
