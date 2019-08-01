import axios from 'axios';
import * as constants from './constants';

const testLogin = () => ({
  type: constants.TEST_LOGIN,
  login: true
})

// const testLoginOut = () => ({
//   type: constants.TEST_LOGINOUT,
//   login: false
// })

export const login = (account,password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data.data;
      if(account === result.account && password === result.password){
        dispatch(testLogin());
      }else{
        alert('账号或密码输入错误！')
      }
    })
  }
}

export const loginOut = () => {
  return (dispatch) => {
    const action = {
      type: constants.TEST_LOGINOUT,
      login: false
    }
    dispatch(action);
  }
}