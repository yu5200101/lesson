import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import './Banner.less';
import 'swipe-js-iso'

class Banner extends React.Component {


    /*
        * Banner
        * 1、数据是传递进来的（基于属性传递进来）props.data
        * 2、支持用户自定义样式（props.style）/props.className
        * 3、功能上面的扩展
        *   A：默认展示第几张 props.initSlide
        *   B：自动轮播间隔时间，props.auto
        *   C：是否显示焦点props.is-focus
        *
        *  ReactSwipe的bug
       *  第一次渲染组件的时候，会根据当前child的个数计算出轮播图的样式（例如：宽度等），后期数据有更新，child的个数变了，样式不会重新的进行计算，此时只能通过重新调取组件完成相关的事情
        */
    /*设置属性规则*/
    static defaultProps = {
        data: [],
        style: {},
        className: '',
        initSlide: 0,
        auto: 3000,
        isFocus: true
    };
    static propTypes = {
        data: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        initSlide: PropTypes.number,
        auto: PropTypes.number,
        isFocus: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            step: props.initSlide
        }
    }

    render() {

        let {data, className, initSlide, auto, isFocus} = this.props;
        //没有数据的时候我们不渲染react-swipe，有数据再渲染
        if(data.length===0){
            return null;
        }
        return <div className="bannerBox">
            <ReactSwipe
                className={className}
                swipeOptions={{
                    //=>关于轮播图的一些配置项
                    startSlide: initSlide,
                    disableScroll: false,//=>自动切换的时候是否支持手动切换，默认是false：支持
                    auto,
                    callback: (index) => {
                        this.setState({
                            step:index//=>记录当前展示slide的索引
                        })
                    }
                }}>
                {
                    data.map((item, index) => {
                        let {img = require('../common/images/default.jpg'), title = ''} = item;
                        return <div key={index}>
                            <img src={img} alt={title}/>
                        </div>
                    })
                }
            </ReactSwipe>

            {/*focus*/}
            {
                isFocus ? <ul className="focus">
                    {
                        data.map((item, index) => {
                            return <li key={index} className={index === this.state.step ? 'active' : ''}></li>
                        })
                    }
                </ul> : null
            }
        </div>
    }
}

export default withRouter(connect()(Banner));

/*
* 基于react实现组件化开发，目的是把一些公用的内容都进行封装，后期直接调取组件使用即可，真正实现模块化开发=》尽可能提高组件的重复使用率（通用性）是组件开发的核心目的
* 1、当前组件中展示的数据是可变还是不可变的，如果是可变的，数据需要调取的时候传递（不能在组件当中写死）
* 2、组件的样式是否需要用户自定义
* 3、具体功能上的可配置（例如：有些需要这些功能，有一些不需要这些功能）
* 4、组件升级的时候一定要考虑到原有版本和新版本的兼容性
*
*/