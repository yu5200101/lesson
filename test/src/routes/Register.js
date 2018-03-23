import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {register} from '../api/profile';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{padding: '.4rem'}}>
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
                register(userName, userPass).then(result => {
                    if (result === 'error') {
                        alert('注册失败')
                    }
                    this.props.history.push('/profile');
                });
            }}>立即注册
            </button>
            <br/>
            <br/>
            <Link to='/login'>已经注册，立即登录！</Link>
        </div>;
    }
}

export default connect()(Register);