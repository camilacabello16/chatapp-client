import './style.css';
import React from 'react';
import {
    Row,
    Col
} from 'antd';

const SignInLayout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='body-layout'>
                <Row className='body-inside'>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <div className='body-layout-left'>
                            <img src='/image-signin.png' />
                        </div>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        {children}
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default SignInLayout;