import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Tab from '../component/Tab';
import action from '../store/action/index';
import Course from '../component/Course';

class MyCourse extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        let {collectData,getCollect} = this.props;

        if (collectData && collectData.length === 0) {
            //=>派发一个任务，从服务器端获取收藏信息，更新redux容器中的信息
            getCollect();
        }
    }

    render() {
        let {collectData} = this.props;
        return <div>
            <Tab/>
            {
                collectData.length > 0 ? (<ul>
                    {
                        collectData.map((item, index) => {
                            return <Course data={item} flag='list' key={index}/>
                        })
                    }
                </ul>) : '暂无收藏'
            }


        </div>
    }
}

export default connect(state => ({...state.course}), action.course)(MyCourse);