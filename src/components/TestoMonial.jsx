import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative, Autoplay } from "swiper/modules";
const TestoMonial = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{ delay:2500, disableOnInteraction: false }}
        modules={[Autoplay,EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>
          *{" "}
          <div className="row test_main">
            <div className="col-12">
              <div className="row gx-0 align-items-center">
                <div className="col-4 col-md-3 col-lg-4 text-center">
                  <img
                    src="/assets/test2-l2o90d0E.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-8 col-md-9 col-lg-8">
                  <h5>FitJourneyPro</h5>
                  <p className="test_p1 pt-1">Happy Customer</p>
                </div>
              </div>
              <div className="stars py-3 py-md-4 py-lg-3">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-regular fa-star" />
              </div>
              <p className="test_p2">
                Love the gym website! Easy navigation, awesome workouts, and the
                personalized tracker keep me on track. Quick and helpful
                customer support too. Thanks for making fitness so accessible!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestoMonial;
