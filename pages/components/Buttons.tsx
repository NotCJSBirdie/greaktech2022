import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/Buttons.module.css";

const Buttons = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center px-20 md:flex-row">
        <Button id={styles.buttonA} className="mb-6 mt-12 md:my-0">
          Lets Get Started
        </Button>
        <Button id={styles.buttonB} className="mt-6 mb-12 md:my-0">
          Our Services
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
