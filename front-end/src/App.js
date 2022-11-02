import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutComp from './pages/About'
import Advertisement from './pages/Advertisement';
import Contacts from './pages/Contacts';
import PaidSevise from './pages/PaidSevise';
import Privacy from './pages/Privacy';
import Rules from './pages/Rules'
import Devices from './pages/homePages/Devices';
import Transport from './components/homeComponents/Transport';
import Clothes from './components/homeComponents/Clothes';
import RealEstate from './components/homeComponents/RealEstate';
import AddForm from './pages/homePages/AddForm';

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
          <Route path='/devices' element={<Devices/>} />
          <Route path='/devices' element={<Transport/>} />
          <Route path='/devices' element={<Clothes/>} />
          <Route path='/devices' element={<RealEstate/>} />
          <Route path='/addform' element={<AddForm/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
