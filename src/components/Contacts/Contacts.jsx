import React from "react";
import { connect } from "react-redux";
import { onDelete } from "../../redux/actions";
import styles from "./Contacts.module.css";

function Contacts(props) {
  const { contacts, filter, onDelete } = props;
  const onHandleDelete = (e) => {
    onDelete(e.target.id);
  };
  return (
    <div>
      {
        <ul className={styles.contactList}>
          {contacts.map((item) => {
            if (item.name.toLowerCase().includes(filter.toLowerCase())) {
              return (
                <li className={styles.contactElem} key={item.id}>
                  {item.name}: {item.number}
                  <button
                    id={item.id}
                    className={styles.deleteBtn}
                    onClick={onHandleDelete}
                  >
                    delete
                  </button>
                </li>
              );
            } else {
              return false;
            }
          })}
        </ul>
      }
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    contacts: state.items,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { onDelete })(Contacts);
