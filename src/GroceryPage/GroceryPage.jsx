import React, { useState, useEffect } from 'react'
import "./GroceryPage.scss";
import { useParams } from 'react-router-dom';
import axios from 'axios';
const GroceryPage = () => {
    const { query } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const URL = `http://localhost:3000/grocerymobile`;
    const [overView, setOverView] = useState(false);
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
    }, [])
    return (
        <>
            <div className="grocery_page_section_side">
                <div className="grocery_check_section">
                    <div className="img_section_production">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8b3cccc8091bf789.jpg?q=20" alt="" />
                    </div>
                    {/* kaya_section_main_boxes */}
                    {
                        loading ? <div className='loading_section_of_grocery'>Loading....</div> : <div className='main_production_box_grocery'>
                            {

                                data.map((e, index) => {
                                    return (
                                        <div className={`${overView ? "" : "kaya_section_main_boxes"}`} key={index} onClick={() => setOverView(!overView)}>
                                            <div className="main_about_products_grocery" >
                                                <h1>{e?.title}</h1>
                                                <h2>Price : {e?.price}</h2>
                                                <p>{e?.description}</p>
                                                <p>Overview - {e?.rating}</p>
                                            </div>
                                            <img src={e?.thumbnail} alt="" />
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

export default GroceryPage