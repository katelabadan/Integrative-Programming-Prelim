import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Home() {

    const [posts, setPost] = useState([])


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(async res => await res.json())
            .then(data => setPost(data.products))
    }, [])


    return (
        <div className='container'>
            {posts.map((post, i) =>
                <ProductCard post={post}></ProductCard>   
                
            )}
        </div>

    )
}

export default Home