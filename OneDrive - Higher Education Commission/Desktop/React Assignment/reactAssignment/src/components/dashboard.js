import React from "react";
import "./dashboard.css"; // Import styling

const Dashboard = ({ user, setIsSignedUp }) => {
  const handleLogout = () => {
    setIsSignedUp(null); // Log out the user and return to SignUp
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Welcome to the Dashboard</h2>
        <p>You have successfully signed up as {user?.email} and are now logged in!</p>
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
