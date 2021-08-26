import React, {useEffect, useState} from "react";
import './header.css';
import classNames from 'classnames';

export const Header = () => {
    const [taskbar, setTaskbar] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.pageYOffset > 600) {
                setTaskbar(true);
            } else {
                setTaskbar(false);
            }
        });
    })
    return(
        <div className={classNames('header-main-container', {'active': taskbar})}>
            <p>Home</p>
            <p>Profile</p>
            <p>Education</p>
            <p>Experience</p>
            <p>Skills</p>
            <p>Contact</p>
        </div>
    )
};