import React from "react";
import InputField from "./InputFeild";
import ProfilePictureUploader from "./ProfilePictureUploader";
import "../styles/UserForm.css";

const UserForm = () => {
  return (
    <div className="user-form">
      <h3>Personal Information</h3>
      <InputField label="Full Name" type="text" placeholder="John Carter" />
      <InputField label="Email Address" type="email" placeholder="john@dashbank.com" />
      <ProfilePictureUploader />
      <InputField label="Short Description" type="text" placeholder="Write a short bio about you..." />

      <h3>Basic Information</h3>
      <InputField label="Phone" type="tel" placeholder="+1 (213) 598-33" />
      <InputField label="Position" type="text" placeholder="CEO & Founder" />
      <InputField label="Location" type="text" placeholder="New York, NY" />
      <InputField label="Website" type="url" placeholder="dashbank.com" />
    </div>
  );
};

export default UserForm;
