import { useState, useEffect } from 'react';
import axios from 'axios';



const fetchApiLength = (url) => {
    const [lengthData, setLengthData] = useState();
    const [lengthLoading, setLengthLoading] = useState(true);
    const URL = `http://localhost:3000/length/`;
    const fetchData = async () => {
        await axios.get(URL + url, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            return res;
        }).then((e) => {
            setLengthData(e.data);
            setLengthLoading(false);
        })
    }
    useEffect(() => {
        fetchData();
    }, [url]);


    return { lengthData, lengthLoading };



}

export default fetchApiLength;