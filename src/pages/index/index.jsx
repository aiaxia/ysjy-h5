import { connect } from 'dva';
import { Link } from 'dva/router';
import * as React from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import Titlebox from '../../components/titlebox/titlebox';
import Mainitem from '../../components/mainitem/mainitem';
import Contacts from '../../components/contacts/contacts';
import Menumodal from '../../components/menumodal/menumodal';
import banner1 from '../../assets/banner1.png';
import logo from '../../assets/logo.png';
import styles from './index.less';

class Index extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      data: ['1', '2', '3'],
    };
  }
  componentDidMount(){
    new Swiper ('.swiper-container', {
        simulateTouch: true,
        allowTouchMove: true,
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,//3秒切换一次
        },
        pagination: {// 如果需要分页器
          el: '.swiper-pagination',
          clickable: false,
        }
    })
  }

  render() {
    const {checked} = this.state
    return (
      <div className={styles.homeBox}>
        <div className={styles.topbox}>
          <div className="swiper-container">
            <div className="swiper-wrapper">
            {this.state.data.map(val => (
                <img
                  className="swiper-slide"
                  key={val}
                  src={banner1}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize')); // 必须要这句，不然返回后banner高度为0
                  }}
                />
            ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className={styles.menuicon}>
            <Menumodal />
          </div>
          <div className={styles.logoBox}>
            <img src={logo} alt=""/>
          </div>
          <div className={styles.knowus}>
            <Link to='/knowus' className={styles.returnBtn}>了解我们{`>>`}</Link>
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
            <div className={styles.titleBox}><Titlebox title="美陈定制" link="meichen" /></div>
            <div className={styles.iteMain}>
              <Mainitem show={1} />
            </div>
          </div>
          <div className={styles.meichen}>
            <div className={styles.titleBox}><Titlebox title="活动会展" link="active" /></div>
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

function mapStateToProps({menumodal}) {
  return {
    menumodal: menumodal
  };
}

export default connect(mapStateToProps)(Index)
