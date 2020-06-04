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
            <div>
                <h2>Welcome to the Dashboard</h2>
                <img src="https://www.loveyourdog.com/wp-content/uploads/2019/04/Beagles-900x500.jpg" alt="Beagle Dog"/>
            </div>
            
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {getUser})(Dashboard);