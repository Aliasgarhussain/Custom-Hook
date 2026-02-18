import useFetch from "../hooks/useFetch";

function Photos() {
    const [data, loading] = useFetch("https://picsum.photos/v2/list?limit=400")

    if (loading) {
        return <h2>Loading.....</h2>
    }

    return (
        <div>
            <h1 className="heading">Products</h1>
            <div className="grid">
                {data.map((item) => (
                <div key = {item.id} className="card">
                    <img src = {item.download_url} />
                    <p>{item.author}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Photos