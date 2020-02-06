import React, { Component } from 'react';

import { List } from 'antd';

import store from '../../store';
import { deleteDataAction } from '../../store/action-creators';

import './index.scss';

class DataContent extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.changeList);
    }

    changeList = () => {
        this.setState(store.getState());
    }

    deleteData = (index) => {
        const action = deleteDataAction(index);
        store.dispatch(action);
    }

    render() {
        return (
            <div className='data-content'>
                <List
                    bordered
                    dataSource={this.state.dataList}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={() => this.deleteData(index)}
                        >
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
 
export default DataContent;