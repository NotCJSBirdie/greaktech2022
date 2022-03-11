import React from "react";

const DoItProgram = () => {
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

      <div className="grid-rows-8 grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2">
        <div className="flex flex-col items-center p-10">
          <img
            src="data:image/png;base64,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"
            alt="JIRA"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-3">JIRA</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/kanbanlogo.f0b954a0.png"
            alt="Kanban"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-3">Kanban</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/bitbucketlogo.9051d417.png"
            alt="BitBucket"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-3 pt-2">BitBucket</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/SCRUMlogo.0a8a406a.png"
            alt="SCRUM"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-3">SCRUM</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/confluencelogo.6d743027.png"
            alt="Confluence"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-3">Confluence</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="data:image/png;base64,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"
            alt="Automated Testing"
            className="w-1/2 scale-100 p-6"
          />

          <h4 className="mt-3 text-center">Automated Testing</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/APMicon.e8fb8661.png"
            alt="Application Points Monitor"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-8 text-center">Application Points Monitor</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="data:image/png;base64,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"
            alt="Continuous Integration"
            className="w-2/3 scale-100 p-4"
          />

          <h4 className="text-center">Continuous Integration</h4>
        </div>
      </div>
    </div>
  );
};

export default DoItProgram;
