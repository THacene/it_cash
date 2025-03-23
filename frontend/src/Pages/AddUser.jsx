import React, { useState } from "react";
import { 
  User, Mail, Image, FileText, Phone, 
  Briefcase, MapPin, Globe, Search, 
  CreditCard, Bell 
} from "lucide-react";
import Profilepic from "../assets/profile-2398782_640.png";
import "../Styles/AddUser.css"; // Import CSS

const AddUser = () => {
  // State for the profile picture
  const [profileImage, setProfileImage] = useState(Profilepic);
  const [showDelete, setShowDelete] = useState(false);

  // Handle Image Upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        setShowDelete(true);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Image Deletion
  const handleDeleteImage = () => {
    setProfileImage(Profilepic); // Reset to default profile picture
    setShowDelete(false);
  };

  return (
    <div className="add-user-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Add User</h2>

        {/* Search Bar */}
        <div className="search-container">
          <input className="search-bar" type="text" placeholder="Search for..." />
          <Search className="search-icon" />
        </div>

        <ul>
          <li><User className="sidebar-icon" /> Personal Information</li>
          <li><Briefcase className="sidebar-icon" /> Team</li>
          <li><CreditCard className="sidebar-icon" /> Billing</li>
          <li><Bell className="sidebar-icon" /> Notifications</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="user-content">
        {/* Personal Information Section */}
        <div className="user-section">
          <h2>Personal Information</h2>
          
          <div className="info-box">
            <label htmlFor="fullname">
              <User className="icon" /> Full Name
              <input type="text" placeholder="Joe Dassin" id="fullname" />
            </label>

            <label htmlFor="email">
              <Mail className="icon" /> Email Address
              <input type="email" placeholder="JoeDassin@gmail.com" id="email" />
            </label>

            {/* Profile Picture Upload Section */}
            <div className="profile-upload-section">
              <label>
                <Image className="icon" /> Profile Picture
              </label>

              <div className="profile-container">
                <div className="profile-picture-container">
                  <img src={profileImage} alt="Profile" className="profile-picture" />
                  {showDelete && (
                    <button className="delete-button" onClick={handleDeleteImage}>
                      Delete
                    </button>
                  )}
                </div>
                
                <label htmlFor="file-input" className="file-upload">
                  Click to upload<br />
                  or drag and drop<br />
                  <small>SVG, PNG, JPG, or GIF (max. 800 × 400px)</small>
                </label>
                <input 
                  type="file" 
                  id="file-input" 
                  accept="image/*" 
                  style={{ display: "none" }} 
                  onChange={handleImageChange} 
                />
              </div>
            </div>

            <label htmlFor="description">
              <FileText className="icon" /> Short Description
              <textarea placeholder="Short Description" id="description" className="description"></textarea>
            </label>
          </div>
        </div>

        {/* Basic Information Section */}
        <div className="user-section">
          <h2>Basic Information</h2>
          
          <div className="info-box">
            <label htmlFor="phone">
              <Phone className="icon" /> Phone
              <input type="text" placeholder="+21358585858" id="phone" />
            </label>

            <label htmlFor="position">
              <Briefcase className="icon" /> Position
              <input type="text" placeholder="CEO" id="position" />
            </label>

            <label htmlFor="location">
              <MapPin className="icon" /> Location
              <input type="text" placeholder="New York City" id="location" />
            </label>

            <label htmlFor="website">
              <Globe className="icon" /> Website
              <input type="text" placeholder="ItCash.com" id="website" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
