import React from 'react';
import {Route , Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import PrivateRoutes from './Components/privateWrapper/PrivateRoutes';
import Split from './Pages/Split';
import Users from './Pages/Users';
import Messages from './Pages/Messages';
import History from './Pages/History';

function App() {

  return (
    <>
    <Toaster/>

      <Routes>
        <Route index path='/' element={<Home/>}/>

        <Route element={<PrivateRoutes/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/calculate' element={<Split/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/history' element={<History/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
