import React from "react";
import Header from "../Common/Header";
import NavHeader from "../Common/NavHeader";
import Footer from "../Common/Footer";
import { NavLink } from "react-router-dom";

function Ticket() {
  return (
    <div>
      <Header />
      <NavHeader title="Ticket Packages" subtitle="Ticket" />

      {/* Ticket Packages Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-12 col-xl-4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="packages-item h-100">
                <h4 className="text-primary">Ticket Packages</h4>
                <h1 className="display-5 mb-4">
                  Choose The Best Packages For Your Family
                </h1>
                <p className="mb-4">
                  Our ticket packages are designed for flexible budgets, family comfort, and a full day of easy access to WaterLand's top attractions.
                </p>
                <p>
                  <i className="fa fa-check text-primary me-2" />
                  Best Waterpark in the world
                </p>
                <p>
                  <i className="fa fa-check text-primary me-2" />
                  Best Packages For Your Family
                </p>
                <p>
                  <i className="fa fa-check text-primary me-2" />
                  Enjoy Various Kinds of Water Park
                </p>
                <p className="mb-5">
                  <i className="fa fa-check text-primary me-2" />
                  Win Up To 3 Free All Day Tickets
                </p>
                <NavLink to="/Contact" className="btn btn-primary rounded-pill py-3 px-5">
                  {" "}
                  Book Now
                </NavLink>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="pricing-item bg-dark rounded text-center p-5 h-100">
                <div className="pb-4 border-bottom">
                  <h2 className="mb-4 text-primary">Family Packages</h2>
                  <p className="mb-4">
                    Ideal for families who want more comfort, more access, and more value in one visit.
                  </p>
                  <h2 className="mb-0 text-primary">
                    $260,90
                    <span className="text-body fs-5 fw-normal">/family</span>
                  </h2>
                </div>
                <div className="py-4">
                  <p className="mb-4">
                    <i className="fa fa-check text-primary me-2" />
                    All Access To Waterpark
                  </p>
                  <p className="mb-4">
                    <i className="fa fa-check text-primary me-2" />
                    Get Two Gazebo
                  </p>
                  <p className="mb-4">
                    <i className="fa fa-check text-primary me-2" />
                    Free Soft Drinks
                  </p>
                  <p className="mb-4">
                    <i className="fa fa-check text-primary me-2" />
                    Get Four Lockers
                  </p>
                  <p className="mb-4">
                    <i className="fa fa-check text-primary me-2" />
                    Free Four Towels
                  </p>
                </div>
                <NavLink to="/Contact" className="btn btn-light rounded-pill py-3 px-5">
                  {" "}
                  Book Now
                </NavLink>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="pricing-item bg-primary rounded text-center p-5 h-100">
                <div className="pb-4 border-bottom">
                  <h2 className="text-dark mb-4">Basic Packages</h2>
                  <p className="text-white mb-4">
                    A simple and affordable option for individual guests who want a fun, flexible park day.
                  </p>
                  <h2 className="text-dark mb-0">
                    $60,90
                    <span className="text-white fs-5 fw-normal">/person</span>
                  </h2>
                </div>
                <div className="text-white py-4">
                  <p className="mb-4">
                    <i className="fa fa-check text-dark me-2" />
                    Get Small Gazebo
                  </p>
                  <p className="mb-4">
                    <i className="fa fa-check text-dark me-2" />
                    Free Soft Drink
                  </p>
                  <p className="mb-4">
                    <i className="fa fa-check text-dark me-2" />
                    Get One Locker
                  </p>
                  <p className="mb-4">
                    <i className="fa fa-check text-dark me-2" />
                    Free Towel
                  </p>
                </div>
                <NavLink to="/Contact" className="btn btn-dark rounded-pill py-3 px-5">
                  {" "}
                  Book Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ticket Packages End */}

      <Footer />
    </div>
  );
}

export default Ticket;
