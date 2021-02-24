import React, { Component } from "react";
import styles from "./Contacts.module.css"

class Contacts extends Component {
  render() {
    const { filter, contacts, deleteContact } = this.props;
    return (
      <ul className={styles.contactList}>
        {contacts.map((item) => {
          if (item.name.toLowerCase().includes(filter.toLowerCase())) {
            return (
              <li className={styles.contactElem} key={item.id}>
                {item.name}: {item.number}
                <button className={styles.deleteBtn} onClick={() => deleteContact(item.id)}>delete</button>
              </li>
            );
          } else {
            return false;
          }
        })}
      </ul>
    );
  }
}

export default Contacts;
