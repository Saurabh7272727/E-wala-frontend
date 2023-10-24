import React from 'react'
import './Home.scss';
import HomeComponents from './HomeComponents/HomeComponents';
import Products from './Products/Products';
const Home = () => {
    return (
        <div className='home'>
            <div className="main_home_section_headers">
                <div className="home_header_boxes">
                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" alt="" />
                    <p>Grocery</p>
                </div>
                <div className="home_header_boxes">
                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                    <p>Mobiles</p>
                </div>
                <div className="home_header_boxes">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" alt="" />
                    <p>Fashion</p>
                </div>
                <div className="home_header_boxes">
                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100" alt="" />
                    <p>Electronics</p>
                </div>
                <div className="home_header_boxes">
                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                    <p>Home & Furniture</p>
                </div>
                <div className="home_header_boxes">
                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/0ff199d1bd27eb98.png?q=100" alt="" />
                    <p>Appliances</p>
                </div>
                <div className="home_header_boxes">
                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" alt="" />
                    <p>Travel</p>
                </div>
                <div className="home_header_boxes">
                    <img src="https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" alt="" />
                    <p>Beauty, Toys & More</p>
                </div>
                <div className="home_header_boxes">
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100" alt="" />
                    <p>Two Wheelers</p>
                </div>
            </div>
            <HomeComponents />
            <Products />
        </div>
    )
}

export default Home;