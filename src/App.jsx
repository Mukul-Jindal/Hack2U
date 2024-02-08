import './App.css';
import ClothesPage from './pages/Clothes/ClothesPage';
import UserState from './firebase/userState';
import SignIn from './pages/UserManage/SignIn';

import UploadImage from './pages/UploadImage/UploadImage';

import { useState } from 'react';
import React from 'react';
import {Sign} from "./pages/Register/signUp";
import {Login} from "./pages/Register/login";


function App() {
  const [isSignIn, setSignIn] = useState(false);

  return (
    <>
      <UserState>
        <SignIn setSignIn={setSignIn} />
        {/* <SignUp/> */}
        <UploadImage />
        {
          isSignIn
            ? <ClothesPage />
            : <></>
        }
      </UserState>
    </>
  );
}

export default App;
