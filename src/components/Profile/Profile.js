import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { logOutUser } from "../../redux/reducer";

function Profile(props) {
  const logout = () => {
    axios.delete("/auth/logout").then(() => {
      props.logOutUser();
      props.history.push("/");
    });
  };

  return (
    <div>
      <p>Welcome {props.user.email}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { logOutUser })(Profile);
