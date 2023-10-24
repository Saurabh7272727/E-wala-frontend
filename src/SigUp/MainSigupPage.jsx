import React from 'react'
import './MainSigupPage.scss';
import { useParams } from 'react-router-dom';
const MainSigupPage = () => {
    const { number } = useParams();
    return (
        <>
            <div className="main_sigup_page">
                <div className="left_section_main_page">
                    <img src="https://img.freepik.com/free-vector/application-smartphone-mobile-computer-payments-online-transaction-shopping-online-process-smartphone-vecter-cartoon-illustration-isometric-design_1150-62457.jpg?w=900&t=st=1697689214~exp=1697689814~hmac=ac477982e8dd2d6d2a16d3f04b5a4bd665f0b176377ce69749bf5480c9af93c6" alt="" />
                </div>
                <div className="right_section_main_page">
                    <form action='http://localhost:3000/sigup' method='post'>
                        <input type="text" name='firstName' placeholder='first name ' required />
                        <input type="text" name='lastName' placeholder='last name ' required />
                        <input type="number" name='number' value={number} required />
                        <input type="email" name='email' placeholder='enter your email' required />
                        <input type="number" name='password' placeholder='enter your password' required />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MainSigupPage;