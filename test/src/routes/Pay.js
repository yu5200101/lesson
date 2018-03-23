import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Pay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>Pay</div>
    }
}
export default connect()(Pay);