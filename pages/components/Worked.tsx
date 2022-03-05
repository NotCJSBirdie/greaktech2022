import React from "react";

const Worked = () => {
  return (
    <div className="my-20 w-full bg-white text-black">
      <div className="flex flex-col items-center">
        <h3>Who We Have Had The Pleasure Of Working With</h3>
      </div>

      <div className="grid-rows-8 grid grid-cols-1 px-8 md:grid-cols-4 md:grid-rows-2 md:px-20">
        <div className="flex flex-col items-center p-5">
          <img
            src="https://greaktech.com/static/media/bellwetherlogo.b5057159.png"
            alt=""
            className="w-full scale-150 p-10"
          />

          <h5 className="text-center">Bellwether Technologies</h5>
        </div>

        <div className="flex flex-col items-center p-5">
          <img
            src="https://greaktech.com/static/media/schneiderlogo.95dd40c6.svg"
            alt=""
            className="w-full scale-150 p-10"
          />

          <h5 className="mt-8 text-center">Schneider</h5>
        </div>

        <div className="flex flex-col items-center p-5">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="w-full scale-150 p-10"
          />

          <h5 className="mt-8 text-center">LCP Tracker</h5>
        </div>

        <div className="flex flex-col items-center p-5">
          <img
            src="https://greaktech.com/static/media/amdocslogo.86334483.png"
            alt=""
            className="scale-150 object-cover object-center py-10"
            width={55}
            height={55}
          />

          <h5 className="mt-8 text-center">Amdocs</h5>
        </div>

        <div className="flex flex-col items-center p-5">
          <img
            src="https://greaktech.com/static/media/alticelogo.95ad30a2.png"
            alt=""
            className="object-cover object-center py-10"
            width={100}
            height={100}
          />

          <h5 className="mt-8 text-center">Altice USA</h5>
        </div>

        <div className="flex flex-col items-center p-5">
          <img
            src="https://greaktech.com/static/media/icflogo.13e194f7.png"
            alt=""
            className="object-cover object-center py-10"
            width={67}
            height={67}
          />

          <h5 className="mt-8 text-center">ICF International</h5>
        </div>

        <div className="flex flex-col items-center p-5">
          <img
            src="https://greaktech.com/static/media/DOLlogo.4fd6fcb1.png"
            alt=""
            className="scale-150 object-cover object-center py-10"
            width={67}
            height={67}
          />

          <h5 className="mt-8 text-center">DOL</h5>
        </div>

        <div className="flex flex-col items-center p-5">
          <img
            src="https://greaktech.com/static/media/DOD.d8375fd9.png"
            alt=""
            className="scale-150 object-cover object-center py-10"
            width={67}
            height={67}
          />

          <h5 className="mt-8 text-center">DOD</h5>
        </div>
      </div>
    </div>
  );
};

export default Worked;
