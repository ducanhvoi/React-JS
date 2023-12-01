// Student.js

import React, { useState } from 'react';
import '../App.css';

const Student = ({ id, name, image, email }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="student">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>Email: {email}</p>
        <button onClick={toggleDetails}>
          {showDetails ? 'Ẩn chi tiết' : 'Hiển thị chi tiết'}
        </button>
        {showDetails && <p>Chi tiết bổ sung...</p>}
      </div>
    </div>
  );
};

export default Student;