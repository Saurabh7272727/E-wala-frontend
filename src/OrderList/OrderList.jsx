import React, { useState, useEffect } from 'react'
import './OrderList.scss';
import axios from 'axios';
import { PiHandsClapping } from 'react-icons/pi';
const OrderList = ({ datas, loadings }) => {
    const [dataList, setData] = useState();
    const [loading, setLoading] = useState(true);

    const URL = `http://localhost:3000/orderList/${datas?.ip}`;
    const fetchApi = async () => {
        await axios.get(URL, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
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
    }, [datas?.ip]);
    console.log(dataList);
    return (
        <>
            {
                loading ? <div className='loading_section_order_list'><h2>Loading.....</h2></div> : <div className='order_list_main_page_box'>
                    {
                        dataList.length == 0 ? <div className='no_items_found_img'><img src="https://cdn.dribbble.com/users/2370289/screenshots/6150406/no_items_found.jpg" alt="" /></div> : <div className='result_of_products_list'>
                            {
                                dataList.map((e, index) => {
                                    return <div className='simple_site' key={index}>
                                        <img src={e?.mal?.poster_img} alt="ggg" />
                                        <div className="about_products_details_section">
                                            <h1>{e?.mal?.title}</h1><br />
                                            <h3>Price : {e?.mal?.price}</h3><br />
                                            <h1 style={{ textDecoration: "underline" }}>In - box</h1><br />
                                            <h3>{e?.mal?.in_box}</h3>
                                            <br />
                                            <h3 style={{ color: "green" }}><PiHandsClapping /> Order Comfirm</h3>
                                        </div>
                                        <div className="payment_well_section">
                                            <h3>{e?.email}</h3>
                                            <h3>Transition : ok</h3>
                                            <br />
                                            <h3>Quantity : {e?.qunatity}</h3>
                                            <h3 style={{ color: "red" }}>Total Amount : {e?.total_amount}</h3>
                                            <br />
                                            <h3>Check a products id on delivery time</h3>
                                            <h3>Product Id : {e?.product_id}</h3><br />
                                            <form action="http://localhost:3000/deleteOrder" method='post'>
                                                <input style={{ display: "none" }} type="text" name='id' value={e?._id} />
                                                <button type='submit'>Cancel</button>
                                            </form>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    }
                </div>
            }

        </>
    )
}

export default OrderList;