import React from 'react'
import img1 from "../assets/logo_main-48JSqkPZ.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  // console.log(Link
  //   )
  return (
    <>
    <div className="container-fluid Footer pt-5">
  <div className="container">
    <div className="row gx-0 py-4 footer_row1">
      <div className="col-md-4 pb-md-4 pb-lg-0 col-lg-2">
        <div className="footer_col1">
          <h5 className="ft_h5">Company</h5>
          <ul>
            <li>
              {/* <Link hrto="/"/Link> */}
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Why us </Link>
            </li>
            <li>
              <Link to="/">Security</Link>
            </li>
            <li>
              <Link to="/">Partnership</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 pb-md-4 pb-lg-0 col-lg-2">
        <div className="footer_col1">
          <h5 className="ft_h5">Categories</h5>
          <ul>
            <li>
              <Link to="/">Basic Yoga</Link>
            </li>
            <li>
              <Link to="/">Strength Traning</Link>
            </li>
            <li>
              <Link to="/">Body Building</Link>
            </li>
            <li>
              <Link to="/">Weigth Loss</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 pb-md-4 pb-lg-0 col-lg-2">
        <div className="footer_col1">
          <h5 className="ft_h5">Help</h5>
          <ul>
            <li>
              <Link to="/">Account</Link>
            </li>
            <li>
              <Link to="/">Support Center</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 py-md-4 py-lg-0">
        <div className="footer_col2">
          <h5 className="ft_h5">Contact Us</h5>
          <div className="row pb-3">
            <div className="col-1">
              <i className="fa-solid fa-phone" />
            </div>
            <div className="col-11">
              <p>+91  9755589940</p>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-1">
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="col-11">
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-1">
              <i className="fa-solid fa-location-dot" />
            </div>
            <div className="col-11">
              <p>987-B Bank Colony, Indore </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 py-md-4 py-lg-0">
        <div className="footer_col3">
          <h5 className="ft_h5">Subscibe Our Newsletter</h5>
          <form action="#">
            <div className="input-group mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Enter Your Email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                required=""
              />
              
              <button className="" type="submit" id="button-addon2">
                <i className="fa-solid fa-paper-plane" />
              </button>
            </div>
          </form>
          <p>Never miss an update &amp; news to your email.</p>
        </div>
      </div>
    </div>
    <div className="row gx-0  footer_row2 align-items-center py-3 py-md-4 py-lg-3">
      <div className="col-md-3">
        <img
          src={img1}
          alt=""
          className="img-fluid footer_img"
        />
      </div>
      <div className="col-md-6 text-center">
        <p>
          @2024 <span>(sourabh)</span>. All Copyrights reserved.
        </p>
      </div>
      <div className="col-md-3 text-md-end">
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-linkedin" />
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-twitter" />
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Footer