import styles from './UsersList.module.css';
import React from "react";

function UserItem(props) {
  const name=props.name;
  const age=props.age;

  return (
    <div className={styles.users}>
      <li>
        {name} ({age} years old)
      </li>
    </div>
  );
}

export default UserItem;
