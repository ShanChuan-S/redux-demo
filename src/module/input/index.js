import React, { Component } from 'react';

import { Input, Button } from 'antd';

import store from '../../store';
import { changeInputAction, addDataAction } from '../../store/action-creators';

import './index.scss';

class DataInput extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange);
    }

    storeChange = () => {
        this.setState(store.getState());
    }

    // 修改输入框的值
    changeInput = (e) => {
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }

    // 添加数据
    addData = () => {
        const action = addDataAction();
        store.dispatch(action);
    }

    render() { 
        return (
            <div className='data-input'>
                <Input
                    placeholder='请输入添加内容'
                    className='input'
                    onChange={this.changeInput}
                    value={this.state.inputValue}
                    onPressEnter={this.addData}
                />
                <Button
                    className='data-add-btn'
                    type='primary'
                    onClick={this.addData}
                >
                    增加
                </Button>
            </div>
        );
    }
}
 
export default DataInput;