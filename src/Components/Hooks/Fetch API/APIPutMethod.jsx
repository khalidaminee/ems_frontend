import React, { useEffect, useState } from 'react'

function APIPutMethod() {
    const [postData, setPostData] = useState({
        id: "1",
        title: "",
        body: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value,
        })
    }

    useEffect(() => {
        const postId = postData.id;
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

        // send the Put (update) request
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setPostData(data);
                console.log(data);

            })
            .catch((error) => {
                console.error("Erros: ", error);
            });

    }, [postData.id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const apiURL = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),

        };
        // send the Put (update) request
        fetch(apiURL, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                // setPostData(data);
                setMessage("Post updated succesfully!");
                console.log(data);

            })
            .catch((error) => {
                console.error("Erros: ", error);
                setMessage("Error in updating the post");
            })
            .finally(() => {
                setLoading(false);
                setTimeout(messageTimeOut, 5000);
            });
    }
    const messageTimeOut = () => {
        setMessage("");
    }

    return (
        <div>
            <h1>Practice of fectchAPI POST method  in react.</h1>
            {loading && <p>Loading...</p>}
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={postData.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea name="body" value={postData.body} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default APIPutMethod
