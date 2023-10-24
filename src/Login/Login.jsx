import React, { useState, useEffect } from 'react'
import './Login.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [number, setNumber] = useState();
    const [password, setPassword] = useState();
    const [number1, setNumber1] = useState();
    const [password1, setPassword1] = useState();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const navi = useNavigate();
    const URL = `http://localhost:3000/login/${number1}/${password1}`

    const ClickHandler = () => {
        setNumber1(number);
        setPassword1(password);
        // localStorage.setItem('password1', password1);
        // localStorage.setItem('number1', number1);
    }
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
    }, [password1]);
    console.log(data);

    const ComformHandler = () => {
        navi('/');
        window.location.reload();
        alert("Login successfully ")
    }
    return (
        <>
            <div className="main_login_page_section">
                <div className="login_box_section_login">
                    <div className='form'>
                        <input type="number" name='number' onChange={(e) => setNumber(e.target.value)} placeholder='Enter your mobile number' required />
                        <input type="number" name='password' onChange={(e) => setPassword(e.target.value)} placeholder='enter your password' required />
                        {
                            loading ? "Loading..." : <button onClick={ClickHandler}>Login</button>
                        }
                        {
                            data?.error ? <p style={{ color: "red", fontSize: "18px" }}>password wrong</p> : ""
                        }
                    </div>
                    <div className="extra_feature_section">
                        <p><a href="">Forget password?</a></p>
                        <button onClick={() => navi(`/sigup`)}>Create Account</button>
                    </div>
                </div>
                {
                    data?.firstName ? <div className='check_your_id'>
                        <div className="middle_section_login_page">
                            <h2>To</h2>
                            <h3>thanks</h3><br />
                            <h1>{data?.email}</h1><br />
                            <p>{data?._id}</p>
                            <br /><br />
                            <button onClick={ComformHandler}>Next</button>
                            {/* navi(`/`) */}
                        </div>
                    </div> : ""
                }
            </div>

        </>
    )
}

export default Login;