import React from "react";

function OurServices() {
  return (
    <div className="bg-dark">
      <h1 className="text-center" style={{ color: "#79ab40" }}>
        Our Services
      </h1>
      <div
        className="container w-100 card mx-5 d-flex"
        style={{
          width: "18rem",
          backgroundColor: "#79ab40",
          flexFlow: "column wrap",
        }}
      >
        <div className="p-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          eveniet ullam doloribus iusto facilis quasi distinctio aperiam,
          quibusdam facere repellendus veniam qui dolorem? Fugit debitis
          officiis quo nulla, inventore molestiae.
        </div>
        <div className="p-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          eveniet ullam doloribus iusto facilis quasi distinctio aperiam,
          quibusdam facere repellendus veniam qui dolorem? Fugit debitis
          officiis quo nulla, inventore molestiae.
        </div>
      </div>
    </div>
  );
}

export default OurServices;
