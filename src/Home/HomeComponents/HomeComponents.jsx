import React, { useRef, useState, useEffect } from 'react'
import './HomeComponents.scss';
import axios from 'axios';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
const HomeComponents = () => {
    const carouselContainer = useRef();
    const URL = `http://localhost:3000/home1`;
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
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
    }, []);
    // http://localhost:3000/home1
    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }
    return (
        <>
            <div className="home_corsel_section" >
                <button onClick={() => navigation("left")}><FaAnglesLeft /></button>
                {
                    loading ? "loading..." : <div className="carsouelItems" ref={carouselContainer}>
                        {
                            data?.img_Banner.map((e, index) => {
                                return (
                                    <img src={e} alt="" key={index} />
                                )
                            })
                        }
                    </div>
                }

                <button onClick={() => navigation("right")}><FaAnglesRight /></button>
            </div>
        </>
    )
}

export default HomeComponents;