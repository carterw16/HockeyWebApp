import { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = (endpoint, params={}) => {
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [state, setState] = useState({data: null,error: null,loading: true})

    const fetchData = async (params) => {
        setState({...state, loading: true});
        try {
            params["url"] = process.env.REACT_APP_BACKEND_URL + "/" + endpoint
            const res = await axios.request(params);
            setState({data: res.data, error: null, loading: false});
        } catch (err) {
            setState({...state, error: err, loading: false});
        }
    };

    useEffect(() => {
        fetchData(params);
    }, []);

    return state;
};

export default useAxios;