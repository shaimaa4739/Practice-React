import './App.css';
import {Routes,Route} from 'react-router-dom'
import OurNav from './components/OurNav'
import Products from './components/Products'
import Login from './components/Login'
import Users from './components/Users'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <>
      <OurNav/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Products/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/UserProfile" element={<UserProfile/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
