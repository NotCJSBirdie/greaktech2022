import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/Buttons.module.css";

const Buttons = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row px-20">
        <Button id={styles.buttonA}>Lets Get Started</Button>
        <Button id={styles.buttonB}>Our Services</Button>
      </div>
    </div>
  );
};

export default Buttons;
