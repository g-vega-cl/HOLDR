import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

//function that happens on each request.
//Send the token to the backend so the backend can verify if we are logged in.
const u = {
    token: ""
}
API.interceptors.request.use((req: any) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile') || JSON.stringify(u)).token
    }`;
    }

    return req;
}) 

export const fetchPosts = () => API.get('/tutorial');
export const createPost = (newPost: any) => API.post('/tutorial',newPost);
export const updatePost = (id: any, updatedPost: any) => API.patch(`/tutorial}/${id}`,updatedPost);
export const deletePost = (id: String) => API.delete(`/tutorial/${id}`);

export const signIn = (formData: any) => API.post('/users/signin', formData);
export const signUp = (formData: any) => API.post('/users/signup', formData);

export const fetchTransactions = () => API.get('/payment');
export const createTransaction = (newTransaction: any) => API.post('/payment', newTransaction);