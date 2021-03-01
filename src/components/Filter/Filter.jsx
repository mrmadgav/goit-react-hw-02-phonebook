import React from "react";
import { onFilter } from "../../redux/actions";
import { connect } from "react-redux";
import styles from "./Filter.module.css";

function Filter(props) {
  const { onFilter } = props;
  const onHandleFilter = (e) => {
    onFilter(e.target.value);
  };
  return (
    <label className={styles.label}>
      Find Contacts by name
      <input
        type="text"
        placeholder="найти контакт"
        onChange={onHandleFilter}
        className={styles.input}
      />
    </label>
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { onFilter })(Filter);
