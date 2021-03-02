import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions";
import styles from "./Contacts.module.css";
import { allContacts, filterValue } from "../../redux/selectors";

function Contacts(props) {
  const { contacts, filter, deleteContact } = props;
  const onHandleDelete = (e) => {
    deleteContact(e.target.id);
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
    contacts: allContacts(state),
    filter: filterValue(state),
  };
};

export default connect(mapStateToProps, { deleteContact })(Contacts);
