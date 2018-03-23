import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class Forget extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>Forget</div>
    }
}
export default connect()(Forget);