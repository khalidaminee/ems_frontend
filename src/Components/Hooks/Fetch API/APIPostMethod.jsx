import React, { useState } from 'react'

function APIPostMethod() {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiURl = "https://jsonplaceholder.typicode.com/posts";
        // Create the request object
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }
        // Send the post request 
        fetch(apiURl, requestOptions)
            .then((respnose) => respnose.json())
            .then((data) => {
                // handle the response data
                console.log("Response Data: ", data);
            })
            .catch((error) => console.error("Error: ", error))
    };

    return (
        <div className='text-center'>
            <h1>React Fectch API using POST Method.</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' value={formData.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea name="body" value={formData.body} onChange={handleChange} />
                </div>
                <button type="submit">Submit Form</button>
            </form>

        </div>
    )
}

export default APIPostMethod
