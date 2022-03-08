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

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/NodeJSlogo.35cc6a34.png"
            alt="nodejs"
            className="w-1/2 scale-75 pb-10"
          />

          <h4>NodeJS</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/java.fc50c69a.png"
            alt="java"
            className="w-1/2 scale-75 pb-10"
          />

          <h4>Java</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="data:image/png;base64,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"
            alt="angular"
            className="w-1/2 scale-100 pb-16 pt-2"
          />

          <h4>Angular</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="data:image/png;base64,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"
            alt="angular"
            className="w-1/2 scale-100 pb-16 pt-2"
          />

          <h4>Angular</h4>
        </div>
      </div>
    </div>
  );
};

export default DoIt;