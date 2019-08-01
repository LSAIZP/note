import {takeEvery, put} from 'redux-saga/effects';
import { actionArr } from './actionTypes';
import { initListAction } from './actionCreator';
import axios from 'axios';

function* getInitList(){
  try {
    const res = yield axios.get('/list.json');
    const action = initListAction(res.data);
    console.log(action);
    yield put(action);
  } catch (error) {
    alert(404);
  }
 
}

// generator函数
function* mySaga() {
  yield takeEvery(actionArr[4],getInitList);
}

export default mySaga;