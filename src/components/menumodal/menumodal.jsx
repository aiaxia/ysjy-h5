import { connect } from 'dva';
import * as React from 'react';
import { Link } from 'dva/router';
import PropTypes from 'prop-types';
import closeicon from '../../assets/close.png'
import menu from '../../assets/menu.png';
import styles from './menumodal.less';

class Menumodal extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      showModal: false,
      list: [
        {
          name: '美陈定制',
          link: 'meichen'
        },
        {
          name: '活动会展',
          link: 'active'
        },
        {
          name: '互动方案',
          link: 'interact'
        },
        {
          name: '广告设计制作',
          link: 'adv'
        },
      ]
    };
  }
  componentDidMount(){
  }
  showModal=(show)=>{
    console.log(88888)
    this.props.dispatch({
      type: 'menumodal/menushow',
      payload: show
    })
  }
  render() {
    const {list} = this.state
    const {menuHidden} = this.props.menumodal
    return (
      <div className={styles.menumodalBox}>
        {menuHidden?
          <img src={menu} onClick={e=>this.showModal(false)} alt=""/>:
          <div className={styles.menumodal}>
            <div className={styles.close}>
              <img src={closeicon} alt="" onClick={e=>this.showModal(true)}/>
              <div className={styles.menuBox}>
                <div>
                  <ul>
                    {list.map((el,i)=>{
                      return <li className={styles.menuitem} key={i}><Link to={el.link}>{el.name}</Link></li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

Menumodal.propTypes = {
	dispatch: PropTypes.func,
}

function mapStateToProps({menumodal}) {
  return {
    menumodal: menumodal
  };
}

export default connect(mapStateToProps)(Menumodal)
