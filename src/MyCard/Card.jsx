import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Card.scss';
const Card = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const URL = `http://localhost:3000/cart/${id}`;
    const [under, setUnder] = useState(true);
    const [showData, setShowData] = useState(false);
    const [pageSection, setPageSection] = useState(false);
    const [pageedit, setPagedelete] = useState(true);
    const [counter, setCounter] = useState(1);
    const [productsID, setProductsID] = useState(null);
    const navi = useNavigate();
    const fetchApi = async () => {
        await axios?.get(URL, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })?.then((res) => {
            return res;
        }).then((e) => {
            setData(e?.data);
            setLoading(false);
        })
    }
    useEffect(() => {
        fetchApi();
    }, [data])

    const useLinkClickHandler = (tab) => {
        if (tab == 'grocery') {
            setShowData(true);
            setUnder(false);
            setPageSection(false);
        } else {
            setUnder(true);
            setShowData(false);

        }
    }

    const EditDelectHandler = (data, tab) => {
        switch (data) {
            case 'edit':
                setPageSection(true);
                setPagedelete(true)
                setProductsID(tab);
                break;
            default:
                setPageSection(true);
                setPagedelete(false);
                setProductsID(tab);
                break;
        }
    }
    return (
        <>
            {
                loading ? <div className='card_loading_section'><div class="loader"></div></div> : <div className="card_section_main">
                    <div className="card_headers_section">
                        <h2 className={`${under ? "newh2" : "h2"}`} onClick={() => useLinkClickHandler("flipkart")}>Flipkart</h2> <h2 className={`${under ? "h2" : "newh2"}`} onClick={() => useLinkClickHandler("grocery")}>Grocery</h2>
                    </div>
                    {
                        pageSection ? <div className='page_section_edit_delect'>
                            <p style={{ color: "red" }} onClick={() => setPageSection(false)}>Cancel</p>
                            {
                                pageedit ? <div className='edit_page_main_section'>
                                    <button onClick={() => setCounter(counter - 1)}>-</button><button onClick={() => setCounter(counter + 1)}>+</button>
                                    <form action={`http://localhost:3000/edit/carditems`} method='post'>
                                        <input style={{ display: "none" }} type="text" value={productsID} name='id' />
                                        <input type="number" value={counter} name='quantity' />
                                        <button type='submit'>Save</button>
                                    </form>
                                </div> : <div className='edit_page_main_section'>
                                    <form action="" method='post'>
                                        <input type="text" value={productsID} name='id' />
                                        <button type='submit'>Delect</button>
                                    </form>
                                </div>
                            }
                        </div> : ""
                    }
                    {
                        showData ? <div className='grocery_section_main'>g</div> : <div className='flipkart_main_section_card'>
                            {
                                data?.map((e, index) => {
                                    return <div className='card_products_add_to_card' key={index}>

                                        <div className="img_section_card_id">
                                            <img src={e?.poster_img[0]?.poster_img} alt="" onClick={() => navi(`/detailspage/${e.products_id}`)} />
                                        </div>
                                        <div className="details_abou_products_section">
                                            <h2 onClick={() => navi(`/detailspage/${e.products_id}`)}>{e?.poster_img[0]?.title}</h2><br />
                                            <h2>{e.poster_img[0].price}</h2><br />
                                            <h2>Qunatity : {e?.quantity}</h2>
                                            <ul>
                                                {
                                                    e?.poster_img[0].high_lights?.map((e, index) => {
                                                        return <li key={index}>{e}</li>
                                                    })
                                                }
                                            </ul>
                                            <div className="about_card_button">
                                                <h3>{e?.poster_img[0]?.description}</h3>
                                                <div className="button_collection_card">
                                                    <button onClick={() => EditDelectHandler('edit', e?._id)} style={{ backgroundColor: "rgb(68, 68, 183)" }}>Edit</button>
                                                    <form action="http://localhost:3000/delete/carditems" method='post' onSubmit={() => window.location.reload()}>
                                                        <input type="text" value={e?._id} name='id' />
                                                        <button style={{ backgroundColor: "red" }} type='submit'>Delect</button>
                                                    </form>
                                                    <button style={{ backgroundColor: "orangered" }}>Buy</button>
                                                </div>
                                            </div>
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

export default Card;