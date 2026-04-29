import React from "react";

function Dropdown({ title, options, func, value }) {
  return (
    <div className="select">
      <select value={value} onChange={func}>
        
        <option value="" disabled>
          {title}
        </option>

        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;