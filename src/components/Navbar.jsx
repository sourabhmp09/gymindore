import React from "react";
import logo from "../assets/logo_main-48JSqkPZ.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg  Nav_main ">
        <div className="container align-items-en">
          <a className="logo" href="#">
            <img src={logo} className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li >
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Program
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Memberships
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
            </ul> */}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-2 py-md-3 py-lg-0">
              <li
                className="nav-item aos-init"
                data-aos="fade-down"
                data-aos-duration={800}
                data-aos-easing="ease-in-out"
              >
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li
                className="nav-item aos-init"
                data-aos="fade-down"
                data-aos-duration={1000}
                data-aos-easing="ease-in-out"
              >
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li
                className="nav-item aos-init"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-easing="ease-in-out"
              >
                <a className="nav-link" href="#">
                  Program
                </a>
              </li>
              <li
                className="nav-item aos-init"
                data-aos="fade-down"
                data-aos-duration={1400}
                data-aos-easing="ease-in-out"
              >
                <a className="nav-link" href="#">
                  Memberships
                </a>
              </li>
              <li
                className="nav-item aos-init"
                data-aos="fade-down"
                data-aos-duration={1600}
                data-aos-easing="ease-in-out"
              >
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
            </ul>

            {/* <Link to="signup" className="btn1">signup</Link> */}
            {/* <Link to="/signup">Blogs</Link> */}

            {/* <div className="btn1" onClick={handleShow}>
              Sign Up
            </div> */}
            {/* <div class="container">
              <div className="row">
                <div className="justify-content-md-center col-12 mx-2">
                  <Modal show={show} onHide={handleClose} className="">
                    <Modal.Header closeButton>
                      <Modal.Title>Enter Your Information!</Modal.Title>
                    </Modal.Header>
                    <form action="/">
                      <div className="modal-body">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            required=""
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required=""
                          />
                          <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            required=""
                            aria-describedby="emailHelp"
                          />
                          <div id="emailHelp" className="form-text">
                            Password require 8 characters Must
                          </div>
                        </div>
                        <div className="mb-3 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            required=""
                          />
                          <label
                            className="form-check-label ps-2 pt-1"
                            htmlFor="exampleCheck1"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="submit" className="btn1">
                          Submit
                        </button>
                      </div>
                    </form>
                  </Modal>
                </div>
              </div>
            </div> */}
            <>
              <button className="btn1" onClick={handleShow}>
                signup
              </button>
            </>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="row ">
          <div class="colzz ">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <form action="/">
                <div className="modal-body">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required=""
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      required=""
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      Password require 8 characters Must
                    </div>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                      required=""
                    />
                    <label
                      className="form-check-label ps-2 pt-1"
                      htmlFor="exampleCheck1"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

////////////////
