import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, filterChange }) => {
  return (
    <div>
      <h2>Contacts </h2>
      <input
        type="text"
        value={value}
        onChange={e => filterChange(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Filter;
