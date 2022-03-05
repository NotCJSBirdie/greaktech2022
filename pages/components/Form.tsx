import React from "react";
import styles from "../../styles/Form.module.css";

const Form = () => {
  return (
    <div className="mt-52 h-full w-full bg-white px-8 md:px-20">
      <div className="flex flex-col items-center text-center">
        <h3>
          Your problems are our problems, and we’re here to make your dreams
          come true. Drop us a line and we will get back to you as soon as we
          can. We are excited to start creating together!
        </h3>
      </div>

      <div className="my-6 flex flex-row items-center">
        <div className="w-1/2 text-center">
          <h3>Email us at info@greaktech.com</h3>
        </div>

        <div className="w-1/2 text-center">
          <h3>Call us at 833-475-8324</h3>
        </div>
      </div>

      <div className="my-6 flex flex-row items-center">
        <div className="mr-12 w-1/2 text-center">
          <input
            type="text"
            placeholder="First Name"
            className=" w-full border-2 border-gray-400 p-6 text-xl focus:outline-none"
          ></input>
        </div>

        <div className="w-1/2 text-center">
          <input
            type="text"
            placeholder="Last Name"
            className=" w-full border-2 border-gray-400 p-6 text-xl focus:outline-none"
          ></input>
        </div>
      </div>

      <div className="my-6 flex flex-row items-center">
        <div className="mr-12 w-1/2 text-center">
          <input
            type="text"
            placeholder="Company Name"
            className=" w-full border-2 border-gray-400 p-6 text-xl focus:outline-none"
          ></input>
        </div>

        <div className="w-1/2 text-center">
          <input
            type="text"
            placeholder="Phone"
            className=" w-full border-2 border-gray-400 p-6 text-xl focus:outline-none"
          ></input>
        </div>
      </div>

      <div className="my-6 flex flex-row items-center">
        <div className="mr-12 w-1/2 text-center">
          <input
            type="text"
            placeholder="Email Address"
            className=" w-full border-2 border-gray-400 p-6 text-xl focus:outline-none"
          ></input>
        </div>

        <div id={styles.selectdiv} className="w-1/2 text-center">
          <select
            name="I am looking for"
            placeholder="I am looking for"
            className=" w-full appearance-none border-2 border-gray-400 bg-white p-6 text-xl focus:outline-none"
          >
            <option value="" disabled selected>
              I am looking for
            </option>
            <option>Volvo</option>
            <option>Saab</option>
            <option>Mercedes</option>
            <option>Audi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Form;
