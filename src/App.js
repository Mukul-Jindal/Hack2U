import './App.css';
import ClothesPage from './pages/Clothes/ClothesPage';
import UserState from './firebase/userState';
import SignIn from './pages/UserManage/SignIn';
import SignUp from './pages/UserManage/SignUp';
import UploadImage from './pages/UploadImage/UploadImage';
import { useState } from 'react';
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
