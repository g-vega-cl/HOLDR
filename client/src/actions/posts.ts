import React from 'react';

import * as api from '../api';

// Action Creators

export const getPosts = () =>{
    const action = {type: 'FETCH_ALL', payload:[]}
    return action;
}