import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import './Back.less';

class Back extends React.Component {
    static defaultProps = {
        title: '课程详情',
    };
    static propTypes = {
        title: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {history, title} = this.props;
        return <header>
            <a href="javascript:;"
               onClick={ev => {
                   history.goBack();
               }}
               className="iconfont icon-fanhui"
            ></a>
            {title}
        </header>
    }
}

export default withRouter(connect()(Back));