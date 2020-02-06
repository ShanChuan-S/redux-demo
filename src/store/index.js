import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer.js';



// 使用 thunk 中间件
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancer(applyMiddleware(thunk));
// thunk是一个中间件，REDUX_DEVTOOLS也是一个中间件，但是createStore中只能接收两个参数，所以两个不能同时写进去
// 就用到了compose（增强函数）
// 如果只使用 REDUX_DEVTOOLS，在下面第二个参数直接换成 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 就行了
const store = createStore(reducer, enhancer);




export default store;