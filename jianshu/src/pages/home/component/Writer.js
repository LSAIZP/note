import React,{PureComponent} from 'react';
import {WriterWrapper,A} from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent{
  render(){
    return(
      <WriterWrapper>
        <div className='info'>
          <span className='pic'>推荐作者</span>
        </div>
        {
          this.props.list.map((item) =>{
            return (
              <div className='li' key={item.get('id')}>
                <img className='img' alt='' src={item.get('imgUrl')}></img>
                <div className='desc'>
                  <p className='name'>{item.get('name')}</p>
                  <p className='title'>{item.get('title')}</p>
                </div>
                <A>+关注</A>
              </div>
            )
          })
        }
        <div className='find'>查看全部 ></div>
      </WriterWrapper>
    )
  }
}

const mapState =(state) => {
  return {
    list: state.getIn(['home','writerList'])
  }
}

export default connect(mapState,null)(Writer);