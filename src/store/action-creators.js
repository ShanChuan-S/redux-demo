import { CHANGE_INPUT, ADD_DATA, DELETE_DATA, GET_LIST } from './action-type';
import axios from 'axios';

// 获取列表数据显示在页面上
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

// 接口获取列表数据 使用 thunk 中间件
export const getList = () => {
    // 因为项目中使用了 redux-thunk 所以这里可以直接将dispatch作为参数传入
    return (dispatch) => {
        // axios.get('https://www.easy-mock.com/mock/5e1439591670273c12aeff2f/example/getList')
        axios.get('https://api.myjson.com/bins/9gaq8')
        .then((res)=>{
            const action = getListAction(res.data);
            dispatch(action);
        }).catch((error)=>{
            console.log(error);
        })
    }
}

// 修改输入框的值
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

// 添加数据
export const addDataAction = () => ({
    type: ADD_DATA
})

// 删除数据
export const deleteDataAction = (index) => ({
    type: DELETE_DATA,
    index
})