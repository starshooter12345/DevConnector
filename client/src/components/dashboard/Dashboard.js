import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

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
        <div>
        <br/><br/>
        Dashboard
        
    </div>
     
          
    );
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

export default connect(mapStateToProps, { getCurrentProfile }) (Dashboard);
