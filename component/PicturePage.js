import React from 'react';
import { Link } from "react-router-dom";


function get_link(){
    var id_link = window.location.href;//get the link
    var id = id_link.substring(30);//get rid of http bla bla.. at the beginning
    return id;
}
function get_content(id){

}
const PicturePage =({path}) => {
    const id = get_link();
    alert("ID image = "+id);
    return (
        
        <div className="container">
             <Link to="/">
            <button className="profile-btn">Home page</button>
          </Link>
            <h2>Hello Picture ne</h2>
           <img src={path} alt="picture_content" height="42" width="42"/>
           <br/>
           <textarea placeholder="write something">Write some thing here </textarea>
        </div>
    )
}

export default PicturePage
