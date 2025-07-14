import React from 'react';

const PlaceholderProfile = ({ role }) => (
  <div style={{ padding: '2rem' }}>
    <h2>{role} Profile</h2>
    <p>This is a placeholder profile page for {role}.</p>
  </div>
);

export default PlaceholderProfile;
