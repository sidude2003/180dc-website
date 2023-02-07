import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
//import { Image } from "react-image-and-background-image-fade";

const fadeImages = [
  {
    url: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Slide 1",
  },
  {
    url: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Slide 2",
  },
  {
    url: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
    caption: "Slide 3",
  },
];

function Slider() {
  return (
    <>
      <div>
        {/* <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.url} />
              </div>
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade> */}
        {/* <Image
          src="https://example.com/neon_cat.jpg"
          width="300px"
          height="300px"
          alt="flying cat"
          title="Neon cat"
        /> */}
      </div>
    </>
  );
}

export default Slider;
