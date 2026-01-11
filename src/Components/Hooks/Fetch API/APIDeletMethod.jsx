import React, { useEffect, useState } from 'react'

function APIDeletMethod() {
    // state to store mock data
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // fetch mock data from the JSONplaceholder API
    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) {
                throw new Error("Network response was not ok.");

            }
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    // Initial data fetch on component mount
    useEffect(() => {
        fetchData();
    }, []);

    // Delete post based on its id.
    const deletePost = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response not ok.")
                }
                return response.json();
            })
            .then(() => {
                // Remove the deleted post form the data array
                setData(data.filter((post) => post.id !== postId));
            })
            .catch((error) => console.error("Error in delete post: ", error));
    }
    return (
        <div>
            <h1>Practice of fetchAPI Delete Method in React!</h1>
            {
                loading ? (
                    <p>Loading Data ...</p>
                ) :

                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((post, index) => (
                                    <tr key={post.id}>
                                        <td>{post.id} </td>
                                        <td>{post.title} </td>
                                        <td> <button className='btn btn-danger btn-sm' onClick={() => deletePost(post.id)}>Delete Post</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default APIDeletMethod
