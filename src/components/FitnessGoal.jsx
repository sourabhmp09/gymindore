import React from "react";
import img1 from "../assets/partner1-zF7vbTNY.png";
import img2 from "../assets/partner2-0v4I3E4H.png";
import img3 from "../assets/partner3-1SbtTxdT.png";

import img4 from "../assets/fitness1-5ZkARyP1.jpeg";
import img5 from "../assets/partner3-1SbtTxdT.png";
import img6 from "../assets/partner3-1SbtTxdT.png";
import img99 from "../assets/main-image1-JGVa53bJ.png";

const FitnessGoal = () => {
  return (
    <>
      <div className="container-fluid Fitness_Goal">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-md-5 col-lg-5">
              <div className="fitness_col1">
                <h1 className="">970k + More</h1>
                <p>Trusted Companies Partner</p>
              </div>
            </div>
            <div className="col-md-7 col-lg-7">
              <div className="fitness_col2">
                <img
                  src={img1}
                  alt=""
                  className="img-fluid px-3 py-md-2 py-lg-0"
                />
                <img
                  src={img2}
                  alt=""
                  className="img-fluid px-3 py-md-2 py-lg-0"
                />
                <img
                  src={img3}
                  alt=""
                  className="img-fluid px-3 py-md-2 py-lg-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid Fitness_Goal1">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div
              className=" col-lg-6 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration={1000}
              data-aos-easing="ease-in-out"
            >
              <div className="fitness_col3">
                <img src={img99} alt="" className="img-fluid" />
                {/* <div className="popup">
            <img src="data:image/png;base64,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"
              alt=""
            />
            <h6 className="fw-bold">Professional Trainer</h6>
          </div> */}
              </div>
            </div>
            <div className=" col-lg-6">
              <div className="fitness_col4">
                <h1
                  className="main_heading aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                  data-aos-easing="ease-in-out"
                >
                  Get Ready To Reach Your Fitness Goals
                </h1>
                <div
                  className="pt-3 pb-4 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-duration={1400}
                  data-aos-easing="ease-in-out"
                >
                  <p>
                    Ditch the excuses, grab your motivation backpack! "Get Ready
                    To Reach Your Fitness Goals" isn't just a title, it's a
                    battle cry. This guide is your personal trainer,
                    cheerleader, and goal-crushing buddy rolled into one. We'll
                    break down your aspirations into bite-sized.
                  </p>
                  <p>
                    Get ready to conquer your doubts, rewrite your limits, and
                    finally claim the healthier, happier you!
                  </p>
                </div>
                <button
                  className="btn1 btn0 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-duration={1600}
                  data-aos-easing="ease-in-out"
                >
                  Free Trial Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FitnessGoal;
