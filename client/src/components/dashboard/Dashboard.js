/*import React, { useEffect  } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../actions/profile';*/





/*const Dashboard = ({
    getCurrentProfile,
    auth: {user},

})=>{
    useEffect(() => {
        getCurrentProfile();
    },[getCurrentProfile]);


    return (
        <div>
            <br/><br/>
            Dashboard
            
        </div>
    )
}*/
/*const Dashboard = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile }
  }) => {
    useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);
  
    return (
    
       /* <div>
        <br/><br/>
        Dashboard
        
    </div>*/
   /* <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user.name} 
      </p>
    </section>
    )


     
        
    
  };
  

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    auth:state.auth,
    profile:state.profile,

})

export default connect(mapStateToProps, { getCurrentProfile }) (Dashboard);*/

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../actions/profile';


const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
      <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,

  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  Dashboard
);

