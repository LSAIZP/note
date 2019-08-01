import { actionArr } from "./actionTypes";

const defaultState = {
    inputValue: '',
    list: []
}

// reducer可以接收state，但是绝不能修改state
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {
    if(action.type === actionArr[0]){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === actionArr[1]){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === actionArr[2]){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type === actionArr[3]){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    //console.log(state, action);
    return state;
}

  

