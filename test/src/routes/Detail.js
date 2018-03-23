import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Back from '../component/Back';
import Course from '../component/Course';
import {queryCourseInfo, collectCourse} from '../api/course';
import action from '../store/action/index';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    async componentWillMount() {
        //=>获取传递的id（路径参数）
        let {match: {params: {id}}} = this.props;
        //=>通过解析的id从服务器端获取到详细数据
        let result = await queryCourseInfo(id);
        this.setState({data: result});
    }

    render() {
        return <div>
            <Back/>
            <ul style={{marginTop: '1.2rem'}}>
                <Course flag="pay" data={this.state.data}/>
            </ul>
            <button
                style={{
                    marginTop: '.2rem',
                    width: '2rem',
                    height: '.7rem',
                    position: 'absolute',
                    right: '.1rem',
                    background: 'black',
                    border: '.01rem solid grey',
                    color: 'white',
                    fontSize: '.2rem',
                    borderRadius: '.05rem'
                }}
                onClick={this.handTouch}
            >收藏该课程
            </button>
        </div>
    }

    handTouch = (ev) => {
        /*
        * 目的：在我的课程中可以查看到
        * 1、页面不刷新，我们进入到我的课程可以查看到收藏的信息
        * 2、页面刷新后，我们进入到我的课程，也可以查看到收藏的信息
        */
        //=>向服务器端发送一份
        collectCourse(this.state.data).then(result => {
            //=>向redux中存储
            this.props.collectCourse(this.state.data);
            //=>跳转回到我的课程页面
            this.props.history.push('/course');
        });
    }
}

export default connect(state => ({...state.course}), action.course)(Detail);