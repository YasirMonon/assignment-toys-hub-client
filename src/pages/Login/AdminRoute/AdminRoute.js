import { Redirect, Route } from "react-router";
import { AuthContext } from "../../../store/auth-context";
import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";

const AdminRoute = ({ children, ...rest }) => {
    const { user, loading } = useContext(AuthContext);
    const { admin } = useFirebase();
    if (loading) {
        return (
            <div className="spinnerContainer">
                <Spinner animation="border" role="status" className="privateSpinner">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && user.role === admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
export default AdminRoute;
