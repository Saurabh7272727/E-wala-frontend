import React from 'react'
import './Data.scss';
import { useNavigate } from 'react-router-dom';
const Data = ({ data, loading }) => {
    const navi = useNavigate();

    return (
        <>
            {
                loading ? <div className='loadding_page_products'><h1>Loading...</h1></div> : <div className='products_box_section'>
                    {
                        data?.map((e, index) => {
                            return (
                                <div className='products_boxes_main' key={index} onClick={() => navi(`/typedata/${e.type}`)}>
                                    <img src={e?.img} alt="" />
                                    <h1>{e?.title}</h1>
                                    <p>{
                                        e?.price ? `Price : ${e?.price}` : ''
                                    }
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>

    )
}

export default Data;