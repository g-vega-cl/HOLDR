import {FETCH_ALL, CREATE, UPDATE, DELETE} from 'constants/actionTypes';

export default (posts: any = [], action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post: any) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post: any) => post._id !== action.payload);
    default:
      return posts;
  }
};
