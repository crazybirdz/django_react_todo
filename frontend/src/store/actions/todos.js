import axios from '../../axios-backend';
// import { formValues } from 'redux-form';

import { tokenConfig } from './auth';
import { GET_TODOS } from './types';

// GET TODOS
export const getTodos = () => async (dispatch, getState) => {
  try {
    const res = await axios.get('/api/todos/', tokenConfig(getState));
    dispatch({
      type: GET_TODOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
  // ...
};

// GET TODO
export const getTodo = (id) => async (dispatch, getState) => {
  const res = await axios.get(`/api/todos/${id}/`, tokenConfig(getState));
  console.log(res);
  // ...
};

// ADD TODO
export const addTodo = (formValues) => async (dispatch, getState) => {
  const res = await axios.post(
    '/api/todos/',
    { ...formValues },
    tokenConfig(getState),
  );
  console.log(res);
  // ...
};

// DELETE TODO
export const deleteTodo = (id) => async (dispatch, getState) => {
  await axios.delete(`/api/todos/${id}/`, tokenConfig(getState));
  // ...
};

// EDIT TODO
export const editTodo = (id, formValues) => async (dispatch, getState) => {
  const res = await axios.patch(
    `/api/todos/${id}/`,
    formValues,
    tokenConfig(getState),
  );
  console.log(res);
  // ...
};
