import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isLogin,info} from '../api/profile';

class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:{}
        }
    }

    async componentWillMount() {
        let loginId = await isLogin();
        loginId = Number(loginId);
        if (isNaN(loginId) || loginId === 0) {
            //=>没登录，跳转到登录页面
            this.props.history.push('/login');
        }
        //=>已经登录获取个人信息
        let data = await info();
        this.setState({data});
    }

    render() {
        let {data:{name}}= this.state;
        return <div>
            姓名：{name}
        </div>
    }
}

export default connect()(MyProfile);