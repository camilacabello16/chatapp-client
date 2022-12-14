import './App.css';
import { GoogleLogin } from 'react-google-login';
import { Alert, notification } from 'antd';
import FacebookLogin from 'react-facebook-login';
import SignIn from './pages/signin/signin';
import SignInLayout from './layout/SigninLayout';
import { Routes, Route, Link } from "react-router-dom";
import SignUp from './pages/signup/signup';
import Chat from './pages/chat';
import PageLayout from './layout/PageLayout';

function App() {

    return (
        // <div className="App">
        //     <GoogleLogin
        //         clientId="976835476824-2dm3ttto5g5d71hafahfvk84t3bjan9o.apps.googleusercontent.com"
        //         buttonText="Login"
        //         onSuccess={responseGoogle}
        //         onFailure={responseErrorGoogle}
        //         cookiePolicy={'single_host_origin'}
        //     />
        //     <FacebookLogin
        //         appId="785433826147691"
        //         autoLoad={true}
        //         fields="name,email,picture"
        //         onClick={componentClicked}
        //         callback={responseFacebook}
        //     />
        // </div>
        <Routes>
            <Route
                path="/signin"
                element={
                    <SignInLayout>
                        <SignIn />
                    </SignInLayout>
                }
            />
            <Route
                path="/signup"
                element={
                    <SignInLayout>
                        <SignUp />
                    </SignInLayout>
                }
            />
            <Route
                path="/"
                exact
                element={
                    <PageLayout>
                        <Chat />
                    </PageLayout>
                }
            />
        </Routes>

    );
}

export default App;
