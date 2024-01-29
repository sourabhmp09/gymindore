import React from 'react'
import img3 from "../assets/test3-o6ZUmE9C.jpg"

const Servise = () => {
  return (
    <div className="container-fluid services">
    <div className="container">
      <div className="row gx-0">
        <div
          className="col-md-12 col-lg-6 aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-easing="ease-in-out"
        >
          <div className="services_col1">
            <h1 className="main_heading">The best Programs We Offers For You</h1>
            <div className="services_main pt-3 pb-5">
              <div className="form-check py-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="defaultCheck1"
                  defaultValue=""
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  <h5 className="ps-3">Personal Training</h5>
                </label>
              </div>
              <p>
                Elevate your fitness with personalized training. Tailored
                workouts, expert guidance, and dedicated support for a
                transformative journey to a healthier, fitter you.
              </p>
              <div className="form-check py-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="defaultCheck1"
                  defaultValue=""
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  <h5 className="ps-3">Expert Trainer</h5>
                </label>
              </div>
              <p>
                Empower your fitness journey with an expert trainer. Tailored
                workouts, personalized guidance, and motivational expertise to
                achieve your health and wellness goals effectively and efficiently
              </p>
              <div className="form-check py-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="defaultCheck1"
                  defaultValue=""
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  <h5 className="ps-3">Flexile Time</h5>
                </label>
              </div>
              <p>
                Enjoy flexibility with your schedule through 'Flexile Time,' a
                versatile approach to managing work and life, allowing for
                adaptability and balance.
              </p>
            </div>
            <button className="btn1 btn0">Join Today</button>
          </div>
        </div>
        <div
          className="col-md-8 col-lg-6 aos-init aos-animate"
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-easing="ease-in-out"
        >
          <div className="services_col2 pt-5 pt-md-5 pt-lg-0">
            <img
              src={img3}
              alt=""
              className="img-fluid p-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Servise