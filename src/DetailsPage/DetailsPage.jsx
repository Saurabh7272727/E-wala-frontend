import React, { useState, useEffect } from 'react'
import './DetailsPage.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FcApproval } from 'react-icons/fc';
import DupfetchApi from '../Server/Server.jsx';

const DetailsPage = ({ datas, loadings }) => {
    const { id } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [imgChanger, setImgChanger] = useState();
    const [time, setTime] = useState(false);
    const [main, setMain] = useState(null);
    const [products, setProducts] = useState(null);
    const URL = `http://localhost:3000/detailspage/${id}`;
    const fetchApi = async () => {
        await axios.get(URL, {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        }).then((res) => {
            return res;
        }).then((e) => {
            setData(e.data);
            setLoading(false);
        })
    }
    const { dupData, DupLoading } = DupfetchApi(`${datas?._id}/${id}`);

    useEffect(() => {
        fetchApi();
    }, []);


    setTimeout(() => {
        setTime(false);
    }, 2000);
    return (
        <>
            {
                loading ? <div className='loading_details'><div className="loader"></div></div> :
                    <div className="detailsPage_section">
                        <div className="img_details_section">
                            <div className="left_img_section_details_page">
                                {
                                    data?.img?.map((e, index) => {
                                        return (
                                            <img key={index} src={e} onClick={() => setImgChanger(e)}></img>
                                        )
                                    })
                                }
                            </div>
                            <div className="right_img_sectio_details">
                                <img src={imgChanger || data?.poster_img} alt="" />
                            </div>
                        </div>
                        <div className="details_page_abou_page_products">
                            <h1>{data?.title}</h1>
                            <p>{data?.description}</p><br />
                            <h2>Special Price</h2>
                            <h1>{data?.price}</h1>
                            <br /><br />
                            <h2>Available offers</h2>
                            <ul>
                                {data?.bank_discount.map((e, index) => {
                                    return (
                                        <li key={index}><FcApproval /> {e}</li>
                                    )
                                })}
                            </ul><br />
                            {
                                datas ? <div className='add_cart_function_details'>
                                    <button>Buy Now</button>
                                    {
                                        dupData?.error ? <form action={`http://localhost:3000/addtocart`} method='post'>
                                            <input type="text" value={datas?._id} name='account' />
                                            <input type="text" value={data?._id} name='product' />
                                            <button type='submit'>Add To Cart</button>
                                        </form> : <button style={{ backgroundColor: 'white', color: "red", fontWeight: '500' }}>Added in wallet</button>
                                    }
                                </div> : <div className='add_cart_function_details'>
                                    <button onClick={() => alert("You have not account")}>Buy Now</button><button onClick={() => alert("You have not account")}>Add to Cart</button>
                                </div>
                            }
                            <img src={data?.company_img} alt="company" />
                            <div className="hightlight_section_of_details_page">
                                <h2>Highlight of product</h2>
                                <ul>
                                    {
                                        data?.high_lights.map((e, index) => {
                                            return (
                                                <li key={index}>{e}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <h2>In-Box </h2>
                            <p>{data?.in_box}</p>
                        </div>
                    </div>
            }
        </>
    )
}

export default DetailsPage;
