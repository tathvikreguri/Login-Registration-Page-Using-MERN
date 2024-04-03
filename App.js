import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LogIn from './LogIn';
import RegistrationPage from './RegistrationPage';


const App=()=> {
  return (
    <div>
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/Registration' element={<RegistrationPage/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
