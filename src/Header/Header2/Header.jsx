import React, { useState } from 'react'
import "./Header.scss";
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaStore } from 'react-icons/fa';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const Header2 = ({ data, loading, lengthData }) => {
    const [headers, setHeaders] = useState(false);
    const [dotaHan, setDotHan] = useState(false);

    const navi = useNavigate();
    const option = [
        { label: "Logout", value: "Logout" },
        { label: "Orders", value: "Orders" },
    ]

    const ScrollerHandler = (event) => {
        const offset = window.scrollY;
        if (offset >= 200) {
            setHeaders(true);
        } else if (offset < 200) {
            setHeaders(false);
        }
    }

    window.addEventListener("scroll", ScrollerHandler);
    const first = data?.firstName[0]?.toUpperCase();
    const DotHandler = () => {
        setDotHan(!dotaHan);
    }

    const SelectHandler = (event) => {
        switch (event.value) {
            case "Logout":
                navi(`/logout/${data?._id}`);
                break;
            case "Orders":
                navi(`/orderlist`);
                break;
        }
    }
    const HomeHandler = () => {
        navi('/');
        window.location.reload();
    }
    //    keyfunction

    const keyfunction = (event) => {
        if (event.key == 'Enter') {
            navi(`/searchPage/${data?._id}/${event.target.value}`);
        }
    }

    return (
        <>
            <header className={`${headers ? "new_headers" : ""}`}>
                <div className="logo_section_web" onClick={HomeHandler}>
                    <img src="https://static.vecteezy.com/system/resources/previews/006/547/161/original/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg" alt="" />
                </div>
                <div className="search_section_header_main">
                    <AiOutlineSearch className='search_icons' />  <input type="text" onKeyUp={keyfunction} placeholder='Search for Products, Brandsand More' onClick={() => navi(`/searchPage/${data?._id}`)} />
                </div>
                <div className="option_header_section">
                    <h1 onClick={() => navi('/production')}><FaStore className='search_icons' /> About E-wala</h1>
                    <h1><span className="span_profile">{first}</span><Select options={option} placeholder="Logout" onChange={SelectHandler} /> </h1>
                    <h1 onClick={() => navi(`/card/${data._id}`)}><AiOutlineShoppingCart className='search_icons' /><p className={`${lengthData?.error ? "lengthData" : "p"}`}>{lengthData?.error ? "" : lengthData?.mess}</p> Cart</h1>
                    <h1 onClick={DotHandler}><BsThreeDotsVertical className='search_icons' /></h1>
                </div>
                {
                    dotaHan && <div className='profile_dekstop'>
                        <div className="profile_box_section">
                            <div className="profile_img_section_name">{first}</div>
                            <h2>{data?.firstName} {data?.lastName}</h2>
                            <p>{data?.email}</p>
                            <p>Mobile number : {data?.number}</p>
                        </div>
                    </div>
                }
            </header>

        </>
    )
}

export default Header2;