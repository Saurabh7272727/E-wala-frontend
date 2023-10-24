import React, { useState } from 'react'
import './Header.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaStore } from 'react-icons/fa';
import Select from 'react-select';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navi = useNavigate();
    const [headers, setHeaders] = useState(false);
    const option = [
        { label: "SigUp", value: "SigUp" },
        { label: "My Profile", value: "MyProfile" },
    ]

    const SelectHandler = (event) => {
        if (event.value === "SigUp") {
            navi('/sigup')
        } else if (event.value === "MyProfile") {
            navi('/myprofile')
        } else if (event.value === "orders") {
            navi('/orders')
        }
    }
    const ScrollerHandler = (event) => {
        const offset = window.scrollY;
        if (offset >= 200) {
            setHeaders(true);
        } else if (offset < 200) {
            setHeaders(false);
        }
    }

    window.addEventListener("scroll", ScrollerHandler);
    return (
        <>
            <header className={`${headers ? "new_headers" : ""}`}>
                <div className="logo_section_web" onClick={() => navi('/')}>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" alt="" />
                </div>
                <div className="search_section_header_main">
                    <AiOutlineSearch className='search_icons' />  <input type="text" placeholder='Search for Products, Brandsand More' />
                </div>
                <div className="option_header_section">
                    <h1 onClick={() => navi('/production')}><FaStore className='search_icons' />About E-wala</h1>
                    <h1><CgProfile className='search_icons' /> <Select options={option} placeholder="SigUp " onChange={SelectHandler} /></h1>
                    <h1 onClick={() => alert("Login first then use...")}><AiOutlineShoppingCart className='search_icons' /> Cart</h1>
                    <h1><BsThreeDotsVertical className='search_icons' /></h1>
                </div>
            </header>
        </>
    )
}

export default Header;