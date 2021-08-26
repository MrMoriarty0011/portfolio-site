import React from "react";
import './skills.css';
import {Divider} from "antd";
import StarRatings from "react-star-ratings";

export const Skills = (props) => {
    const {skills} = props;
    return (
        <div className="main-container skills">
            <p className='component-main-title'>
                Skills
            </p>
            <Divider className="main-divider"/>
            <div className="skills-container">
                <div className="grid-container">
                    {skills.map((item) => {
                        return <div className="grid-item">
                            <p className='sub-text margin-bottom-0'>
                                {item.skill}
                            </p>
                            <StarRatings rating={item.rating}
                                         starDimension={'20px'}
                                         starRatedColor={'#22A39F'}
                                         starSpacing={'1px'}/>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
};