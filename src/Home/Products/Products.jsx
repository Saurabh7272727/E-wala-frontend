import React, { useState, useEffect } from 'react'
import './Products.scss';
import Data from '../../Data/Data';
import axios from "axios";
const Products = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const URL = `http://localhost:3000/products`;
    const fetchApi = async (url) => {
        await axios?.get(URL + url, {
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
        fetchApi(`/electronics`);
    }, []);

    return (
        <>
            <div className="products_section_main">
                <Data data={data} loading={loading} />
            </div>
        </>
    )
}

export default Products;