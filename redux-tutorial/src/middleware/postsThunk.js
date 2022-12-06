import * as postAPI from '../api/postsAPI';
import { GET_POST, GET_POSTS } from '../actions/posts';
import { createPostThunk, createPostThunkById } from '../lib/postsUtil';

export const getPosts = createPostThunk(GET_POSTS, postAPI.getPosts);
export const getPostById = createPostThunkById(GET_POST, postAPI.getPostById);