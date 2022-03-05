import React from "react";
import styles from "../../styles/Clients.module.css";

const Clients = () => {
  return (
    <div className="w-full bg-white px-20 text-black">
      <div className="flex flex-col items-center">
        <h3>What Our Clients Are Saying About Us</h3>

        <div className="flex items-center md:flex-row">
          <div className="w-1/2 p-10">
            <div
              id={styles.testimonial}
              className="flex flex-col items-center  p-10 text-black"
            >
              <p className="mb-8">
                The software development team at GreakTech is incredible! They
                are an amazing group of people to work with, and they ensured a
                very smooth development process. Not only can they truly build
                anything... but they are just all around a fun group of people
                to work with. They are highly organized and VERY responsive!
              </p>

              <p className="self-end text-right">- Madison Carter</p>
            </div>
          </div>

          <div className="w-1/2 p-10">
            <div
              id={styles.testimonial}
              className="flex flex-col items-center p-10 text-black"
            >
              <p className="mb-20">
                Reliable and capable developers who are easy to work with are
                hard to find. When I began working with GreakTech, I found them
                to be super responsive and great troubleshooters. They make my
                work easier. Highly recommend!
              </p>

              <p className="self-end text-right">- Jonathan Carpenter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
