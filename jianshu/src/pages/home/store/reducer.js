import {fromJS} from 'immutable';
import * as constants from './constants';

//immutable库
//immutable对象
const defaultState = fromJS({
  topicList: [],
  listItem:[],
  recList:[],
  LoadItem:[],
  writerList:[],
  'articlePage': 1,
  showScroll: false
});

  const changeHomeData = (state,action) => {
    return state.merge({
      topicList: fromJS(action.topicList),
      listItem: fromJS(action.listItem),
      recList: fromJS(action.recList),
      LoadItem: fromJS(action.LoadItem),
      writerList: fromJS(action.writerList)
    });
  }

export default (state = defaultState,action) => {
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state,action);
    case constants.CHANGE_LIST_DATA:
      return state.merge({
        'listItem': state.get('listItem').concat(action.list),
        'articlePage': action.nextPage
      });
      case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show);
    default: return state;
  }
}