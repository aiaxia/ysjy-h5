import { connect } from 'dva';
// import { Link } from 'dva/router';
import * as React from 'react';
import banner1 from '../../assets/banner1.png';
import Title from '../../components/title/title'
import styles from './knowus.less';

class Knowus extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
    };
  }
  componentWillUnmount=()=>{

  }

  render() {
    return (
      <div className={styles.knowusBox}>
        <div className={styles.topBox}>
          <div>
            <img className={styles.mainimg} src={banner1} alt=""/>
          </div>
          <Title title="北京优尚佳艺传媒广告有限公司" showlogo={true} />
        </div>
        <div className={styles.main}>
          <div>
            北京优尚佳艺传媒广告有限公司正式成立于2018年，我们专注于活动策划，展览展示，艺术装置，商场美陈定制，灯光互动定制研发，H5小程序研发，广告定制设计等服务。<br />
            公司凭借专业的技术能力，优质的服务能力，快速的执行能力在行业内获得一致好评。
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Knowus)
