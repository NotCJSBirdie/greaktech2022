import React from "react";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className="w-full bg-white text-black">
      <div className="flex flex-col items-center">
        <h3>Contact Us</h3>

        <button
          id={styles.contact}
          className="my-10 rounded-lg border-2 px-20 py-3"
        >
          Let's Get Started
        </button>
      </div>
    </div>
  );
};

export default Contact;
