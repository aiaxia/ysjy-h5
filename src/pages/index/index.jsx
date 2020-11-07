import { connect } from 'dva';
// import { Link } from 'dva/router';
import * as React from 'react';
import { Carousel } from 'antd-mobile';
import Titlebox from '../../components/titlebox/titlebox';
import Mainitem from '../../components/mainitem/mainitem';
import Contacts from '../../components/contacts/contacts';
import banner1 from '../../assets/banner1.png';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import styles from './index.less';

class Index extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      data: ['1', '2', '3'],
    };
  }
  componentWillUnmount=()=>{

  }

  render() {
    const {checked} = this.state
    return (
      <div className={styles.homeBox}>
        <div className={styles.topbox}>
          <Carousel
            autoplay={false}
            infinite
          >
            {this.state.data.map(val => (
                <img
                  key={val}
                  src={banner1}
                  style={{ width: '100%', verticalAlign: 'top' }}
                />
            ))}
          </Carousel>
          <div className={styles.menuicon}>
            <img src={menu} alt=""/>
          </div>
          <div className={styles.logoBox}>
            <img src={logo} alt=""/>
          </div>
          <div className={styles.knowus}>
            了解我们{`>>`}
          </div>
        </div>
        <div className={styles.mainBox}>
          <div className={styles.mainText}>
            <div>
              <p>北京优尚佳艺传媒广告有限公司</p>
              <div>
                北京优尚佳艺传媒广告有限公司正式成立于2018年，我们专注于活动策划，展览展示，艺术装置，商场美陈定制，灯光互动定制研发，H5小程序研发，广告定制设计等服务。<br />
                公司凭借专业的技术能力，优质的服务能力，快速的执行能力在行业内获得一致好评。
              </div>
            </div>
          </div>
          <div className={styles.meichen}>
            <div className={styles.titleBox}><Titlebox title="美陈定制" /></div>
            <div className={styles.iteMain}>
              <Mainitem show={1} />
            </div>
          </div>
          <div className={styles.meichen}>
            <div className={styles.titleBox}><Titlebox title="活动会展" /></div>
            <div className={styles.iteMain}>
              <Mainitem show={2} />
            </div>
          </div>
          <div className={styles.connect}>
            <p className={styles.title}>联系我们</p>
            <div className={styles.main}>
              <Contacts />
            </div>
          </div>
          <div className={styles.blankBox}>
            <div></div>
            <div></div>
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

export default connect(mapStateToProps)(Index)
