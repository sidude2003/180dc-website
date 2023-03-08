import React, { useState } from "react";
import Carousel from "react-carousel-light";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "./data";
import "./AboutUs.css";

const AboutUs = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };
  return (
    <div className="About bg-dark">
      <div className="container pt-5 bg-dark" style={{ width: "70%" }}>
        <h1 className="text-center" style={{ color: "#79ab40" }}>
          ABOUT US
        </h1>
        <p className="text-light my-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          eligendi, facere cupiditate ad fugiat molestiae nemo! Repellendus
          autem odio maiores, doloremque ullam doloribus laudantium eaque
          voluptas earum tempore, natus eveniet! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Culpa, esse sequi quod doloribus alias
          perspiciatis neque facilis impedit modi deleniti debitis eveniet
          excepturi amet earum eius dignissimos cumque aliquam sed.
        </p>
        <p className="text-light my-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          eligendi, facere cupiditate ad fugiat molestiae nemo! Repellendus
          autem odio maiores, doloremque ullam doloribus laudantium eaque
          voluptas earum tempore, natus eveniet! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maxime aut qui molestias incidunt
          asperiores, quaerat dolores numquam veniam fuga inventore quia ipsum
          necessitatibus rerum obcaecati distinctio, ex atque itaque id.
        </p>
        <p className="text-light pb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          eligendi, facere cupiditate ad fugiat molestiae nemo! Repellendus
          autem odio maiores, doloremque ullam doloribus laudantium eaque
          voluptas earum tempore, natus eveniet! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Libero odit asperiores, minima culpa
          vitae explicabo placeat sit repellendus necessitatibus quis laborum
          vero aliquam, officia rerum eum! Officia incidunt dolor facere.
        </p>
      </div>
      <h1 className="text-center" style={{ color: "#79ab40" }}>
        OUR SERVICES
      </h1>
      <div
        className="container my-5"
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-light text-center" style={{ margin: "0 -5px" }}>
          <h2>Title 1</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos laborum
          autem velit accusamus sed numquam! Est iure, voluptas tempore, illo
          fugiat a maiores, commodi architecto sed eos debitis laborum! Tempore?
        </div>
        <div className="text-light text-center" style={{ margin: "0 -5px" }}>
          <h2>Title 1</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos laborum
          autem velit accusamus sed numquam! Est iure, voluptas tempore, illo
          fugiat a maiores, commodi architecto sed eos debitis laborum! Tempore?
        </div>
        <div className="text-light text-center" style={{ margin: "0 -5px" }}>
          <h2>Title 1</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos laborum
          autem velit accusamus sed numquam! Est iure, voluptas tempore, illo
          fugiat a maiores, commodi architecto sed eos debitis laborum! Tempore?
        </div>
        <div className="text-light text-center" style={{ margin: "0 -5px" }}>
          <h2>Title 1</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos laborum
          autem velit accusamus sed numquam! Est iure, voluptas tempore, illo
          fugiat a maiores, commodi architecto sed eos debitis laborum! Tempore?
        </div>
      </div>
      <h1 className="text-center" style={{ color: "#79ab40" }}>
        OUR CLIENTS
      </h1>
      <div className="container">
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div className="card">
              <div className="card-top">
                <img
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
                <h1>{item.title}</h1>
              </div>
              {/* <div className="card-bottom">
                <h3>{item.price}</h3>
                <span className="category">{item.category}</span>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
