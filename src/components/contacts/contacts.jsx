import { connect } from 'dva';
import * as React from 'react';
import styles from './contacts.less';

class Contacts extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      list: [
        {
          name: '王旭华',
          phone: '17100000000',
          mail: 'wangxuhua.com'
        },
        {
          name: '王旭华',
          phone: '17100000000',
          mail: 'wangxuhua.com'
        },
        {
          name: '王旭华',
          phone: '17100000000',
          mail: 'wangxuhua.com'
        },
        {
          name: '王旭华',
          phone: '17100000000',
          mail: 'wangxuhua.com'
        }
      ]
    };
  }
  componentDidMount(){
  }
  render() {
    const {list} = this.state
    return (
      <div className={styles.contacts}>
        {list&&list.map((el,i)=>{
          return <div className={styles.item} key={i}>
            <div className={styles.left}>
              <p>{el.name}：{el.phone}</p>
              <p>邮箱：{el.mail}</p>
            </div>
            <div className={styles.right}>
              <div></div>
              <div></div>
            </div>
          </div>
        })}
      </div>
    )
  }
}

function mapStateToProps({}) {
  return {
  };
}

export default connect(mapStateToProps)(Contacts)
