import { useEffect, useState } from "react"

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
                <div className ="card" >
                    <h1>{post.title}</h1>
                    <img src={post.images[0]}></img>
                    <p>{post.description}</p>
                    <p>price: ₱ {post.price}</p>
                    <p>discount {post.discountpercentage} % </p>
                </div>
            )}
        </div>

    )
}

export default Home