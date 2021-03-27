import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/Contact-operations";
import { allContacts } from "../../redux/selectors";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const getAll = useSelector(allContacts);

  const updateName = (evt) => {
    setName(evt.target.value);
  };
  const updateNumber = (evt) => {
    setNumber(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!getAll.some((i) => i.name === name)) {
      dispatch(
        addContact({
          name: name,
          number: number,
        })
      );
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

export default ContactForm;
