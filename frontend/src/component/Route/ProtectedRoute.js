import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Redirect, Route, Routes } from 'react-router-dom';

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {!loading && (
        <Routes>
          <Route
            {...rest}
            render={(props) => {
              if (isAuthenticated === false) {
                return <Navigate to="/login" />;
              }

              return <Component {...props} />;
            }}
          />
        </Routes>
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
