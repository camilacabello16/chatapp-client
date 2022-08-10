import './App.css';
import { GoogleLogin } from 'react-google-login';
import { Alert, notification } from 'antd';
import FacebookLogin from 'react-facebook-login';

function App() {
    const responseGoogle = (e) => {
        console.log(e);

        notification['success']({
            message: 'Notification Title',
            description:
                'Good.',
        });
    }

    const responseErrorGoogle = (e) => {
        console.log(e);

        notification['error']({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }

    const componentClicked = (e) => {
        console.log(e);
        console.log(1);
    }

    const responseFacebook = (e) => {
        console.log(e);
        console.log(2);
    }

    return (
        <div className="App">
            <GoogleLogin
                clientId="976835476824-2dm3ttto5g5d71hafahfvk84t3bjan9o.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <FacebookLogin
                appId="785433826147691"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
            />
        </div>
    );
}

export default App;
