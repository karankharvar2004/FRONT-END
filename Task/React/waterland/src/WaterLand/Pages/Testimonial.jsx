import React from "react";
import Header from "../Common/Header";
import NavHeader from "../Common/NavHeader";
import Footer from "../Common/Footer";
import { Helmet } from "react-helmet";

function Testimonial() {
  return (
    <div>
      <Header />
      <NavHeader title="Testimonials" subtitle="Testimonial" />

      <Helmet>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>

        <script src="js/main.js"></script>
      </Helmet>

      {/* Testimonial Start */}
      <div
        className="container-fluid testimonial py-5"
        style={{ marginTop: 100 }}
      >
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Testimonials</h4>
            <h1 className="display-5 text-white mb-4">What Our Guests Say</h1>
            <p className="text-white mb-0">
              Families, groups, and first-time visitors choose WaterLand for its mix of energy, comfort, and guest-friendly service. Here is what they had to say.
            </p>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                WaterLand made our family outing feel effortless. The rides were exciting, the staff were helpful, and the facilities were clean all day long.
              </p>
              <div className="testimonial-inner">
                <div className="testimonial-img">
                  <img
                    src="img/testimonial-1.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Aisha Khan</h4>
                  <p className="text-start text-white">Travel Blogger</p>
                  <div className="d-flex text-primary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                The package options were practical, the kids loved the water play zone, and we always found a comfortable place to rest between attractions.
              </p>
              <div className="testimonial-inner">
                <div className="testimonial-img">
                  <img
                    src="img/testimonial-2.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Daniel Brooks</h4>
                  <p className="text-start text-white">Parent Visitor</p>
                  <div className="d-flex text-primary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                We booked a group visit and the entire experience felt organized from entry to exit. It is the kind of place people immediately recommend.
              </p>
              <div className="testimonial-inner">
                <div className="testimonial-img">
                  <img
                    src="img/testimonial-3.jpg"
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Meera Patel</h4>
                  <p className="text-start text-white">Event Coordinator</p>
                  <div className="d-flex text-primary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      <Footer />
    </div>
  );
}

export default Testimonial;
