import {fromJS} from 'immutable';
import * as constants from './constants';

//immutable库
//immutable对象
const defaultState = fromJS({
  login: false
});

  

export default (state = defaultState,action) => {
  switch(action.type){
    case constants.TEST_LOGIN:
      console.log(action.login);
      return state.set('login',action.login);
    case constants.TEST_LOGINOUT:
        return state.set('login',action.login);
    default: return state;
  }
}