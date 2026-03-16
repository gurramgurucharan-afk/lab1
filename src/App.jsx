import React, { useState } from "react";

// ProfileCard Component
function ProfileCard({ name, role }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
}

// StatusPanel Component
function StatusPanel({ status, toggleStatus }) {
  return (
    <div className="card">
      <p>Status: {status}</p>
      <button onClick={toggleStatus}>
        Toggle Status
      </button>
    </div>
  );
}

// Parent Component (Dashboard)
export default function ProfileDashboard() {
  const [profile, setProfile] = useState({
    name: "Guru Charan",
    role: "Frontend Developer",
    status: "Active"
  });

  // State update (declarative UI)
  const toggleStatus = () => {
    setProfile(prev => ({
      ...prev,
      status: prev.status === "Active" ? "Offline" : "Active"
    }));
  };

  return (
    <div>
      <h1>Profile Dashboard</h1>

      <ProfileCard
        name={profile.name}
        role={profile.role}
      />

      <StatusPanel
        status={profile.status}
        toggleStatus={toggleStatus}
      />
    </div>
  );
}
