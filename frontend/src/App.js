import logo from './logo.svg';
import './App.css';
import {LoginSocialGoogle} from 'reactjs-social-login'
import {GoogleLoginButton} from 'react-social-login-buttons'

function App() {
  return (
    <div className="App">
     <LoginSocialGoogle
     client_id='307310959095-tq5rav54v62it0dup4ced749qkhia4r5.apps.googleusercontent.com'
     discoveryDocs='claims_supported'
     access_type='offline'
     onResolve={({provider,data})=>{
      console.log(provider,data)
     }}
     onReject={({error})=>{
      console.log(error)
     }}
     >
      <GoogleLoginButton />
     </LoginSocialGoogle>
    </div>
  );
}

export default App;
