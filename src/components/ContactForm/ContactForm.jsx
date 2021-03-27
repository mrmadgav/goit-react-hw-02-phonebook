import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import { addContact } from "../../redux/Contact-operations";
import { allContacts, contactName, contactNumber } from "../../redux/selectors";

const ContactForm = ({ contacts, addContact, getContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const updateName = (evt) => {
    setName(evt.target.value);
  };
  const updateNumber = (evt) => {
    setNumber(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contacts.some((i) => i.name === name)) {
      addContact({
        name: name,
        number: number,
      });
    } else {
      alert(`${name} уже есть в списке`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.contactFormTitle}>
        Name
        <input
          name="name"
          type="text"
          placeholder="Ilon Mask"
          value={name}
          onChange={updateName}
          className={styles.contactInput}
          required
        />
      </label>
      <label className={styles.contactFormTitle}>
        Phone Number
        <input
          name="number"
          type="tel"
          placeholder="777-888-99-00"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          value={number}
          onChange={updateNumber}
          className={styles.contactInput}
        />
      </label>
      <button type="submit" className={styles.contactBtn}>
        add contact
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    name: contactName(state),
    number: contactNumber(state),
    contacts: allContacts(state),
  };
};

export default connect(mapStateToProps, { addContact })(ContactForm);
