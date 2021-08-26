import React from "react";
import './profile.css';
import {Avatar, Divider} from "antd";

export const Profile = (props) => {
    const {
        name,
        age,
        location,
        description
    } = props;
    return(
        <div className="main-container profile-main-container">
            <div className="component-heading-wrapper">
                <p className='component-main-title'>
                    Profile
                </p>
                <p className='introduction-text'>
                    I'm a creative Front End Developer
                </p>
            </div>
            <Divider className='main-divider'/>
            <div className="about-details-container flex-center">
                <div className='about-me-wrapper'>
                    <h1>
                        About Me
                    </h1>
                    <p className='sub-text'>
                        {description}
                    </p>
                </div>
                <div className='profile-image-wrapper flex-center'>
                    <div className="profile-image-container flex-center">
                        <Avatar src={require('../../Assets/Images/Nishant.jpg')} size={150}/>
                    </div>
                </div>
                <div className='details-wrapper flex-center'>
                    <h1 style={{width: '100%'}}>
                        Details
                    </h1>
                    <div className="details-container">
                        <h5>Name: </h5>
                        <p className="sub-text">
                            {name}
                        </p>
                        <h5>Age: </h5>
                        <p className="sub-text">
                            {age}
                        </p>
                        <h5>Location: </h5>
                        <p className="sub-text">
                            {location}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
};