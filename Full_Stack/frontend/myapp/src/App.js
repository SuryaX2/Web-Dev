import { useState } from 'react'
import './App.css';
import Signup from './signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login'
import Home from './home'
import Logout from './logout'
import Alert from './alert';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 10000);
  }
  return (
    <>
      <BrowserRouter>
        <Alert alert={alert} />
        <Routes>

          <Route path="/register" element={<Signup showAlert={showAlert} />}></Route>
          <Route path="/login" element={<Login showAlert={showAlert} />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;