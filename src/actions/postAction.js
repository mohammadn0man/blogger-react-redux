import {
  CREATE_POST,
  GET_POST,
  UPDATE_POST,
  DELETE_POST,
  SELECT_POST,
  CLEAR_POST,
  DELETE_SELECTED_POST,
  TOGGLE_LIKE,
} from "../constant/types";

// actions
export const addPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

// get a post
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
});

// update a post
export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

// delete a post
export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

// select all post
export const selectAllPost = (id) => ({
  type: SELECT_POST,
  payload: id,
});

// clear selected posts
export const clearAllPost = () => ({
  type: CLEAR_POST,
});

// delete selected posts
export const deleteAllPost = () => ({
  type: DELETE_SELECTED_POST,
});

// like dislike
export const toggleLike = (id) => ({
  type: TOGGLE_LIKE,
  payload: id,
})
