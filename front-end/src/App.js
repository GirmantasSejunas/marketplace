import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContext from './context/MainContext';
import { useState } from 'react';
import './App.css';


import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/footerPages/About'
import Advertisement from './pages/footerPages/Advertisement';
import Contacts from './pages/footerPages/Contacts';
import PaidSevise from './pages/footerPages/PaidSevise';
import Privacy from './pages/footerPages/Privacy';
import Rules from './pages/footerPages/Rules'
import Devices from './pages/homePages/Devices';
import Transport from './pages/homePages/Transport'
import Clothes from './pages/homePages/Clothes';
import RealEstate from './pages/homePages/RealEstate';
import AddForm from './pages/homePages/AddForm';
import WantedPosts from './pages/homePages/WantedPosts';
import ProfilePage from './pages/ProfilePage';
import EditPost from './pages/EditPost';

function App() {

  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  const [wantedPosts, setWantedPosts] = useState([])

  const states = {
      posts,
      setPosts,
      user,
      setUser,
      wantedPosts,
      setWantedPosts
  }

  return (
    <div className="app">
      <MainContext.Provider value={states} >
        
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/about' element={<About />} />
            <Route path='/advertisement' element={<Advertisement />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/paidSevise' element={<PaidSevise />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/rules' element={<Rules />} />
            <Route path='/devices' element={<Devices />} />
            <Route path='/transport' element={<Transport />} />
            <Route path='/clothes' element={<Clothes />} />
            <Route path='/realEstate' element={<RealEstate />} />
            <Route path='/addform' element={<AddForm />} />
            <Route path='/userProfile' element={<ProfilePage />} />
            <Route path='/editpost' element={<EditPost />} />
            <Route path='/wantedPosts' element={<WantedPosts />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </MainContext.Provider>


    </div>
  );
}

export default App;
