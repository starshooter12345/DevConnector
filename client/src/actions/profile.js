import axios from 'axios';
import { setAlert } from './alert';


import{
  ACCOUNT_DELETED,
  CLEAR_PROFILE,
    GET_PROFILE,
    GET_PROFILES,
    GET_REPOS,
    NO_REPOS,
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

//Get all profiles
/*export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });

  try{
      const res = await axios.get('/api/profile');

      dispatch({
          type:GET_PROFILES,
          payload: res.data
      })

  }catch(err){
      dispatch({
          type: PROFILE_ERROR,
          payload: { msg : err.response.statusText, status: err.response.status }
      })

  }
}*/
// Get all profiles
export const getProfiles = () => async (dispatch) => {
  

  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
  

  try{
      const res = await axios.get(`/profile/user/${userId}`);

      dispatch({
          type:GET_PROFILE,
          payload: res.data
      })

  }catch(err){
      dispatch({
          type: PROFILE_ERROR,
          payload: { msg : err.response.statusText, status: err.response.status }
      })

  }
}

//Get Github repos
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`/profile/github/${username}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: NO_REPOS
    });
  }
};



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

//Delete experience
/*export const deleteExperience = id => async dispatch => {
  try{
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({
      type:UPDATE_PROFILE,
      payload:res.data
    })
    dispatch(setAlert('Experience Removed','success'));
  }catch(err){
    dispatch({
      type:PROFILE_ERROR,
      payload:{ msg: err.response.statusText, status:err.response.status }
    })
  }

}*/
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
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


//Delete education
export const deleteEducation = id => async dispatch => {
  try{
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch({
      type:UPDATE_PROFILE,
      payload:res.data
    })
    dispatch(setAlert('Education Removed','success'));
  }catch(err){
    dispatch({
      type:PROFILE_ERROR,
      payload:{ msg: err.response.statusText, status:err.response.status }
    })
  }

}
/*
//Delete account and profile
export const deleteAccount = () => async dispatch => {
  if(window.confirm('Are you sure? This cannot be undone!')){
    try{
      const res = await axios.delete('/api/profile');

      dispatch({ type: CLEAR_PROFILE});
      dispatch({ type: ACCOUNT_DELETED});

      dispatch(setAlert('Ypur account has been permanently deleted','success'));
    }catch(err){
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status}
      })
  }
  }
}*/
// Delete account & profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete('/api/profile');

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert('Your account has been permanently deleted'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};



