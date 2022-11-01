import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header'
import Footer from './components/Footer';
import AboutComp from './pages/About'
import Advertisement from './pages/Advertisement';
import Contacts from './pages/Contacts';
import PaidSevise from './pages/PaidSevise';
import Privacy from './pages/Privacy';
import Rules from './pages/Rules'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<AboutComp/>} />
          <Route path='/advertisement' element={<Advertisement/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/paidSevise' element={<PaidSevise/>} />
          <Route path='/privacy' element={<Privacy/>} />
          <Route path='/rules' element={<Rules/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
