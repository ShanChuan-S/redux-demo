import React from 'react';
import ReactDom from 'react-dom';

import store from './store/index'
import DataInput from './module/input';
import DataContent from './module/dataContent';
import { getList, getListOfSaga } from './store/action-creators';

import 'antd/dist/antd.css';

class App extends React.Component {

    componentDidMount(){
        // 使用 thunk 中间件获取数据
        const action = getList();
        store.dispatch(action);
    }

    render() {
        return (
            <div>
                <DataInput></DataInput>
                <DataContent></DataContent>
            </div>
        )
    }
}
 
ReactDom.render(
    <App />,
    document.getElementById('app')
);