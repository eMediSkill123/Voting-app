import React, { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Priya Patil",
    email: "priyapatil@gmail.com",
    phone: "+91 987 654 3210",
    street: "Camp",
    area: "Pune Cantonment",
    city: "Pune",
    pincode: "410507",
    state: "Maharashtra",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  });

  return (
    <div className="screen">
      <h2>Profile</h2>
      <div className="profile-header">
        <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
        <div>Change Picture</div>
      </div>
      <div className="profile-form">
        <label>Name</label>
        <input value={profile.name} readOnly />
        <label>Email</label>
        <input value={profile.email} readOnly />
        <label>Phone</label>
        <input value={profile.phone} readOnly />
        <h4>Address</h4>
        <label>Street</label>
        <input value={profile.street} readOnly />
        <label>Area*</label>
        <input value={profile.area} readOnly />
        <label>City*</label>
        <input value={profile.city} readOnly />
        <label>Pincode*</label>
        <input value={profile.pincode} readOnly />
        <label>State*</label>
        <input value={profile.state} readOnly />
      </div>
    </div>
  );
}
