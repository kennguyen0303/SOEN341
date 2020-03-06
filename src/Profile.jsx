import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./navbar";

class UnconnectedProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  // search bar. using by filter, find the exact info that user wants.
  handleSearch = event => {
    const query = event.target.value;
    const results = this.props.user.filter(item => {
      return item.username.includes(query);
    });
    console.log(results);
    this.setState({ results: results });
  };
  render() {
    // give the condition so that only applicable user will be selected and profile picture will show.
    const profileUser = this.props.user.find(
      e => e.username === this.props.mainUser
    );

    return (
      <div>
        <NavBar/>
        <div className="container">
          <Link to="/edit_profile">
            <button className="profile-btn">Edit Profile</button>
          </Link>
          <Link to="/following">
            <button className="profile-btn">Following</button>
          </Link>
          <Link to="/upload">
            <button className="profile-btn">Add Picture</button>
          </Link>
          <Link to="/follower">
            <button className="profile-btn">Follower</button>
          </Link>
          <div class='dropdown'>
            <button className='profile-btn'>Settings</button>
            <div className='dropdown-content'>
              <a href='#'>I am still thinking</a>
              <a href='#'>I am still studying</a>
              <a href='#'>I am still learning</a>
            </div>
          </div>
        </div>
        
        {this.props.post
          .filter(e => e.username === this.props.mainUser)
          .map(e => {
            return (
              <div className="picsadded">
                <Link to={`/picture/${e._id}`} className="btn btn-dark btn-sm my-1">
                    <img height="50%" width="50%" src={e.frontendPath} />
                 </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
// also have to show all info which comes from store.(중앙에서 받아온 정보를보여줘야한다)
// get posts and users from store.js
let mapStateToProps = state => {
  return { post: state.posts, user: state.users };
};
// connect to redux
let Profile = connect(mapStateToProps)(UnconnectedProfile);
export default Profile;
