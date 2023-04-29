import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user,loading} = useContext(AuthContext);
let location = useLocation();
console.log(location)

if(loading){
return (<div class=" h-100 d-flex justify-content-center align-items-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>)
}

if(user){
return children;
}

  return <Navigate to='/login' state={{from:location}} replace />

};

export default PrivateRoute;