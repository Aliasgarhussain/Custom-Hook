import { useEffect, useState} from "react";

function useFetch (url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
            setLoading(false)
        }

        getData()
    }, [])

    return [data, loading]
}

export default useFetch