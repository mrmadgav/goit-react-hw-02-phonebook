import React, { Component } from "react";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  render() {
    const {
      name,
      number,
      handleSubmit,
      handleChangeName,
      handleChangeNumber,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Name
          <input
            type="text"
            placeholder="Ilon Mask"
            value={name}
            onChange={handleChangeName}
            className={styles.contactInput}
            required
          />
        </label>
        <label className={styles.formLabel}>
          Phone Number
          <input
            type="tel"
            placeholder="777-888-99-00"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            value={number}
            onChange={handleChangeNumber}
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
