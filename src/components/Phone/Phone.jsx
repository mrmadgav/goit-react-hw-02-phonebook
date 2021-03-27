import React, { useEffect } from "react";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Phone.module.css";
import { getContact } from "../../redux/Contact-operations";
import { useDispatch } from "react-redux";

const Phone = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

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

export default Phone;
