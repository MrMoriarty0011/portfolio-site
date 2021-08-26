import React, {useEffect, useState} from 'react';
import './App.css';
import {MainBackground} from "./Container/MainBackground/MainBackground";
import 'antd/dist/antd.css';
import ScrollUpButton from 'react-scroll-up-button';
import {Header} from "./Container/Header/header";
import {Profile} from "./Container/Profile/Profile";
import {Education} from "./Container/Education/Education";
import data from './Components/data';
import {Experience} from "./Container/Experience/experience";
import {Skills} from "./Container/Skills/Skills";
import {Contact} from "./Container/Contacts/Contact";
import {DownCircleOutlined} from "@ant-design/icons";
import classNames from 'classnames';
import UpCircleOutlined from "@ant-design/icons/lib/icons/UpCircleOutlined";
import UpOutlined from "@ant-design/icons/lib/icons/UpOutlined";
// import './Styles/styles.css';
// import {KeyboardArrowUp} from "@material-ui/icons";

function App() {
    const {
        name,
        age,
        location,
        description,
        education,
        experience,
        skills
    } = data;

    const [is_visible, setIsVisible] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.pageYOffset > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    })

    return (
        <div className="App">
            {/* <DownCircleOutlined className='scroll-button'/> */}
            {/* <Header/> */}
            <div id='home'>
                <MainBackground/>
            </div>
            {/* <div id='profile'>
                <Profile name={name}
                         age={age}
                         location={location}
                         description={description}/>
            </div> */}
            <div id='skills'>
                <Skills skills={skills}/>
            </div>
            <div id='experience'>
                <Experience experience={experience}/>
            </div>
            <div id='education'>
                <Education education={education}/>
            </div>
            <div id='contact'>
                <Contact/>
            </div>
            <ScrollUpButton
                ContainerClassName={classNames("scroll-to-top flex-center", {active: is_visible})}
                StopPosition={0}
                ShowAtPosition={300}
                scroll={true}
                spy={true}
                offset={-70}
                AnimationDuration={500}>
                <UpOutlined/>
            </ScrollUpButton>
        </div>
    );
}

export default App;
