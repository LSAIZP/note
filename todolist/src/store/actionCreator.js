import { actionArr } from "./actionTypes";
//import store from './index';

export const getInputChangeAcion = (value) => ({
    type: actionArr[0],
    value
}) 

export const getBtnClickAction = () => ({
    type: actionArr[1],
}) 

export const getItemDeleteAction = (index) => ({
    type: actionArr[2],
    index
}) 

export const initListAction = (data) => ({
    type: actionArr[3],
    data
})

export const getInitList = () => ({
    type: actionArr[4]
});