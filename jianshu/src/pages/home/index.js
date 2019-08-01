import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import './carousel.css';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Load from './component/Load';
import Writer from './component/Writer';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {BackTop} from './style';

class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      imgs: [
        './images/1.png',
        './images/2.jpg'
      ],   // 图片数组
      showIndex: 0, //显示第几个图片
      timer: null,  // 定时器
      show: false   // 前后按钮显示
    }
  }

  handleScrollTop(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <div className="ReactCarousel">
            <div className="contain"
              onMouseEnter={() => { this.stop() }} //鼠标进入停止自动播放
              onMouseLeave={() => { this.start() }}  //鼠标退出自动播放
            >
              <ul className="ul">
                {
                  this.state.imgs.map((value, index) => {
                    return (
                      <li className={index === this.state.showIndex ? 'show' : ''}
                        key={index}
                      >
                        <img src={require(value + '')} alt="轮播图" />
                      </li>
                    )
                  })
                }
              </ul>
              <ul className="dots" style={{ width: this.state.imgs.length * 20 + 'px' }}>
                {
                  this.state.imgs.map((value, index) => {
                    return (
                      <li key={index}
                        className={index === this.state.showIndex ? 'active' : ''}
                        onClick={() => { this.change(index) }}>
                      </li>)
                  })
                }

              </ul>
              <div className="control">
                <span className="left" onClick={(e) => { this.previous(e) }}>{'<'}</span>
                <span className="right" onClick={(e) => { this.next(e) }}>{'>'}</span>
              </div>
            </div>
          </div>
            <Topic></Topic>
            <List></List>    
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Load></Load>
          <Writer></Writer>
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() { //一开始自动播放
    this.start();
    this.props.changeHomeData();
    this.bindEvents();
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow);
  }

  componentWillUnmount() { //销毁前清除定时器
    this.stop();
    window.removeEventListener('scroll',this.props.changeScrollTopShow);
  }
  stop = () => { //暂停
    let { timer } = this.state;
    clearInterval(timer);
  }
  start = () => { //开始
    let { timer } = this.state;
    timer = setInterval(() => {
      this.next();
    }, 2000);
    this.setState({
      timer
    })
  }
  change = (index) => { //点击下面的按钮切换当前显示的图片
    let { showIndex } = this.state;
    showIndex = index;
    this.setState({
      showIndex
    })
  }
  previous = () => { //上一张
    let { showIndex, imgs } = this.state;
    if (showIndex <= 0) {
      showIndex = imgs.length - 1;
    } else {
      showIndex--;
    }
    this.setState({
      showIndex
    })
  }
  next = () => { //下一张
    let { showIndex, imgs } = this.state;
    if (showIndex >= imgs.length - 1) {
      showIndex = 0;
    } else {
      showIndex++;
    }
    this.setState({
      showIndex
    })
  }
}

const mapState = (state) => {
  return {
    showScroll: state.getIn(['home','showScroll'])
  }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(){
      dispatch(actionCreators.changHomeInfo());
    },
    changeScrollTopShow() {
      if(document.documentElement.scrollTop > 550){
        dispatch(actionCreators.toggleTopShow(true));
      }else{
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
})

export default connect(mapState,mapDispatch)(Home);