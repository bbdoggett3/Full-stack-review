import React, { Component } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { loginUser } from '../../redux/reducer'

class Landing extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  login = (event) => {
      event.preventDefault();
      const {email, password} = this.state
      axios.post('/auth/login', {email, password})
      .then( res => {
        this.props.loginUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch(error => {
          alert('Could not log in')
      })
  }



  render() {
    const { email, password } = this.state;
    return (
      <div>
        
        <form onSubmit = {(event) => this.login(event)}>
            
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={(event) => this.changeHandler(event)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(event) => this.changeHandler(event)}
          />
          <input 
            type="submit"
            value="Login"
          />
        </form>

        <span>Don't already have an account? Register</span>
        <Link to='/register'>
            Here
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState

const mapDispatchToProps = { loginUser }

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
