import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onRemove }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <p>
          {contact.name} : {contact.number}
        </p>
        <button type="submit" onClick={() => onRemove(contact.id)}>
          Remove
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired
};

export default ContactList;
