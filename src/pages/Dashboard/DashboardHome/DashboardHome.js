import React, { useContext } from 'react';
import { AuthContext } from '../../../store/auth-context';


const DashboardHome = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Welcome to Your Dashboard <span style={{
                textDecoration: "none",
                color: "white",
                margin: "5px",
                lineHeight: "2.5",
                textAlign: "center"
            }}><i class="fa fa-user-circle" aria-hidden="true"></i>   {user.displayName}</span></h2>
        </div>
    );
};

export default DashboardHome;