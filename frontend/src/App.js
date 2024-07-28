import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useState, useEffect } from "react";

import './App.css';
import Auth from './components/auth/Auth'
import Chat from './components/chat/Chat'

function App() {


  const [isLogedin, setIsLogedin] = useState(false)

  function checkLogin(){

    setIsLogedin(localStorage.getItem("token"))

  }
    
  useEffect(() => {
    checkLogin()
  }, []);

  return (
    <div className="App">
      
      <BrowserRouter>

        <Routes>
         {!isLogedin ?(
            <>
              <Route path="/" element={<Navigate replace to="/login"/>}/>
              <Route path="/login" element={<Auth type="login" setIsLogedin={setIsLogedin}/>}/>
              <Route path="/signin" element={<Auth type="signin"/>}/>
            </>
          ):(
            <>
              <Route path="/" element={<Chat setIsLogedin={setIsLogedin}/>}/>
              <Route path="/login" element={<Navigate replace to="/"/>}/>
              <Route path="/signin" element={<Navigate replace to="/"/>}/>
            </>
          )

         
         }
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
