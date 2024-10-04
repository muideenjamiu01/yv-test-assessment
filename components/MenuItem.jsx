import React from "react";

const MenuItem = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="menuBtn">
    {icon}
    {label}
  </button>
);

export default MenuItem;
