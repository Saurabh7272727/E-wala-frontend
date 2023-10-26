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
            <div className="orderListSection_pro_main">
                {
                    loading ? <div className='loading_setup_orders'><h2>Loading.....</h2></div> : <div>
                        {
                            dataList?.length === 0 ? <div className='no_items_found'>
                                <img src="https://cdn.dribbble.com/users/2370289/screenshots/6150406/no_items_found_1x.jpg" alt="" />
                            </div> : <div className='hshjdashjahj'>
                                {
                                    dataList?.map((e, index) => {
                                        return (
                                            <div key={index} className='main_order_list'>
                                                <div className="about_information_orders">
                                                    <h3>{e?.account_id}</h3>
                                                    <h3>{e?.mal?.title}</h3>
                                                    <h4>Quantity - {e?.qunatity}</h4>
                                                    <p>Transition Id - {e?._id}</p>
                                                    <h3>Total pay - {e?.total_amount}</h3>
                                                    <p style={{ color: "green" }}><PiHandsClapping /> Comfirm order</p>
                                                </div>
                                                <form action="http://localhost:3000/deleteOrder" method='post'>
                                                    <input type="text" name='id' value={e?._id} />
                                                    <button type='submit'>Cancel</button>
                                                </form>
                                                <img src={e?.mal?.poster_img} alt="" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default OrderList;