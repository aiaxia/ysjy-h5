import { connect } from 'dva';
import * as React from 'react';
import { Link } from 'dva/router';
import closeicon from '../../assets/close.png'
import styles from './menumodal.less';

class Titlebox extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
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
          link: ''
        },
        {
          name: '广告设计制作',
          link: ''
        },
      ]
    };
  }
  componentDidMount(){
  }
  render() {
    const {list} = this.state
    return (
      <div className={styles.menumodal}>
        <div className={styles.close}>
          <img src={closeicon} alt="" onClick={e=>this.closeModal(false)}/>
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
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Titlebox)
