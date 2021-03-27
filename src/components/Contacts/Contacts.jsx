import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/Contact-operations";
import styles from "./Contacts.module.css";
import { allContacts, filterValue } from "../../redux/selectors";
import deleteIcon from "../../images/deleteIcon.svg";
import bookHead from "../../images/bookHead.png";

function Contacts() {
  const filter = useSelector(filterValue);
  const getAll = useSelector(allContacts);
  const dispatch = useDispatch();

  const onHandleDelete = (e) => {
    console.log("Айдишник", e.target.id);
    dispatch(deleteContact(e.target.id));
  };
  return (
    <div className={styles.allcontactsWrapper}>
      {
        <>
          {getAll.length > 0 && (
            <img src={bookHead} alt="" className={styles.bookHead} />
          )}
          <ul className={styles.contactList}>
            {getAll.map((item) => {
              if (item.name.toLowerCase().includes(filter.toLowerCase())) {
                return (
                  <li className={styles.contactElem} key={item.id}>
                    <span className={styles.contactItemName}>
                      {item.name}:{" "}
                    </span>
                    <a
                      href={`tel: ${item.number}`}
                      className={styles.contactItemNumber}
                    >
                      {item.number}
                    </a>

                    <button
                      className={styles.deleteBtn}
                      onClick={onHandleDelete}
                    >
                      <img
                        src={deleteIcon}
                        alt=""
                        className={styles.deleteImg}
                        id={item.id}
                      />
                    </button>
                  </li>
                );
              } else {
                return false;
              }
            })}
          </ul>
        </>
      }
    </div>
  );
}
export default Contacts;
