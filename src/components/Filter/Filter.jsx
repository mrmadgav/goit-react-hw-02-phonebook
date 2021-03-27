import React from "react";
import { onFilter } from "../../redux/Contact-actions";
import { useDispatch } from "react-redux";
import styles from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();

  const onHandleFilter = (e) => {
    dispatch(onFilter(e.target.value));
  };
  return (
    <label className={styles.label}>
      Find Contacts by name
      <input
        type="text"
        placeholder="найти контакт"
        onChange={onHandleFilter}
        className={styles.filterInput}
      />
    </label>
  );
}

export default Filter;
