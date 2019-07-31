import React, { Component } from 'react';
import Messages from './../components/Messages';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import CartResult from './../components/CartResult';


class MessageContainer extends Component {
    render() {
        var { message } = this.props;
        return (
            <Messages
                message={message}
            />
        );
    }

}

MessageContainer.propTypes = {
    message : PropTypes.string
}


const mapStateToProps = state => ({
    message: state.message
});

export default connect(mapStateToProps, null)(MessageContainer);

