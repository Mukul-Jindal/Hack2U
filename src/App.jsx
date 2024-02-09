import './App.css';
import ClothesPage from './pages/Clothes/ClothesPage';
import UserState from './firebase/userState';
import SignIn from './pages/UserManage/SignIn';

import UploadImage from './pages/UploadImage/UploadImage';

import { useState } from 'react';
import React from 'react';
import { Sign } from "./pages/Register/signUp";
import { Login } from "./pages/Register/login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

function App() {
  const [isSignIn, setSignIn] = useState(false);

  return (
    <>
      <UserState>
        <Router>
          <Routes>

            {/* <SignIn setSignIn={setSignIn} /> */}
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/register' element={<Sign/>} />
            {/* <SignUp/> */}
            {/* <UploadImage />
          {
            isSignIn
            ? <ClothesPage />
            : <></>
          } */}
          </Routes>
        </Router>
      </UserState>
    </>
  );
}

export default App;
