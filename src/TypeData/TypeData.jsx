import React, { useState, useEffect } from 'react'
import './TypeData.scss';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import DupfetchApi from '../Server/Server.jsx';
const TypeData = ({ datas, loadings }) => {
    const { type } = useParams();
    const URL = `http://localhost:3000/productsPage/${type}`;
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const navi = useNavigate();
    const fetchApi = async () => {
        await axios.get(URL, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((res) => {
            return res;
        }).then((e) => {
            setData(e.data);
            setLoading(false);
        })
    }
    useEffect(() => {
        fetchApi();
    }, [])
    // const { dupData, DupLoading } = DupfetchApi();
    return (
        <>
            <div className="type_main_section">
                <div className="left_section_main_typeData"></div>
                <div className="right_section_main_typeData">
                    <div className="header_type_page_section">
                        <h3>{datas?.email}</h3>
                        {
                            datas ? <h1 style={{ color: "white" }}>status : Logged</h1> : <h1 style={{ color: "red" }}>status : Not Login</h1>
                        }
                    </div>
                    {
                        loading ? <div className='loading_section_main_main'>
                            <div className="child_of_loading_section"></div>
                        </div> : <div>
                            {
                                data?.map((e, index) => {
                                    return (
                                        <div className='products_box_in_section' key={index}>
                                            <img src={e?.poster_img} alt="" onClick={() => navi(`/detailspage/${e?._id}`)} />
                                            <div className="details_abou_products">
                                                <h1 onClick={() => navi(`/detailspage/${e?._id}`)}>{e?.title}</h1>
                                                <ul>
                                                    {e.high_lights.map((e, index) => {
                                                        return (
                                                            <li key={index}>{e}</li>
                                                        )
                                                    })}
                                                </ul>
                                                <h1>Price {e?.price}</h1>
                                                {
                                                    datas ? <button type='submit'>Buy</button>
                                                        : <button onClick={() => navi('/sigup')}>Login </button>
                                                }

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default TypeData;