import React from "react";
import styles from "../../styles/HQ.module.css";
import Image from "next/image";

const HQ = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center bg-white px-28">
        <div className="flex flex-row items-center">
          <div className="w-2/3">
            <p>
              Honesty is the cornerstone of Integrity and is the building block
              of trust. GreakTech provides absolute transparency on every facet
              of the client journey from cost and timelines, to problems and
              unexpected solutions. We specialize in working with clients that
              have been burned in the past from other technical professionals,
              and value building their trust back in our industry.
            </p>
          </div>

          <div className="w-1/3">
            <img
              src="https://greaktech.com/static/media/honesty.881dbbc0.png"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HQ;
