import React from "react";
import {useState} from "react";

const ListeDeroulante = ({ options, label, defaultValue, updateSelection }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const handleChange = (event) => {
      const selectListValue = event.target.value;
      setSelectedValue(event.target.value);
      updateSelection(label.toLowerCase(), selectListValue)
    };
  
    return (
      <div className="liste-deroulante">
        <label htmlFor={label}>{label}</label>
        <select id={label} value={selectedValue} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  export default ListeDeroulante