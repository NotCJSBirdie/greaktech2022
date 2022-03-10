import React from "react";
import Link from "next/link";
import styles from "../../styles/ProgramButtons.module.css";

const ProgramButtons = () => {
  return (
    <div className="relative my-10 w-full p-8 md:bottom-16 md:my-0">
      <div className="flex flex-col items-end px-20 md:flex-row md:items-center">
        <div className="mx-4 w-full md:w-1/4">
          <Link href="/letsgetstarted">
            <button
              id={styles.programbuttonA}
              className="text-md mb-6  mt-12 w-full md:my-0"
            >
              Application Development
            </button>
          </Link>
        </div>

        <div className="mx-4 w-full md:w-1/4">
          <Link href="/cybersecurity">
            <button
              id={styles.programbuttonB}
              className="text-md mt-6  mb-12 w-full md:my-0"
            >
              <div>Cyber</div>
              <div>Security</div>
            </button>
          </Link>
        </div>

        <div className="mx-4 w-full md:w-1/4">
          <Link href="/clouddevelopment">
            <button
              id={styles.programbuttonC}
              className="text-md mt-6  mb-12 w-full md:my-0"
            >
              Cloud System Development
            </button>
          </Link>
        </div>

        <div className="mx-4 w-full md:w-1/4">
          <Link href="/programmanagement">
            <button
              id={styles.programbuttonD}
              className="text-md  mt-6 mb-12 w-full md:my-0"
            >
              Program and Process Management
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramButtons;