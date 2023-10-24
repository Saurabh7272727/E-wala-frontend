import React from 'react'
import './Logout.scss';
import { useParams } from 'react-router-dom';

const Logout = () => {
    const { id } = useParams();
    return (
        <>
            <div className="logout_section_page">
                <div className="main_logout_page">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="" />
                    <form action='http://localhost:3000/logout' method='post'>
                        <input type="text" value={id} name='id' />
                        <p style={{ color: "red" }}>Click in Ok button then Logout</p><br /><br />
                        <button onClick={() => window.location.reload}>Ok</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Logout;