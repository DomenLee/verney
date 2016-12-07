/**
 * Created by domen on 2016/12/7.
 */
import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchText: '',
            open: false
        }
    }
    // 写入搜索文本
    setInput = (e) => {
        this.setState({
            searchText: e.target.value
        })
        if (e.keyCode == 13) this.searchBaiduWenKu()
    }
    // 调用百度文库搜索接口
    searchBaiduWenKu = () => {
        this.setState({
            open: true
        })
    }
    // 关闭提示
    closeTip = () => {
        this.setState({
            open: false
        })
    }
    render() {
        // 配置按钮
        const actions = [
            <FlatButton
                label="知道了"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.closeTip}
            />,
        ];
        return (
            <div>
                <TextField
                    hintText="搜索数据来自百度文库"
                    onKeyUp={this.setInput}
                />
                <FlatButton
                    label="搜索"
                    primary={true}
                    onTouchTap={this.searchBaiduWenKu}
                />
                <Dialog
                    title="提示"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.closeTip}
                >
                    接口尚在申请，暂不能进行搜索.
                </Dialog>
            </div>
        )
    }
}

export default Search