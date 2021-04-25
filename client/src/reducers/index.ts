import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import stripe from "./stripe";

export default combineReducers({ posts, auth, stripe });
