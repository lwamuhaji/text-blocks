import React from "react";
import GoogleLogin from "react-google-login";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

const onFailure = (response: GoogleLoginResponse) => {
  console.log(response);
};

const onSuccess = (
  response: GoogleLoginResponse | GoogleLoginResponseOffline
) => {
  console.log(response);
};

const Login = () => {
  return (
    <div>
      <h1>로그인 페이지입니다.</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="구글 계정으로 로그인하기"
        responseType={"id_token"}
        onFailure={onFailure}
        onSuccess={onSuccess}
      />
    </div>
  );
};

export default Login;
