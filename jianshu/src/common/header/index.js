import React, { PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavImg,
  NavSearch,
  SearchWrapper,
  SeachInfo,
  SeachInfoTitle,
  SeachInfoSwitch,
  SeachInfoList,
  SeachInfoItem,
  Adition,
  Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import {actionCreators as loginActionCreator} from '../../pages/login/store';

class Header extends PureComponent {
  getListArea(){
    const {focused,list,mouseIn,page,totalPage,handlemouseEnter,handlemouseLeave,handlechangePage} = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (focused || mouseIn) {
      if(newList.length){
        for (let i= (page-1)*10; i < page*10; i++) {
          pageList.push(<SeachInfoItem key={newList[i]}>{newList[i]}</SeachInfoItem>)
        }
      }
      return (
        <SeachInfo 
          onMouseEnter={handlemouseEnter}
          onMouseLeave={handlemouseLeave}
        >
          <SeachInfoTitle>
            热门搜索
            <SeachInfoSwitch onClick={() => handlechangePage(page,totalPage,this.spinIcon)}>
            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'> &#xe851;</i>
              换一批
            </SeachInfoSwitch>
          </SeachInfoTitle>
          <SeachInfoList>
            {pageList}
          </SeachInfoList>
        </SeachInfo>
      )
    } else {
      return null;
    }
  }

  render(){
    const {focused, handleInputFocus, handleInputBlur,list,login,loginOut} = this.props;
    return (
    <HeaderWrapper >
      <Link to="/">
        <Logo/>
      </Link>
      <Nav>
        <NavItem className='left active'> 首页 </NavItem>
        <NavItem className='left'> 下载App </NavItem>
        {
          login ?  <NavItem className='right login' onClick={loginOut}> 退出 </NavItem> :  
          <Link to='/login'><NavItem className='right login'> 登录 </NavItem></Link>
        }
        <NavImg className='right'> </NavImg>
        <NavItem className='right' >
          <i className='iconfont'>&#xe636;</i>
        </NavItem >
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={300}
            classNames="slide"
          >
            <NavSearch className={focused ? 'focused' : ''}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur} >
            </NavSearch>
          </CSSTransition >
          <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} >&#xe62d;</i>
          {this.getListArea()}
        </SearchWrapper > </Nav>
      <Adition >
        <Link to='/write'>
          <Button className='writting'>
            <i className='iconfont'> &#xe6a4;</i>写文章 
          </Button>
        </Link>
        <Button className='reg'> 注册 </Button>
      </Adition >
    </HeaderWrapper>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    mouseIn:state.getIn(['header','mouseIn']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    login: state.getIn(['login','login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreator.getList());
      dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    },
    handlemouseEnter(){
      dispatch(actionCreator.mouseEnter());
    },
    handlemouseLeave(){
      dispatch(actionCreator.mouseLeave());
    },
    handlechangePage(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,"");
      if(originAngle){
        originAngle = parseInt(originAngle,10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
      if(page < totalPage){
        dispatch(actionCreator.changePage(page+1));
      }else{
        dispatch(actionCreator.changePage(1));
      }
    },
    loginOut(){
      dispatch(loginActionCreator.loginOut());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);