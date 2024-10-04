import React, { useState, useEffect, useRef } from 'react'
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
import GroceryPage from './GroceryPage/GroceryPage';
import Payment from './payment/Payment';
import OrderList from './OrderList/OrderList';
import LoadingBar from 'react-top-loading-bar';
import SearchPage from './Search/searchPage.jsx';
import Internet from './Internet/Internet.jsx';
import ErrorThrow from './Error/ErrorThrow.jsx';
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

  const ref = useRef(null)
  return (
    <>
      <LoadingBar style={{ color: "red", height: "10px" }} ref={ref} />
      <BrowserRouter>
        {
          data ? <Header2 lengthData={lengthData} data={data} loading={loading} /> : <Header />
        }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sigup' element={<SigUp />} />
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/orders/:id/E-wala/officalsite/:num' element={<Orders datas={data} loadings={loading} />} />
          <Route path='/sigup/:number' element={<MainSigupPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout/:id' element={<Logout />} />
          <Route path='/card/:id' element={<Card />} />
          <Route path='/typedata/:type' element={<TypeData datas={data} loadings={loading} />} />
          <Route path='/detailspage/:id' element={<DetailsPage datas={data} loadings={loading} />} />
          <Route path='/production' element={<Production datas={data} loadings={loading} />} />
          <Route path='/grocerypage/:query/latest/model/offers' element={<GroceryPage datas={data} loadings={loading} />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/orderlist' element={<OrderList datas={data} loadings={loading} />} />
          <Route path='/searchPage/:id' element={<SearchPage data={data} loadings={loading} />} />
          <Route path='/searchPage/:id/:search' element={<SearchPage data={data} loadings={loading} />} />
          <Route path='/internet/user/file' element={<Internet />} />
          <Route path='*' element={<ErrorThrow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;