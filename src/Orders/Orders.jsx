import React, { useState, useEffect } from 'react'
import './Orders.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CgRadioChecked } from 'react-icons/cg';
const Orders = ({ datas, loadings }) => {
    const { id, num } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(num || 1);

    const [amountChanger, setAmounteChanger] = useState();
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

    useEffect(() => {
        fetchApi();
    }, []);

    const useLinkClickHandler = (tab) => {
        switch (tab) {
            case "+":
                setCounter(counter + 1);
                break;
            case "-":
                if (counter <= 1) {
                    setCounter(1);
                } else {
                    setCounter(counter - 1);
                }
                break;
        }
    }
    return (
        <>
            <div className="orders_section_main_container">
                <div className="details_abouts_section_products">
                    {
                        loading ? <div className='loading_oders_section'>Loading.....</div> : <div className='products_box'>
                            <img src={data?.poster_img} alt="" />
                            <div className="products_about_box_container">
                                <h2>{data?.title}</h2>
                                <p>Price : {data?.price}</p>
                            </div>
                        </div>
                    }
                    <div className="amount_counter_section">
                        <button onClick={() => useLinkClickHandler("+")}>+</button> <button style={{ backgroundColor: "white", color: "black" }}>{counter}</button><button onClick={() => useLinkClickHandler("-")}>-</button>
                    </div>
                    <div className="discounter_box_center">

                        <ul>
                            {
                                data?.bank_discount?.map((e, index) => {
                                    return (
                                        <><li >{e}</li><input type="checkbox" name='discount' value="1200" onChange={(e) => setAmounteChanger(e.target.value)} /></>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
                <div className="amount_section_orders_section">
                    <h2>PRICE DETAILS</h2><br /><br />
                    <h3><span>Price</span> <span>{data?.price}</span></h3>
                    <h3><span>Discount</span> <span> {-amountChanger || "check offers"}</span></h3>
                    <h3><span>Delivery Charges</span> <span><del>40 Free</del></span></h3>
                    <h3><span>Total Amount</span> <span> {data?.price * counter - amountChanger || data?.price}</span></h3>
                    <h3 style={{ color: "red" }}><span>You save on </span><span>{amountChanger * counter || "No data"}</span></h3>
                </div>
                <div className="orders_slip_by_e_wala">
                    <form action='http://localhost:3000/ordersCompleted' method='post'>
                        <input type="text" name='name' value={datas?.firstName + " " + datas?.lastName + " " + datas?.number} />
                        <input type="password" name='password' value={datas?.password} />
                        <input type="email" name='email' value={datas?.email} />
                        <input type="number" name='qunatity' value={counter} />
                        <input type="text" name='netprice' value={"Price" + " " + data?.price} />
                        <input type="text" name='account_id' value={datas?._id} />
                        <input type="text" name='product_id' value={id} />
                        <label htmlFor="amount">Discount</label>
                        <input type="number" name='discount_amount' value={amountChanger} id='amount' />
                        <label htmlFor="amount">Total Amount</label>
                        <input type="number" name='total_amount' value={counter * data?.price - amountChanger || data?.price} id='amount' />
                        <button type='submit'>Order </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Orders;