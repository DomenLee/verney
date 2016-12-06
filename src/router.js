/**
 * Created by domen on 2016/12/6.
 */
import React, {Component} from 'react';
import { Router, Route , browserHistory } from 'react-router/umd/ReactRouter.min'
import Home from './Home'
import Browse from './Browse'
import Setting from './Setting'

class Routers extends Component {
    render() {
        return (
            // history={browserHistory} 缺少时错误
            // Uncaught TypeError: Cannot read property 'getCurrentLocation' of undefined(…)
            <Router history={browserHistory}>
                <Route path="/" component={Home}></Route>
                <Route path="/browse" component={Browse}></Route>
                <Route path="/setting" component={Setting}></Route>
            </Router>
        )
    }
}

export default Routers