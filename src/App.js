import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Routers from './router'
import IconMenus from  './modules/IconMenu'
import Footer from './modules/Footer'
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {brown500} from 'material-ui/styles/colors'
import './App.css'

injectTapEventPlugin();
class App extends Component {
    constructor() {
        super()
        this.state = {
            title: 'verney'
        }
    }
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }
    navTap = () => {
        this.setState({
            title: 'hello'
        })
    }
    render() {
        return (
            <div className="App">
                <AppBar
                    titleStyle={{
                        color: brown500
                    }}
                    iconElementLeft={<IconMenus></IconMenus>}
                    title={this.state.title}
                    onLeftIconButtonTouchTap={this.navTap}
                >
                </AppBar>
                <Routers></Routers>
                <Footer></Footer>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default App;
