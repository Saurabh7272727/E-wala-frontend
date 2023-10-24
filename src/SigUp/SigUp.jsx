import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './SigUp.scss';
import { useNavigate } from 'react-router-dom';
const SigUp = () => {
    const [statet, setStatet] = useState(true);
    const [number, setNumber] = useState();
    const navi = useNavigate();
    const InputHandler = (e) => {
        if (e.target.value.length == 10) {
            setNumber(e.target.value);
            setStatet(false);
        } else {
            setStatet(true);
        }
    }
    return (
        <>
            <div className="sigup_page_main">
                <div className="left_section_of_sigup_page">
                    <h2>Looks like you're new here!</h2><br />
                    <p>Sign up with your mobile number to get started</p>
                    <img src="https://img.freepik.com/free-photo/online-fashion-shopping-with-smartphone_23-2150400580.jpg?w=1380&t=st=1697649445~exp=1697650045~hmac=160146a7fe4968eeef43cf78bd031aab1bf0c8964755ff32273e26069abb87a7" alt="" />
                </div>
                <div className="right_section_of_sign_page">
                    <form>
                        <input type="number" onChange={InputHandler} placeholder='Enter Mobile number' required />
                        <br /><br />
                        <p>By continuing you agree to Filpkart's <a href="">Terms</a> of Use and <a href="">Privacy</a> Policy</p><br />
                        {statet ? <p style={{ color: "blue" }}>Welcome your Flipkart</p> : <button onClick={() => navi(`/sigup/${number}`)} className='button_main'>CONTINUE</button>}
                    </form>
                    <div className='login_page_navi'>
                        <button onClick={() => navi(`/login`)} className='login_button_page_navi'>Existing User?Log in</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SigUp;