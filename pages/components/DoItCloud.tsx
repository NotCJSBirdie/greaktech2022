import React from "react";

const DoItCloud = () => {
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAyCAYAAADrwQMBAAACDElEQVR42u1Zy43DIBClhJRACS7BJaQEl+DL3t2BS3AJvu7NJbgESnAJLCOBhGZ3QTABD7af9C7J5DAf5j2IePDgQXXIr++X4WIoxZ1gE98NF3EnmIQ7w8NQ36rrJtnBS3xDk7CJq8IkNxlqjz0qijYcxZXgFhtKfEMxq/38gHhxBXiLTSO+UYz2OIvWYReb+iNxheJG//vmFyF01ltsmAOK3XFMs8sPdTLWdRmI7UVLcIstwAnFz8FCtQCn0+HEf29ySDBaLM6AxebObWLX+1A8e+lDVjXGV8oRcWTp/+2oH7kJoN/G2AlOQMsqRok9fiietfQ5iSJ03drZJA6CA6ATqSOL7WwG1enLD9wbYVxjJkizlr6wNsddmpPFTB6n+X6oPLHrXeg3bKUPKp4oTwNRITQb349MSYwquCjp3EUtQKVpshTXd7bSl9gx9YkJYuH7M7o1pRaTpfQ5/07oRvxtj07JQdqAU456ELme5d8xX6lXYpbSBxUtYD5KKYCqJG30s1fI/IyCAIr/XgpMWn3pgwqWOHOVFGCuKW3ArYS0Eihrnr2+9KNo8WZAxbhcMD6gAO9k/87pcuEMViZVaWlTzK7ReW4TEuHUdawARaUPOp/IrtIbwmi4NPXklbHdB3vGN38KWfp+wkWpt0muFEPD9t8eOGfeyM6UhwvWT17/jSxDKrZ/dT94UAc/NHVsJZCr7/IAAAAASUVORK5CYII="
            alt="Azure"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-3">Azure</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="data:image/png;base64,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"
            alt="AWS"
            className="w-2/3 scale-100 p-6"
          />

          <h4>AWS</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/gcp.aaaebc6e.png"
            alt="Google Cloud Platform"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="text-center">Google Cloud Platform</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAyCAYAAADrwQMBAAABdUlEQVR42u2a0W3DIBCGGcEjeARGQOoCGYERGIEN/No3j+ARGMEjZARGcH+kEFFKq9gR1cHxS98jgk8kxyU6MXIyH+JTAg0sAQyQ/yW9g4MgDkw15e9ERH/D1RK/JZtsYBYEEs4B1uRsqsYmNtlgEoQSzpOczVaVFwQz5CnIh+9dhrzwqqiUluSvV+Hyes9CPr4qGRsX+bWwXncv/3izjwwPJg7ypVu3rVX7k/KxwpdvnYP8XlinWnznz8jH9lRlyFabnB/ynDq8IT/kE/ms9zfAApexgFtP8nsierzIHcge5K/igeIq30V7+y62F3kPVmCAAvMLf427luU9WIC89MsOtCi/Ay1OpnV5l1ZpVvIxQ37IM5J/FLqJq/yzN+cqH/BAcpUPeKC5ykcUV/mF682za2+f4hyrvQeS6zs/v7tXhmlGPguvsZTv6Uye4yhaPoSoBIGEc1QdQowhPHcbcbU/Xo6IaM4GJuoj5waoP9AkR857yxejjaUb1AZDWwAAAABJRU5ErkJggg=="
            alt="Heroku"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-2 text-center">Heroku</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/jenkinslogo.62c38a30.png"
            alt="Jenkins"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="text-center">Jenkins</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/chef.5900ebbb.png"
            alt="Chefbooks"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-4 text-center">Chefbooks</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/database.3833e631.png"
            alt="Database"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-6 text-center">Database</h4>
        </div>

        <div className="flex flex-col items-center p-10">
          <img
            src="https://greaktech.com/static/media/ssl.296a491b.png"
            alt="SSL"
            className="w-2/3 scale-100 p-6"
          />

          <h4 className="mt-9 text-center">SSL</h4>
        </div>
      </div>
    </div>
  );
};

export default DoItCloud;
