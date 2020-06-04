import React, { Component } from 'react';
import {connect} from 'react-redux'

class Dashboard extends Component {
    render() {
        return(
            <div>This is the Dashboard</div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Dashboard);