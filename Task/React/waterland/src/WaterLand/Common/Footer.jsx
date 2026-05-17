import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div>
        {/* Footer Start */}
        <div
          className="container-fluid footer py-5 wow fadeIn"
          data-wow-delay="0.2s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-6 col-xl-4">
                <div className="footer-item">
                  <NavLink to="/" className="p-0">
                    <h4 className="text-white mb-4">
                      <i className="fas fa-swimmer text-primary me-3" />
                      WaterLand
                    </h4>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                  </NavLink>
                  <p className="mb-2">
                    WaterLand is a family-friendly water and amusement park built for full-day fun, safe experiences, and memorable group outings.
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-map-marker-alt text-primary me-3" />
                    <p className="text-white mb-0">Riverfront Road, Ahmedabad, India</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-envelope text-primary me-3" />
                    <p className="text-white mb-0">hello@waterlandpark.com</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa fa-phone-alt text-primary me-3" />
                    <p className="text-white mb-0">(+012) 3456 7890</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-2">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Quick Links</h4>
                  <NavLink to="/About">
                    <i className="fas fa-angle-right me-2" /> About Us
                  </NavLink>
                  <NavLink to="/Feature">
                    <i className="fas fa-angle-right me-2" /> Feature
                  </NavLink>
                  <NavLink to="/Attraction">
                    <i className="fas fa-angle-right me-2" /> Attractions
                  </NavLink>
                  <NavLink to="/Ticket">
                    <i className="fas fa-angle-right me-2" /> Tickets
                  </NavLink>
                  <NavLink to="/Blog">
                    <i className="fas fa-angle-right me-2" /> Blog
                  </NavLink>
                  <NavLink to="/Contact">
                    <i className="fas fa-angle-right me-2" /> Contact us
                  </NavLink>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-2">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Support</h4>
                  <NavLink to="/About">
                    <i className="fas fa-angle-right me-2" /> Privacy Policy
                  </NavLink>
                  <NavLink to="/About">
                    <i className="fas fa-angle-right me-2" /> Terms &amp;
                    Conditions
                  </NavLink>
                  <NavLink to="/About">
                    <i className="fas fa-angle-right me-2" /> Disclaimer
                  </NavLink>
                  <NavLink to="/Contact">
                    <i className="fas fa-angle-right me-2" /> Support
                  </NavLink>
                  <NavLink to="/Contact">
                    <i className="fas fa-angle-right me-2" /> FAQ
                  </NavLink>
                  <NavLink to="/Contact">
                    <i className="fas fa-angle-right me-2" /> Help
                  </NavLink>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-4">
                <div className="footer-item">
                  <h4 className="text-white mb-4">Opening Hours</h4>
                  <div className="opening-date mb-3 pb-3">
                    <div className="opening-clock flex-shrink-0">
                      <h6 className="text-white mb-0 me-auto">
                        Monday - Friday:
                      </h6>
                      <p className="mb-0">
                        <i className="fas fa-clock text-primary me-2" /> 11:00
                        AM - 16:00 PM
                      </p>
                    </div>
                    <div className="opening-clock flex-shrink-0">
                      <h6 className="text-white mb-0 me-auto">
                        Satur - Sunday:
                      </h6>
                      <p className="mb-0">
                        <i className="fas fa-clock text-primary me-2" /> 09:00
                        AM - 17:00 PM
                      </p>
                    </div>
                    <div className="opening-clock flex-shrink-0">
                      <h6 className="text-white mb-0 me-auto">Holiday:</h6>
                      <p className="mb-0">
                        <i className="fas fa-clock text-primary me-2" /> 09:00
                        AM - 17:00 PM
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white mb-2">Payment Accepted</p>
                    <img
                      src="img/payment.png"
                      className="img-fluid"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Copyright Start */}
        <div className="container-fluid copyright py-4">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 text-center text-md-start mb-md-0">
                <span className="text-body">
                  <NavLink to="/" className="border-bottom text-white">
                    <i className="fas fa-copyright text-light me-2" />
                    WaterLand
                  </NavLink>
                  , All right reserved.
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end text-body">
                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                Crafted for a front-end internship showcase and interactive demo experience.
              </div>
            </div>
          </div>
        </div>
        {/* Copyright End */}
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-primary btn-lg-square rounded-circle back-to-top"
        >
          <i className="fa fa-arrow-up" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
