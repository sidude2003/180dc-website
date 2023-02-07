import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";
// import Slider from "./components/Slider";
import SimpleImageSlider from "react-simple-image-slider";
import AboutUs from "./components/AboutUs";
import Slider from "./components/Slider";
import HeroSlider, { Slide, Nav, AutoplayButton, Overlay } from "hero-slider";
const StyledOverlayContainer = styled(Overlay)`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.33);
    text-align: center;
    h2 {
      margin: 0 36px;
    }
  }
`;

// const images = [
//   {
//     url: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     url: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   { url: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp" },
// ];

const sample1 =
  "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const sample2 =
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const sample3 = "https://mdbcdn.b-cdn.net/img/new/slides/041.webp";

// const slides = [
//   {
//     bg: "https://via.placeholder.com/2000x800",
//     title: "Slide 1",
//     subtitle: "This is the first slide",
//     buttonText: "Learn More",
//     buttonLink: "/learn-more",
//   },
//   {
//     bg: "https://via.placeholder.com/2000x800",
//     title: "Slide 2",
//     subtitle: "This is the second slide",
//     buttonText: "See More",
//     buttonLink: "/see-more",
//   },
// ];

function App() {
  return (
    <>
      <Navbar />
      <div className="sleeeder">
        <HeroSlider
          height={"89vh"}
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide),
          }}
        >
          <StyledOverlayContainer>
            <h1 className="text-center text-light" styles={{ height: "50%" }}>
              180 DC NITT
            </h1>
          </StyledOverlayContainer>
          {/* <Overlay>hello</Overlay> */}
          <Slide
            shouldRenderMask
            label="Giau Pass - Italy"
            background={{
              backgroundImageSrc: sample1,
              maskBackgroundBlendMode: "luminosity",
              backgroundAnimation: "fade",
              backgroundColor: "#8A8A8A",
            }}
          />

          <Slide
            shouldRenderMask
            label="Bogliasco - Italy"
            background={{
              backgroundImageSrc: sample2,
              maskBackgroundBlendMode: "luminosity",
              backgroundAnimation: "fade",
              backgroundColor: "#8A8A8A",
            }}
          />

          <Slide
            shouldRenderMask
            label="County Clare - Ireland"
            background={{
              backgroundImageSrc: sample3,
              maskBackgroundBlendMode: "luminosity",
              backgroundAnimation: "fade",
              backgroundColor: "#8A8A8A",
            }}
          />
        </HeroSlider>
      </div>

      <AboutUs />
      {/* <Slider /> */}
      {/* <p className="afcaus">afcaus</p> */}
      {/* <div className="image-slider"> */}
      {/* <SimpleImageSlider
        animationDuration={4000}
        animation="fade"
        autoPlay={3000}
        width={"100%"}
        height={"-webkit-fill-available"}
        images={images}
        showBullets={true}
        showNavs={true}
      /> */}

      {/* <HeroSlider slides={slides}></HeroSlider> */}

      {/* </div> */}
      {/* <Slider /> */}

      {/* <p style={{ position: "absolute", top: 0, left: 0, color: "white" }}>
        Constant text
      </p> */}
    </>
  );
}

export default App;
