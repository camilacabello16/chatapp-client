import './signin.css';
import React from 'react';
import { Button, Divider, Input, Row } from 'antd';
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import 'antd/dist/antd.less';

const SignIn = () => {
    return (
        <React.Fragment>
            <div className='page-body'>
                <Row>
                    <p>Not have an account? <Link to={"/signup"}>Sign up</Link></p>
                </Row>
                <Row>
                    <Input placeholder='Username' />
                    <Input placeholder='Password' />
                </Row>
                <Row>
                    <Button type='primary'>Sign In</Button>
                    <Divider plain>Or</Divider>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%'
                        }}
                    >
                        {/* <GoogleLogin
                            clientId="976835476824-2dm3ttto5g5d71hafahfvk84t3bjan9o.apps.googleusercontent.com"
                            buttonText="Sign In with Google"
                            // onSuccess={responseGoogle}
                            // onFailure={responseErrorGoogle}
                            cookiePolicy={'single_host_origin'}
                            style={{ width: '100%' }}
                        />
                        <FacebookLogin
                            appId="785433826147691"
                            autoLoad={true}
                            fields="name,email,picture"
                        // onClick={componentClicked}
                        // callback={responseFacebook}
                        /> */}
                    </div>

                </Row>
            </div>

        </React.Fragment>
    );
}

export default SignIn;