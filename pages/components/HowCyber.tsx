import React from "react";

const HowCyber = () => {
  return (
    <div className="w-full px-20">
      <div className="flex flex-col items-center">
        <h2>How We Can Make Your Life Easier</h2>
      </div>

      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1">
        <div className="flex flex-col items-center p-8">
          <div className="flex flex-col items-center pb-8">
            <img
              src="https://greaktech.com/static/media/systemaudit.53bd7d87.png"
              alt="column1"
              className="w-1/2 object-cover object-center"
            />
          </div>

          <h5 className="my-3 font-bold">System Audit</h5>

          <p className="mb-3 text-left">
            We work with you and your team to understand the needs of each
            clients application. We work to create a data model that fits each
            clients specific needs.
          </p>
        </div>

        <div className="flex flex-col items-center p-8">
          <div className="flex flex-col items-center pb-2 pt-2">
            <img
              src="https://greaktech.com/static/media/appaudit.d3071a60.png"
              alt="column2"
              className="w-1/2 object-cover object-center"
            />
          </div>

          <h5 className="my-3 font-bold">Application Audit</h5>

          <p className="mb-3 text-left">
            We identify potential and existing security risks than we encrypt
            the database to industry standard in order to protect your product.
          </p>
        </div>

        <div className="flex flex-col items-center p-8">
          <div className="flex flex-col items-center px-6 pt-2 pb-8">
            <img
              src="data:image/png;base64,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"
              alt="column3"
              className="w-1/2 scale-100 object-cover object-center"
            />
          </div>

          <h5 className="my-3 font-bold">Expert Witness</h5>

          <p className="mb-3 text-left">
            Our team works with attorneys, users, and law enforcement to do full
            audits of systems and applications that are stuck in a litigation
            process. We are trusted experts by the experts.
          </p>
        </div>

        <div className="flex flex-col items-center p-8">
          <div className="flex flex-col items-center px-6 pt-2 pb-3">
            <img
              src="https://greaktech.com/static/media/datasec.ed64f64a.png"
              alt="column4"
              className="w-1/2 scale-100 object-cover object-center"
            />
          </div>

          <h5 className="my-3 font-bold">Data Security</h5>

          <p className="mb-3 text-left">
            We create an automated data backup process that compliments your
            specific database and storage needs. Periodic snapshots and full
            database backups are determined by each clients specific needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowCyber;
