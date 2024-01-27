import React, { useRef, useState } from "react";
// Import Swiper React components
import img1 from "../assets/main-image3-dqYwcZsu.png";
import img9 from "../assets/test_partner-M0CNOteu.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative, Autoplay } from "swiper/modules";
const Test = () => {
  return (
    <>
      <div className="container-fluid testimonial pb-md-5 pb-lg-0">
        <div className="container">
          <div className="row gx-0">
            <div
              className="col-md-12 py-md-5 py-lg-0 col-lg-7 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <div className="testimonial_col1 pe-md-5 me-md-5">
                <h1 className="main_heading ">
                  What Our Happy Clients Say About Us{" "}
                </h1>
                <p className="py-4">
                  Explore testimonials from our delighted clients. Discover
                  firsthand accounts of exceptional service, transformative
                  experiences, and the positive impact our offerings have made
                  on their lives. Your success story awaits.
                </p>
                <div className="row pt-2 align-items-center">
                  <div className="col-md-5">
                    <div className="test_images">
                      <img src={img1} alt="" className="img-fluid" />
                      <img
                        src={img1}
                        alt=""
                        className="img-fluid test_images1"
                      />
                      <img
                        src={img1}
                        alt=""
                        className="img-fluid test_images2"
                      />
                      <img
                        src={img1}
                        alt=""
                        className="img-fluid test_images3"
                      />
                      <img
                        src={img1}
                        alt=""
                        className="img-fluid test_images3"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 gx-0">
                    <p className="test_p3">
                      <i className="fa-solid fa-star" /> 4.9 (450 Reviews)
                    </p>
                  </div>
                </div>
                <img src={img9} alt="" className="img-fluid py-4" />
              </div>
            </div>
            <div
              className="col-md-12 pb-md-5 pb-lg-0 col-lg-5 aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration={1000}
            >
              <div className="testimonial_col2">
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
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  modules={[EffectCreative, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="row test_main">
                      <div className="col-12">
                        <div className="row gx-0 align-items-center">
                          <div className="col-4 col-md-3 col-lg-4 text-center">
                            <img src={img1} alt="" className="img-fluid" />
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
                          Love the gym website! Easy navigation, awesome
                          workouts, and the personalized tracker keep me on
                          track. Quick and helpful customer support too. Thanks
                          for making fitness so accessible!
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
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
                          Love the gym website! Easy navigation, awesome
                          workouts, and the personalized tracker keep me on
                          track. Quick and helpful customer support too. Thanks
                          for making fitness so accessible!
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
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
                          Love the gym website! Easy navigation, awesome
                          workouts, and the personalized tracker keep me on
                          track. Quick and helpful customer support too. Thanks
                          for making fitness so accessible!
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
