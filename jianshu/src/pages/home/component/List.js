import React,{PureComponent} from 'react';
import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {Link} from 'react-router-dom';

class List extends PureComponent{
  render(){
    const {list,changeListData,page} = this.props;
    return(
      <div>
        {
          list.map((item,index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}}</h3>
                  <p className='desc'>{item.get('content')}</p>
                </ListInfo>
                <img className='pic' src={item.get('imgUrl')} alt=""></img>
              </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() =>changeListData(page)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState =(state) => {
  return {
    list: state.getIn(['home','listItem']),
    page: state.getIn(['home','articlePage'])
  }
}

const mapDispatch = (dispatch) => ({
  changeListData(page){
    const action = actionCreators.changeListInfo(page);
    dispatch(action);
  }
})

export default connect(mapState,mapDispatch)(List);