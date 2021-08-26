import React from "react";
import './contact.css';
import {Button, Divider, Form, Input} from "antd";
import {Email, LocationOn, Phone} from "@material-ui/icons";

export const Contact = () => {
    return (
        <div className="main-container contact">
            <p className='component-main-title contact-title'>
                Contact
            </p>
            <Divider className="main-divider"/>
            <Form layout={'vertical'} className='contact-form'>
                <div className="display-flex align-items-center justify-content-space-between">
                    <div className="display-flex flex-direction-column icon-wrapper-item">
                        <Form.Item label={'Name'}
                                   name={'name'}>
                            <Input placeholder={'Enter name here'}/>
                        </Form.Item>
                        <Form.Item label={'Email'}
                                   name={'email'}
                                   rules={[
                                       {
                                           type: 'email',
                                           message: 'Enter valid email'
                                       }
                                   ]}>
                            <Input placeholder={'Enter email here'}/>
                        </Form.Item>
                    </div>
                    <Form.Item label={'Message'}
                               className={'icon-wrapper-item'}
                               name={'message'}>
                        <Input.TextArea rows={5} placeholder={'Enter message here'}/>
                    </Form.Item>
                    <div className="display-flex flex-direction-column icon-wrapper-item">
                        <div className="display-flex">
                            <div className="icon-wrapper flex-center">
                                <LocationOn/>
                            </div>
                            <div className="icon-wrapper-content-right display-flex flex-direction-column">
                                <p>Address:</p>
                                <p>Mahalaxmi-9, Lalitpur, Nepal</p>
                            </div>
                        </div>
                        <div className="display-flex">
                            <div className="icon-wrapper flex-center">
                                <Email/>
                            </div>
                            <div className="icon-wrapper-content-right display-flex flex-direction-column">
                                <p>Email:</p>
                                <p>nishant2054@gmail.com</p>
                            </div>
                        </div>
                        <div className="display-flex">
                            <div className="icon-wrapper flex-center">
                                <Phone/>
                            </div>
                            <div className="icon-wrapper-content-right display-flex flex-direction-column">
                                <p>Phone Number:</p>
                                <p>9860172439</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="contact-button-container">
                    <Button htmlType={'submit'} type={'primary'}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
};
