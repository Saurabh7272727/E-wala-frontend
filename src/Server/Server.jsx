import axios from 'axios';
import { useState, useEffect } from 'react';


const DupfetchApi = (url) => {
    const [dupData, setDupdata] = useState();
    const [DupLoading, setDupLoading] = useState(true);

    const URL = `http://localhost:3000/duplicateHandlers/`;
    const fetchNewApi = async () => {
        await axios.get(URL + url, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            return res;
        }).then((e) => {
            setDupdata(e.data);
            setDupLoading(false);
        })
    }
    useEffect(() => {
        fetchNewApi();
    }, [url]);

    return { dupData, DupLoading };
}


export default DupfetchApi;