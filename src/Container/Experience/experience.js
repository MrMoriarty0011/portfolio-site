import React from "react";
import {Divider} from "antd";
import {EducationInstitutes} from "../Education/EducationInstitues";

export const Experience = (props) => {
    const {experience} = props;
    return(
        <div className="main-container">
            <p className='component-main-title'>
                Experience
            </p>
            <Divider className="main-divider"/>
            {experience.map((item) => {
                return <div className='education-institutes'>
                    <div className="col-dates-wrapper">
                        <h3>
                            {item.start_date} - {item.end_date}
                        </h3>
                    </div>
                    <div className="col-institute-wrapper">
                        <EducationInstitutes label={item.level}
                                             institute_name={item.institute_name}
                                             location={item.location}
                                             website={item.website}/>
                    </div>
                </div>
            })}
        </div>
    )
};