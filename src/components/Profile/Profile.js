import React from "react";
import Axios from "axios";

function Profile(props) {

    const logout = () => {
        Axios.delete('/auth/logout').then( () => {
            props.history.push('/')
        })
    }

  return (
    <div>
      <p>This is the landing Profile</p>
      <button onClick={ () => logout() }>Logout</button>
    </div>
  );
}

export default Profile;
