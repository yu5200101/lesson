import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Nav.less';
import Transition from 'react-transition-group/Transition'
import action from '../store/action/index';
/*配置transition组件的一些基本参数信息*/
const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    // zIndex: -1
    /*height: 0,
    overflow: 'hidden'*/
};

const transitionStyles = {
    entering: {/*height: 0*/opacity: 0, /* zIndex: -1*/},
    entered: {/*height: '7.2rem'*/opacity: 1, /*zIndex: 999*/},
};

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inProps: false
        }
    }

    render() {
        let {inProps} = this.state;
        return <header className="headerBox">
            <div className="con">
                <h1 className="logo">
                    <a href="#" className="link">珠峰培训</a>
                </h1>
                {/* <a href="#" className="menu iconfont icon-liebiao"
                   onClick={ev => {
                       let $menuNav = this.menuNav,
                           $block = $menuNav.style.display || 'none';
                       if ($block === 'none') {
                           $menuNav.style.display = 'block';
                           setTimeout(() => {
                               $menuNav.style.opacity = 1;
                           }, 0);
                           return;
                       } else {
                           $menuNav.style.opacity = 0;
                           let fn = () => {
                               $menuNav.style.display = 'none';
                               $menuNav.removeEventListener('transitionend', fn, false);
                           }
                           $menuNav.addEventListener('transitionend', fn, false);
                       }
                   }}
                ></a>*/}
                <a href="javascript:;" className="menu iconfont icon-liebiao"
                   onClick={ev => {
                       this.setState({
                           inProps: !inProps
                       })
                   }}
                ></a>
            </div>
            {/*<ul className="menuNav" ref={x => this.menuNav = x}>
                <li>全部课程</li>
                <li>react</li>
                <li>vue</li>
                <li>node</li>
            </ul>*/}
            {/*基于transition组件实现动画，想让哪一个元素实现动画，我们就用transition把它包裹起来即可
            1、需要把控制动画的元素用一层函数包裹起来，函数中有一个参数叫做state，当我们进行相关操作的时候，state是跟着进行改变的，由state的改变来控制元素的动画
            2、timeout：完成动画的延迟时间
            3、in:[boolean] 通过这个属性可以控制元素动画的切换
            */}
            <Transition in={inProps}
                        timeout={duration}
                        onEnter={node => {
                            //=>node当前控制动画的元素
                            node.style.display = 'block';
                        }}
                        onExited={node => {
                            node.style.display = 'none';
                        }}
            >
                {
                    (state) => (
                        <ul className="menuNav"
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                            onClick={ev => {
                                this.setState({
                                    inProps: false
                                });
                                //=>通过dispatch派发修改容器中的数据
                                this.props.getCourse(ev.target.getAttribute('type'));
                            }}
                        >
                            <li type="all">全部课程</li>
                            <li type="react">react</li>
                            <li type="vue">vue</li>
                            <li type="node">node</li>
                        </ul>
                    )
                }
            </Transition>
        </header>
    }
}

export default withRouter(connect(state=>({...state}),action.course)(Nav));