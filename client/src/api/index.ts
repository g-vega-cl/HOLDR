import axios from 'axios';

const url = 'http://localhost:5000/tutorial';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost: any) => axios.post(url,newPost);
export const updatePost = (id: any, updatedPost: any) => axios.patch(`${url}/${id}`,updatedPost);
export const deletePost = (id: String) => axios.delete(`${url}/${id}`);