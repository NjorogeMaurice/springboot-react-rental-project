import logo from './logo.svg';
import './App.css';
import Login from './Tenant/login';
import SignUp from './Tenant/signup';
import {Route,Router,Routes
} from 'react-router-dom'
import Apply from './Applicant/Applicant';
import AdminDashBoard from './Admin/dashboard';
import Home from './home';

function App() {
  
  return (

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/apply' element={<Apply/>}/>
          <Route exact path='/account' element={<SignUp/>}/>
          <Route exact path='/login' element={<Login/>}/> 
          <Route exact path='/admin' element={<AdminDashBoard/>}/>
        </Routes>
  );
}

export default App;
