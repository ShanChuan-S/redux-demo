import { CHANGE_INPUT, ADD_DATA, DELETE_DATA, GET_LIST } from './action-type';

const defaultState = {};

export default (state = defaultState, action) => {
    // reducer里只能接收state，不能改变state
    if(action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    } else if(action.type === ADD_DATA) {
        let newState = JSON.parse(JSON.stringify(state));
        if(!newState.inputValue) return state;
        newState.dataList.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }else if(action.type === DELETE_DATA){
        let newState = JSON.parse(JSON.stringify(state));
        newState.dataList.splice(action.index, 1);
        return newState;
    }else if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.dataList = action.data.data.list;
        return newState;
    }
    return state;
}