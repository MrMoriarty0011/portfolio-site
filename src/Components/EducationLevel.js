import React from "react";
import './components.css';

export const EducationLevel = (props) => {
    const {label} = props;
    return(
        <div className="education-label">
            <span>
                {label}
            </span>
        </div>
    )
};