import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import logo from '../../assets/logo.png';
import returnimg from '../../assets/return.png';
import styles from './title.less';

class Title extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={

    };
  }
  componentDidMount(){
  }
  render() {
    const {title,showlogo} = this.props
    return (
      <div className={styles.title}>
        <div className={styles.return}>
          <Link to="/"><img src={returnimg} alt=""/></Link>{title}
        </div>
        {showlogo?<img className={styles.logo} src={logo} alt=""/>:''}
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Title)
