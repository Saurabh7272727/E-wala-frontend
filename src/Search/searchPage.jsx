import React, { useState, useEffect, useRef } from 'react'
import "./searchPage.scss";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SearchPage = ({ data, loadings }) => {
    const { search } = useParams();
    const [searchData, setSearchData] = useState();
    const [searchError, setSearchError] = useState();
    const Navi = useNavigate();

    const URL = `http://localhost:3000/search/${search}`;

    const fetchApi = async () => {
        await axios?.get(URL, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })?.then((res) => {
            return res;
        })?.then((e) => {
            setSearchData(e?.data);

        })?.catch((error) => {
            setSearchError(error);
        })
    }
    useEffect(() => {
        fetchApi();
    }, [search]);

    console.log(searchData);

    return (
        <>
            <section>
                <div className="search_box">
                    {
                        searchData?.length == 0 ? <img src="https://i.pinimg.com/originals/4a/2b/e7/4a2be73b1e2efb44355436c40bf496dd.png" alt="My life long one side love , emotion" /> :
                            <div className='search_list_section'>{searchData?.map((data, index) => {
                                return (
                                    <div className="list" key={index} onClick={() => Navi(`/detailspage/${data?._id}`)}>
                                        <img src={data?.poster_img} alt="" /><br />
                                        <p>Price - {data?.price}</p>
                                    </div>
                                )
                            })}</div>
                    }
                </div>
                <div className="introduction_page">
                    <h4>Hi ,{data?.firstName} {data?.lastName}</h4><br />
                    <h3>Email - {data?.email}</h3><br />
                    <img src="https://knocard.app/static/images/search_image.png" alt="" />
                    <br />
                    <p>
                        There are you searched a product to buy and add cart section.
                        <br />
                        status - {data?.ip}XXXXXXXXXXX
                    </p><br />
                    <p style={{ color: "red" }}>{searchData?.length == 0 ? <p>Not found</p> : <p>Results E-Wala</p>}__ {search} </p>
                </div>
            </section>
        </>

    )
}
// /detailspage/:id
export default SearchPage;