import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getUser().catch(() => {
            this.props.history.push('/')
        });
    }

    render() {
        return(
            <div>This is the Dashboard</div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {getUser})(Dashboard);