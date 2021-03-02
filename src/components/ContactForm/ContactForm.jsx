import React, { Component } from "react";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  render() {
    const {
      name,
      number,
      handleSubmit,
      handleChange,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Name
          <input
            name='name'
            type="text"
            placeholder="Ilon Mask"
            value={name}
            onChange={handleChange}
            className={styles.contactInput}
            required
          />
        </label>
        <label className={styles.formLabel}>
          Phone Number
          <input
            name='number'
            type="tel"
            placeholder="777-888-99-00"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            value={number}
            onChange={handleChange}
            className={styles.contactInput}
          />
        </label>
        <button type="submit" className={styles.contactAddBtn}>
          add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
