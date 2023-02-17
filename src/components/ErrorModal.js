import React from 'react';
import styles from "./ErrorModal.module.css";
import styles1 from "./Button.module.css";
import Card from '../UI/Card';

function ErrorModal(props) {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid Input</h2>
        </div>
        <div className={styles.content}>
          <p>Please enter a valid name and age (non-empty values)</p>
        </div>
        <footer className={styles.actions}>
          <button className={styles1.button} onClick={props.deletebox}>Okay</button> {/* add onClick attribute here */}
          </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
