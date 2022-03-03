import React from "react";
import styles from "../../styles/HQ.module.css";
import Image from "next/image";

const HQ = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center bg-white px-8 md:px-28">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full md:w-1/2">
            <p>
              Honesty is the cornerstone of Integrity and is the building block
              of trust. GreakTech provides absolute transparency on every facet
              of the client journey from cost and timelines, to problems and
              unexpected solutions. We specialize in working with clients that
              have been burned in the past from other technical professionals,
              and value building their trust back in our industry.
            </p>
          </div>

          <div className="w-full py-12 md:w-1/2 md:pl-12">
            <img
              src="https://greaktech.com/static/media/honesty.881dbbc0.png"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row">
          <div className="hidden w-full py-12 md:order-1 md:flex md:w-1/2 md:pr-12">
            <img
              src="https://greaktech.com/static/media/quality.e0c8fada.png"
              className="object-cover object-center"
            />
          </div>

          <div className="w-full md:order-2 md:w-1/2">
            <p>
              In tandem with being honest and transparent about our solutions,
              we provide the technical knowledge and knowhow to deliver amazing
              quality. At GreakTech, we will never sign off on a project in
              which we cannot guarantee it’s Quality, and we provide a much
              larger warranty period than our competitors. We are elite
              technical experts, and it shows with every deliverable.
            </p>
          </div>

          <div className="flex w-full py-12 md:hidden md:w-1/2 md:pr-12">
            <img
              src="https://greaktech.com/static/media/quality.e0c8fada.png"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full md:w-1/2">
            <p>
              Honesty and Quality are important, but without a competent vehicle
              in which to deliver them, they fall short. We break the mold on
              typical developers and IT experts and work to establish valuable
              Communication at every step in the process. We encourage and
              expect the client to be as involved in the development and
              technical process as much we are with demos, feedback, and quality
              assurance run throughs.
            </p>
          </div>

          <div className="w-full py-12 md:w-1/2 md:pl-12">
            <img
              src="https://greaktech.com/static/media/communication.dfeb88e4.png"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center">
          <button
            id={styles.learnmore}
            className="rounded-lg border-2  py-3 px-20"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HQ;
