import React from 'react';
import {Route , Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import PrivateRoutes from './Components/privateWrapper/PrivateRoutes';

function App() {

  return (
    <>
    <Toaster/>

      <Routes>
        <Route index path='/' element={<Home/>}/>

        <Route element={<PrivateRoutes/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
