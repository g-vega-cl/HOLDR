import {FETCH_ALL, CREATE, UPDATE, DELETE} from 'constants/actionTypes';

import * as api from "../api";

// Action Creators

//dispatch is from redux-thunk
export const getPosts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts();
    console.log("FETCH ALL POST ACTION", data );
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
      console.log(error);
  }
};

export const createPost = (post: any) => async(dispatch:any) =>{
  try{
    const {data} = await api.createPost(post);
    dispatch({type: CREATE, payload: data});
  } catch(e){
    console.log(e);
  }
}

export const updatePost = (id:any,post:any) => async(dispatch:any) =>{
  try{
    const {data} = await api.updatePost(id,post);

    dispatch({type: UPDATE, payload: data})

  }catch(e){
    console.log(e)
  }
}

export const deletePost = (id: String) => async(dispatch:any) => {
  try{
    await api.deletePost(id);
    dispatch({type: DELETE, payload: id})
  } catch(error){
    console.log(error);
  }
}