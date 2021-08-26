import React from "react";
import './education.css';
import {Divider} from "antd";
import {EducationInstitutes} from "./EducationInstitues";

export const Education = (props) => {
    const {education} = props;
    return (
        <div className="main-container education">
            <p className='component-main-title'>
                Education
            </p>
            <Divider className="main-divider"/>
            {education.map((item) => {
                return <div className='education-institutes'>
                    <div className="col-dates-wrapper">
                        <h3>
                            {item.start_date} - {item.end_date}
                        </h3>
                    </div>
                    <div className="col-institute-wrapper">
                        <EducationInstitutes label={item.level}
                                             institute_name={item.institute_name}
                                             faculty={item.faculty}
                                             website={item.website}/>
                    </div>
                </div>
            })}
        </div>
    )
};