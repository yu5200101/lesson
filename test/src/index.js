import React from 'react';
import ReactDom from 'react-dom';

/*router*/
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

/*react-redux*/
import {Provider} from 'react-redux';
import store from './store/index';

/*myComponent*/
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Pay from "./routes/Pay";
import MyCourse from "./routes/MyCourse";
import MyProfile from "./routes/MyProfile";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Forget from "./routes/Forget";

/*commom css and js*/
import './common/css/reset.min.css';
import './common/css/public.less'
ReactDom.render(<Provider store={store}>

        <HashRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/detail/:id?' component={Detail}/>
                <Route path='/pay' component={Pay}/>
                <Route path='/course' component={MyCourse}/>
                <Route path='/profile' component={MyProfile}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/forget' component={Forget}/>
                {/*非以上任何地址，说明请求的地址是404，我们跳转回到首页*/}
                <Redirect to='/'/>
            </Switch>
        </HashRouter>
    </Provider>
    , window.root);