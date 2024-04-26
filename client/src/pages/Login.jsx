import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import video from '../assets/bg-video.mp4';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUserAsync } from '../features/user/userSlice';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const responseGoogle = (res) =>{
    const decodedData = jwtDecode(res.credential);
    
    const data = {
      name: decodedData.name,
      _id: decodedData.sub,
      image: decodedData.picture,
      email: decodedData.email,
    };
    
    dispatch(verifyUserAsync(data))
    
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/');
  }


  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={video}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="shadow-2xl">
          
            <GoogleOAuthProvider clientId="858628708130-bsl6vh2152162duutmihmnlib4uv69hp.apps.googleusercontent.com">
              <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login