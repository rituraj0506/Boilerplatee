

import Login from './Components/Login';
import { useState } from 'react';
import Profile from './Components/Profile';
import LoginContext from './Context/LoginContext';

function App() {
  const [showProfile,setShowProfile]=useState(false);
  const [username,setUsername]=useState("");
  return (
    <div className="App"><LoginContext.Provider value={{username,setUsername,setShowProfile}}>
    {showProfile?<Profile/>: <Login/>}</LoginContext.Provider>
    </div>
  );
}

export default App;
// showing the profile if it is login