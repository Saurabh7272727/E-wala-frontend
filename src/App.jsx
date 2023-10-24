import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header.jsx';
import SigUp from './SigUp/SigUp';
import MyProfile from './MyProfile/MyProfile';
import Orders from './Orders/Orders';
import Footer from './Footer/Footer';
import MainSigupPage from './SigUp/MainSigupPage';
import Login from './Login/Login';
import axios from 'axios';
import Header2 from './Header/Header2/Header.jsx';
import Logout from './LogOut/Logout';
import Card from './MyCard/Card';
import TypeData from './TypeData/TypeData';
import DetailsPage from './DetailsPage/DetailsPage';
import Production from './Production/Production';
import fetchApiLength from './Server/LengthHeader.jsx';
const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const URL = `http://localhost:3000/header`;
  const fetchApi = async () => {
    await axios?.get(URL, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })?.then((res) => {
      return res;
    })?.then((e) => {
      setData(e?.data);
      setLoading(false);
    })
  }
  useEffect(() => {
    fetchApi();
  }, []);
  const { lengthData, lengthLoading } = fetchApiLength(`${data?._id}`);

  return (
    <>
      <BrowserRouter>
        {
          data ? <Header2 lengthData={lengthData} data={data} loading={loading} /> : <Header />
        }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sigup' element={<SigUp />} />
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/sigup/:number' element={<MainSigupPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout/:id' element={<Logout />} />
          <Route path='/card/:id' element={<Card />} />
          <Route path='/typedata/:type' element={<TypeData datas={data} loadings={loading} />} />
          <Route path='/detailspage/:id' element={<DetailsPage datas={data} loadings={loading} />} />
          <Route path='/production' element={<Production datas={data} loadings={loading} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;