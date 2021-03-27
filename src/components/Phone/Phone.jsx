import React, { useEffect } from "react";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Phone.module.css";
import { getContact } from "../../redux/Contact-operations";
import { allContacts, contactName, contactNumber } from "../../redux/selectors";
import { connect } from "react-redux";

const Phone = ({ getContact }, contacts) => {
  useEffect(() => {
    getContact();
  }, [contacts, getContact]);

  return (
    <div className={styles.PhoneWrapper}>
      <h1 className={styles.PhoneTitle}>Phone Book</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    name: contactName(state),
    number: contactNumber(state),
    contacts: allContacts(state),
  };
};

export default connect(mapStateToProps, { getContact })(Phone);
