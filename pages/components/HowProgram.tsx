import React from "react";

const HowProgram = () => {
  return (
    <div className="w-full px-20">
      <div className="flex flex-col items-center">
        <h2>How We Can Make Your Life Easier</h2>
      </div>

      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1">
        <div className="flex flex-col items-center p-8">
          <div className="flex flex-col items-center pb-8">
            <img
              src="https://greaktech.com/static/media/automation.ffee975d.png"
              alt="column1"
              className="w-1/2 object-cover object-center"
            />
          </div>

          <h5 className="my-3 font-bold">Training</h5>

          <p className="mb-3 text-left">
            Many teams have a desire to improve their process, and manage it
            internally. Our team can work with yours to train them on best
            practices and SCRUM/Kanban style Agile methodologies.
          </p>
        </div>

        <div className="flex flex-col items-center p-8">
          <div className="flex flex-col items-center pb-6">
            <img
              src="https://greaktech.com/static/media/projectmanag.8b570c1b.png"
              alt="column2"
              className="w-1/2 object-cover object-center"
            />
          </div>

          <h5 className="my-3 font-bold">Auditing</h5>

          <p className="mb-3 text-left">
            Our team has been trusted by and worked with many industries and
            government agencies to audit and improve their current Agile
            software development processes.
          </p>
        </div>

        <div className="flex flex-col items-center p-8">
          <div className="flex flex-col items-center px-6 pt-3 pb-8">
            <img
              src="https://greaktech.com/static/media/audit.0036e1c2.png"
              alt="column3"
              className="w-1/2 scale-100 object-cover object-center"
            />
          </div>

          <h5 className="my-3 font-bold">Project Management</h5>

          <p className="mb-3 text-left">
            From budgets and timelines, to client and internal stakeholder
            expectations, our project managers have led multiple projects and
            teams in the past and are the best at what they do every step of the
            way.
          </p>
        </div>

        <div className="flex flex-col items-center p-8">
          <div className="flex flex-col items-center px-6 pt-2 pb-14">
            <img
              src="https://greaktech.com/static/media/training.a89fb5b0.png"
              alt="column4"
              className="w-1/2 scale-100 object-cover object-center"
            />
          </div>

          <h5 className="my-3 font-bold">Process Automation</h5>

          <p className="mb-3 text-left">
            We are always working to be as efficient as possible, and one way to
            do that is to automate processes. Many processes can be automated
            which will make your company more efficient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowProgram;
