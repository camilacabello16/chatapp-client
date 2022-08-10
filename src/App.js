import './App.css';
import { GoogleLogin } from 'react-google-login';
import { Alert, notification } from 'antd';
import 'antd/dist/antd.css';


function App() {
    const responseGoogle = (e) => {
        console.log(e);
        console.log(1);
        notification['success']({
            message: 'Notification Title',
            description:
                'Good.',
        });
    }

    const responseErrorGoogle = (e) => {
        console.log(e);
        console.log(2);
        notification['error']({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
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
        </div>
    );
}

export default App;
