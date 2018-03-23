import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import './Course.less'
import utils from '../common/js/utils';

class Course extends React.Component {
    static defaultProps = {
        flag: 'list',

    };
    static propTypes = {
        flag: PropTypes.string,
        data: PropTypes.object.isRequired,

    };

    constructor(props) {
        super(props);
    }

    render() {
        let {
            flag, data: {
                id,
                name = '珠峰培训VIP精品课',
                pic,
                date = utils.formatTime(new Date()),
                address = '珠峰培训',
                time = '20分钟',
                price = 0
            }
        } = this.props;
        pic = pic || require(`../common/images/default.jpg`);
        return <li className="courseItem">
            <Link to={`/detail/${id}`}>
                <h3 className="title">{name}</h3>
                <div className="con">
                    <div className="imgBox">
                        <img src={pic} alt={name}/>
                    </div>
                    <div className="con_right">
                        <p>
                            <span>开课时间</span>
                            <span>{date}</span>
                        </p>
                        <p>
                            <span>上课地点</span>
                            <span>{address}</span>
                        </p>
                        <p>
                            <span>时长</span>
                            <span>{time}</span>
                        </p>
                    </div>
                </div>
                {
                    flag === 'pay' ? <div className="price">
                        课程金额:<span>￥{price}</span>
                    </div> : null
                }
            </Link>
        </li>
    }
}

export default withRouter(connect()(Course));