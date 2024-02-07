import './App.css';
import ClothesPage from './pages/Clothes/ClothesPage';
import UserState from './firebase/userState';
import SignIn from './pages/UserManage/SignIn';
import SignUp from './pages/UserManage/SignUp';
function App() {
  return (
    <>
      <UserState>
        {/* <SignIn /> */}
        <SignUp/>
        <ClothesPage />
      </UserState>
    </>
  );
}

export default App;
