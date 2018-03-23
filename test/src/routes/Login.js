import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../api/profile';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{
            padding: '.4rem'
        }}>
            <input type="text" placeholder='请输入用户名' ref='userNameInp'/>
            <br/>
            <br/>
            <input type="password" placeholder='密码' ref='userPassInp'/>
            <br/>
            <br/>
            <button onClick={ev => {
                let {userNameInp, userPassInp} = this.refs,
                    userName = userNameInp.value,
                    userPass = userPassInp.value;
                login(userName, userPass).then(result => {
                    if (result === 'success') {
                        this.props.history.push('/profile');
                    }
                    alert(result);
                });
            }}>登录
            </button>
            <br/>
            <br/>
            <Link to='/register'>还没账号，立即注册！</Link>
        </div>;
    }
}

export default connect()(Login);