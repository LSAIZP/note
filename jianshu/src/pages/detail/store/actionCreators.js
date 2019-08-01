import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const getDetailData = (result) => ({
  type: constants.GETDETAILDATA,
  title: fromJS(result.title),
  content: fromJS(result.content)
})

export const getDetailInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
      dispatch(getDetailData(result));
    })
  }
}