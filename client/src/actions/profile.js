import axios from 'axios';
import { setAlert } from './alert';


import{
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE
}from './types';


//Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
    try{
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg : err.response.statusText, status: err.response.status }
        })

    }
}

//Create or update profile
/*export const createProfile = (formData, navigate , edit = false) => async (dispatch) => {
    try{
        const res = await axios.post('/api/profile', formData, config)
    }
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        dispatch(setAlert(edit ? 'Profile Updated ' : 'Profile created'))
        if(!edit){
            history.push('/dashboard')
        }
    }catch(err){
        const errors= err.response.data.errors;
        if(errors){
            errors.forEach((error) => dispatch(setAlert(error.msg,'danger')));
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg : err.response.statusText, status: err.response.status }
        })
    }
} */
//Create or update profile
export const createProfile =
  (formData, navigate, edit = false) =>
  async (dispatch) => {
    try {
      const res = await axios.post('/api/profile', formData);

      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
      //added comment

      dispatch(
        setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')
      );

      if (!edit) {
        navigate('/dashboard');
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  //Add experience
  export const addExperience = (formData, navigate) => async (dispatch) => {
    try {
      const res = await axios.put('/api/profile/experience', formData);
  
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
  
      dispatch(setAlert('Experience Added', 'success'));
  
      navigate('/dashboard');
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  // Add Education
export const addEducation = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.put('/api/profile/education', formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Education Added', 'success'));

    navigate('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Experience Removed', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};