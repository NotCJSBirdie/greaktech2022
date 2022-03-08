import React from "react";
import styles from "../../styles/StillUnsure.module.css";
import Link from "next/link";

const StillUnsure = () => {
  return (
    <div className="my-10 w-full bg-white px-20">
      <div className="mb-5 flex flex-col items-center">
        <h3>Still unsure or have more questions?</h3>
      </div>

      <div className="flex flex-col items-center">
        <p className="mb-5 text-center text-xl">
          Reach out to us and we can answer your questions personally. Already
          made up your mind or looking to get a quote on price? Drop a line and
          we will get back to you as soon as we can.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Link href="/letsgetstarted">
          <button
            id={styles.StillUnsure}
            className="rounded-lg px-32 py-3 hover:text-white"
          >
            Let's Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StillUnsure;
