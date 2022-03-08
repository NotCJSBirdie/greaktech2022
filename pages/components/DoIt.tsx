import React from "react";

const DoIt = () => {
  return (
    <div className="my-10 w-full px-20">
      <div className="flex flex-col items-center">
        <h3>How We Do It</h3>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-center">
          Each service we provide to our clients is tailored and customized to
          their specific needs. We do however have a wide range of programs and
          tools that we use to give our clients the best experience possible.
          Don’t see what you want here, drop us a line and ask us about it!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4 md:grid-rows-2">
        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/ReactJSlogo.ccadaa0a.png"
            alt="react"
            className="w-full scale-75 p-6"
          />

          <h4>ReactJS</h4>
        </div>
      </div>
    </div>
  );
};

export default DoIt;
