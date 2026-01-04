import React, { useEffect, useState } from 'react'

function APIGetMethod() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((respons) => {
                console.log(respons);
                if (!respons.ok) {
                    throw new Error("Network response was not ok.");

                }
                return respons.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                console.log(data);
            })
            .catch((error) => console.log("error: " + error));
    }, []);

    return (
        <div className='col-md-8 offset-md-3'>
            <h1>API GET Method</h1>
            {
                isLoading ? (
                    <p>Loading...</p>
                ) :
                    <table className='table bordered table-striped  table-dark table-hover '>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>

            }
        </div>
    )
}

export default APIGetMethod
