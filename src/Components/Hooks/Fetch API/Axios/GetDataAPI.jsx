import React, { useEffect, useState } from 'react'
import { createPost, deletePost, getPosts, updatePost } from './LocalAPI'

function GetDataAPI() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: "", body: "" })

    // Get Request
    useEffect(() => {
        getPosts().then((response) => {
            setPosts(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.error("Error in fetching data: ", error);
        });

    }, []);

    const handleCreatePost = () => {
        createPost(newPost)
            .then((response) => {
                setPosts([...posts, response.data]);
                console.log(newPost);
                setNewPost({ title: "", body: "" });
            })
            .catch((error) => console.error("Error in creating a post.", error));
    }

    const handleUpdatePost = (postId, postData) => {
        updatePost(postId, postData)
            .then((response) => {
                const updatedPostData = posts.map((post) => post.id === postId ? response.data : post);
                setPosts(updatedPostData);
                console.log(updatedPostData);

            })
            .catch((error) => console.error("Error in updating the post: ", error));


    }

    const handleDeletePost = (postId) => {
        deletePost(postId)
            .then(() => {
                const newUpdatedPosts = posts.filter((post) => post.id !== postId);
                setPosts(newUpdatedPosts);
                console.log("post deleted with with id: ", postId);
            })
            .catch((error) => console.error("Error in deleting the post.", error));
    }
    return (
        <div>
            <h1>Practice of Axios http methods in react.</h1>
            <div>
                <h2>Create a Post</h2>
                <input type="text"
                    placeholder='Title'
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
                <input type="text"
                    placeholder='body'
                    value={newPost.body}
                    onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                />
                <button onClick={handleCreatePost}>Create</button>
            </div>
            <div>
                <ul >
                    {
                        posts.map((post) => (
                            <li key={post.id}>
                                <h2>{post.title} </h2>
                                <p>{post.body}</p>
                                <button onClick={() => handleUpdatePost(post.id, {
                                    title: "updated Title",
                                    body: "updated body",
                                })
                                }>Update</button>
                                <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default GetDataAPI
