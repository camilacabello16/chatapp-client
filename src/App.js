import './App.css';
import { GoogleLogin } from 'react-google-login';
import { Alert, notification } from 'antd';
import FacebookLogin from 'react-facebook-login';
import SignIn from './pages/signin/signin';
import SignInLayout from './layout/SigninLayout';

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
        <SignInLayout />
    );
}

export default App;
