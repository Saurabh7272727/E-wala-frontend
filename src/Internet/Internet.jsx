import React, { useState, useEffect, useRef } from 'react'
import './Internet.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowsFullscreen } from "react-icons/bs";



const Internet = () => {

    const [searchData, setSearchData] = useState();
    const [searchDataLaoding, setSearchDataLaoding] = useState(true);
    const [hidden, setHidden] = useState(false);
    // state mangement;

    const [inputData, setInputdata] = useState();
    const [clickData, setClickData] = useState("help");
    const ArrayData = [];
    let num = 0;
    const URL = `http://localhost:3000/googleAi/${clickData}`;

    const fetchApi = async () => {
        setSearchDataLaoding(true);
        await axios?.get(URL, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })?.then((res) => {
            return res;
        })?.then((e) => {
            setSearchData(e?.data);
            setSearchDataLaoding(false);
        })?.catch((error) => {
            setSearchDataError(error);
        })
    }
    useEffect(() => {
        fetchApi();
    }, [clickData]);

    const ClickButtonFunction = (items) => {
        setClickData(inputData);
    }
    ArrayData[num] = "Welcome to Ai part of E-commerce"
    ArrayData.push(clickData);
    num++;


    return (
        <>
            <div className="inter_main_head">
                {
                    searchDataLaoding ? <div className='output_section'>Search Data ...........</div> : <div className={hidden ? "output_section_modi" : "output_section"}><pre>{searchData?.data}</pre><button onClick={() => { setHidden(!hidden) }}><BsArrowsFullscreen /></button></div>
                }
                <div className={hidden ? "message_box_hidden" : "message_box"}>
                    <div className="lastMessage">{ArrayData.map((data, index) => {
                        return (<li key={index}>{data} </li>)
                    })}</div>
                    <img src="https://th.bing.com/th/id/OIP.bvIZbJsPRehoaWST9wo4bAHaHa?w=191&h=191&c=7&r=0&o=5&pid=1.7" alt="R_my_love" />
                    <div className="input_question_box">
                        <input type="text" placeholder='Search anything?.....' onChange={(e) => { setInputdata(e.target.value) }} />
                        <button onClick={() => ClickButtonFunction(inputData)}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Internet;