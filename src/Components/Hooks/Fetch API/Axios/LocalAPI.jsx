// API

import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/";
const axiosInstance = axios.create({
    baseURL: baseUrl,
});
// Get request
export const getPosts = () => {
    return axiosInstance.get("/posts");
}

// Post resquest
export const createPost = (postData) => {
    return axiosInstance.post("/posts", postData);
}

// Put request

export const updatePost = (postId, updateData) => {
    return axiosInstance.put(`/posts/${postId}`, updateData);
}

// Delete request

export const deletePost = (postId) => {
    return axiosInstance.delete(`/posts/${postId}`);
}