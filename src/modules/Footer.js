/**
 * Created by domen on 2016/12/5.
 */

import React, {Component} from 'react';
import { browserHistory } from 'react-router/umd/ReactRouter.min'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import HomeIcon from 'material-ui/svg-icons/action/home'
import ExploerIcon from 'material-ui/svg-icons/action/explore'
import Settings from 'material-ui/svg-icons/action/settings'

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
}

class Footer extends Component {
    constructor() {
        super()
        const currentLoacationName = browserHistory.getCurrentLocation().pathname;
        this.state = {}
        switch (currentLoacationName) {
            case '/':
                this.state.selectedIndex = 0
                break
            case '/browse':
                this.state.selectedIndex = 1
                break
            case '/setting':
                this.state.selectedIndex = 2
                break
            default:
                this.state.selectedIndex = 0
                break
        }
    }
    select = (index) => {
        // 按钮action状态设置
        this.setState({selectedIndex: index})
        // 路由跳转
        switch (index) {
            case 0:
                browserHistory.push('/')
                break
            case 1:
                browserHistory.push('/browse')
                break
            case 2:
                browserHistory.push('/setting')
                break
            default:
                break
        }
    }
    render() {
        return (
            <Paper zDepth={1} style={footerStyle}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="首页"
                        icon={<HomeIcon></HomeIcon>}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="浏览"
                        icon={<ExploerIcon></ExploerIcon>}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="设置"
                        icon={<Settings></Settings>}
                        onTouchTap={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default Footer