import {BrowserRouter as Router, Navigate, Outlet, Route, Routes} from 'react-router-dom';
import DataProvider from './context/DataProvider';
import './App.css';
import { useState } from 'react';
import Login from './components/accounts/Login'
import Home from './components/home/Home';
import Header from './components/header/Header';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import Contact from './components/Contact';
import About from './components/About';
import Homepage from './components/home/Homepage';
import Events from './components/Event/Events';
import CreateEvents from './components/Event/CreateEvent';
import Donate from './components/Donate/Donate';

const PrivateRoute = ({isAuthenticated, ...props})=>
{
  //const token = sessionStorage.getItem('accessToken');
  return isAuthenticated?
  <>
  <Header/>
  <Outlet/>
  </>
  : <Navigate replace to='/login'/>
}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    
    <DataProvider>
      <Router>
      {/* <Header/> */}
      <div style={{marginTop:40}}>
      <Routes>
      <Route exact path ='/login' element={<Login isUserAuthenticated={isUserAuthenticated}/>}/>
      <Route path='/homepage' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
      <Route exact path ='/homepage' element={<Homepage/>}/>
      </Route>
      {/* <Route exact path ='/' element={<Home/>}/> */}
      <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route exact path ='/' element={<Home/>}/>
      </Route>
      
      <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
      <Route exact path ='/create' element={<CreatePost/>}/>
      </Route>

      <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
      <Route exact path ='/details/:id' element={<DetailView/>}/>
      </Route>

      <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
      <Route exact path ='/update/:id' element={<Update/>}/>
      </Route>

      <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
      <Route exact path ='/about' element={<About/>}/>
      </Route>

      <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
      <Route exact path ='/contact' element={<Contact/>}/>
      </Route>

      <Route path='/events' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
      <Route exact path ='/events' element={<Events/>}/>
      </Route>

      <Route path='/donate' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
      <Route exact path ='/donate' element={<Donate/>}/>
      </Route>

      <Route path='/createEvent' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
      <Route exact path ='/createEvent' element={<CreateEvents/>}/>
      </Route>

      
      
      {/* <Route exact path ='/create' element={<CreatePost/>}/> */}
      </Routes>
      </div>
    
    </Router>
    {/* <Home/> */}
    </DataProvider> 
  
    
  );
}

export default App;
