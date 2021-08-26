import React from "react";
import {EducationLevel} from "../../Components/EducationLevel";

export const EducationInstitutes = (props) => {
    const {
        institute_name,
        faculty,
        website,
        location,
        label
    } = props;
    return(
        <div className="institute-main-container">
            <EducationLevel label={label}/>
            <h1>
                {institute_name}
            </h1>
            <h3>
                {faculty || location}
            </h3>
            <p className="sub-text">
                {website}
            </p>
        </div>
    )
};