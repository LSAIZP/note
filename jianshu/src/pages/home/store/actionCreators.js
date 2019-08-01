import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  recList: result.recList,
  listItem: result.listItem,
  LoadItem: result.LoadItem,
  writerList: result.writerList
})

const changeListData = (list,nextPage) => ({
  type: constants.CHANGE_LIST_DATA,
  list: fromJS(list.listItem),
  nextPage
  
})

export const changHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    })
  }
}

export const changeListInfo = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then((res) => {
      const list = res.data.data;
      dispatch(changeListData(list,page+1));
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})