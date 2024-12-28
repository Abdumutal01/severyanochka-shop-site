import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [state, setState] = useState({ data: [], loading: true, error: null });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                const json = await res.json();
                setState({ data: json, loading: false, error: null });
            } catch (error) {
                setState({ data: [], loading: false, error: error.message });
            }
        };

        fetchData();
    }, [url]);

    return state;
}
