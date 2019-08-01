import React,{PureComponent} from 'react';
import {LoadWrapper} from '../style';
import { connect } from 'react-redux';

class Load extends PureComponent{
  render(){
    return(
      <div>
        {
          this.props.list.map((item) => {
            return (
              <LoadWrapper key={item.get('id')}>
                <img className='img' alt='' src={item.get('imgUrl')}></img>
                <div className='info'>
                  <div className='title'>{item.get('title')}</div>
                  <div className='description'>{item.get('desc')}</div>
                </div>
              </LoadWrapper>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home','LoadItem'])
  }
}

export default connect(mapState,null)(Load);