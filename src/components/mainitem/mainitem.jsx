import { connect } from 'dva';
import * as React from 'react';
import main1 from '../../assets/main1.png'
import main2 from '../../assets/main2.png'
import main3 from '../../assets/main3.png'
import main4 from '../../assets/main4.png'
import styles from './mainitem.less';

class Mainitem extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state={
      list1: [
        {
          img: main1,
          title: '2020年中建财富国际中心春节美陈',
          detail: '详情介绍>>'
        },
        {
          img: main2,
          title: '五粮液便携小型美陈'
        },
      ],
      list2: [
        {
          img: main3,
          title: '海677项目',
        },
        {
          img: main4,
          title: '湖南中非论坛-导电油墨墙'
        },
      ]
    };
  }
  componentDidMount(){
  }
  render() {
    const { list1, list2 } = this.state
    const { show } = this.props
    let list = []
    if(show==1) list=list1
    if(show==2) list=list2
    return (
      <div className={styles.mainitemBox}>
        {list&&list.map((el,i)=>{
          return <div className={styles.item} key={i}>
            <div className={styles.imgbox+" "+(show==2?styles.active:'')}><img src={el.img} alt=""/></div>
            <div>
              <p>{el.title}</p>
              <span>{el.detail}</span>
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

export default connect(mapStateToProps)(Mainitem)
