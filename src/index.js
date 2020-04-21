import React from 'react'
import ReactDOM from 'react-dom'
// UI组件
// import { Button } from 'antd-mobile'
// 路由
import {HashRouter , Switch , Route} from 'react-router-dom'
// 使用store的外层包裹标签
import {Provider} from 'react-redux'

// 引入store
import store from './redux/store'
// 引入路由组件以映射路由
import Login from './containers/login/login'
import Sign from './containers/sign/sign'
import Main from './containers/main/main'

// 引入通用less
import './assets/less/all.less'

// 在入口js引入socket.io的test，这样才能被打包运行
// import './socket-test/test'

ReactDOM.render((
    <Provider store={store} >
        <HashRouter>
            <Switch>
                <Route path='/sign' component={Sign} />
                <Route path='/login' component={Login} />
                <Route path='/' component={Main} />
            </Switch>
        </HashRouter>
    </Provider>
),document.getElementById('root'))