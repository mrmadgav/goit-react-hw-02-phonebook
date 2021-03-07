import React from "react";
import { onFilter } from "../../redux/Contact-actions";
import { connect } from "react-redux";
import styles from "./Filter.module.css";
import { filterValue } from "../../redux/selectors";

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
        className={styles.filterInput}
      />
    </label>
  );
}

const mapStateToProps = (state) => {
  return {
    filter: filterValue(state),
  };
};

export default connect(mapStateToProps, { onFilter })(Filter);
