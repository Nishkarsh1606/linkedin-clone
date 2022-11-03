import React, { useEffect } from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar.js"
import Feed from './Feed/Feed'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'
import Login from './Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { login, logout } from './features/userSlice'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Widgets from './Widgets/Widgets.js';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [userAuth]=useAuthState(auth)

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         //user is logged in
//         dispatch(login({
//           email: user.email,
//           displayName: user.displayName,
//           photoURL: user.photoURL,
//           uid: user.uid
//         }))
//       } else {
//         //user is logged out
//         dispatch(logout())
//       }
//     })
// },[])

  return (
    <div className="app">
      {
        !userAuth ? (<div><Login /></div>) : (
          <div className="app_body">
            <Header />
            {/* App Body */}
            <Sidebar />
            <Feed />
            {/* Widgets/Right Side bar */}
            <Widgets/>
          </div>
        )
      }
    </div>
  );
}

export default App;
