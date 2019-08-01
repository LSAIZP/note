import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {RecWrapper} from '../style';

class Recommend extends PureComponent{
  render(){
    return(
      <RecWrapper>
        {
          this.props.list.map((item) => {
            return (
                <img className='img' alt='' src={item.get('imgUrl')} key={item.get('id')}></img>
            )
          })
        }
      </RecWrapper>
    )
  }
}

const mapState = (state) =>{
  return {
    list: state.getIn(['home','recList'])
  }
}

export default connect(mapState,null)(Recommend);