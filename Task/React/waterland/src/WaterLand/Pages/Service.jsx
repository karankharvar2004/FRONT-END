import React from "react";
import Header from "../Common/Header";
import NavHeader from "../Common/NavHeader";
import Footer from "../Common/Footer";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function Service() {
  return (
    <div>
      <Header />
      <NavHeader title="Our Services" subtitle="Service" />

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

      <div>
        {/* Service Start */}
        <div
          className="container-fluid service py-5"
          style={{ marginTop: 100 }}
        >
          <div className="container service-section py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Our Service</h4>
              <h1 className="display-5 text-white mb-4">
                Explore Waterland Park service
              </h1>
              <p className="mb-0 text-white">
                Our services are built to make every visit smoother, safer, and more enjoyable, whether you are here for a quick day trip or a full family outing.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-0 col-md-1 col-lg-2 col-xl-2" />
              <div
                className="col-md-10 col-lg-8 col-xl-8 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-days p-4">
                  <div className="py-2 border-bottom border-top d-flex align-items-center justify-content-between flex-wrap">
                    <h4 className="mb-0 pb-2 pb-sm-0">Monday - Friday</h4>{" "}
                    <p className="mb-0">
                      <i className="fas fa-clock text-primary me-2" />
                      11:00 AM - 16:00 PM
                    </p>
                  </div>
                  <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                    <h4 className="mb-0 pb-2 pb-sm-0">Saturday - Sunday</h4>{" "}
                    <p className="mb-0">
                      <i className="fas fa-clock text-primary me-2" />
                      09:00 AM - 17:00 PM
                    </p>
                  </div>
                  <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                    <h4 className="mb-0">Holiday</h4>{" "}
                    <p className="mb-0">
                      <i className="fas fa-clock text-primary me-2" />
                      09:00 AM - 17:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-0 col-md-1 col-lg-2 col-xl-2" />
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="service-item p-4">
                  <div className="service-content">
                    <div className="mb-4">
                      <i className="fas fa-home fa-4x" />
                    </div>
                    <NavLink to="/Service" className="h4 d-inline-block mb-3">
                      Private Gazebo
                    </NavLink>
                    <p className="mb-0">
                      A shaded and comfortable base for families who want privacy, rest, and a place to regroup between rides.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="service-item p-4">
                  <div className="service-content">
                    <div className="mb-4">
                      <i className="fas fa-utensils fa-4x" />
                    </div>
                    <NavLink to="/Service" className="h4 d-inline-block mb-3">
                      Delicious Food
                    </NavLink>
                    <p className="mb-0">
                      Fresh snacks, cooling drinks, and satisfying meals are available throughout the park for guests of all ages.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="service-item p-4">
                  <div className="service-content">
                    <div className="mb-4">
                      <i className="fas fa-door-closed fa-4x" />
                    </div>
                    <NavLink to="/Service" className="h4 d-inline-block mb-3">
                      Safety Lockers
                    </NavLink>
                    <p className="mb-0">
                      Secure lockers let you enjoy the water worry-free while keeping valuables protected and close by.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="service-item p-4">
                  <div className="service-content">
                    <div className="mb-4">
                      <i className="fas fa-swimming-pool fa-4x" />
                    </div>
                    <NavLink to="/Service" className="h4 d-inline-block mb-3">
                      River Rides
                    </NavLink>
                    <p className="mb-0">
                      Relax on scenic river rides that offer a slower, refreshing experience between the park's bigger thrills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Feature Start */}
        <div className="container-fluid feature py-5">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="feature-item">
                  <img
                    src="img/feature-1.jpg"
                    className="img-fluid rounded w-100"
                    alt="Image"
                  />
                  <div className="feature-content p-4">
                    <div className="feature-content-inner">
                      <h4 className="text-white">Best Pools</h4>
                      <p className="text-white">
                        Spacious pools, splash zones, and wave areas give every guest a refreshing place to play or unwind.
                      </p>
                      <NavLink
                        to="/Feature"
                        className="btn btn-primary rounded-pill py-2 px-4"
                      >
                        Read More <i className="fa fa-arrow-right ms-1" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-item">
                  <img
                    src="img/feature-2.jpg"
                    className="img-fluid rounded w-100"
                    alt="Image"
                  />
                  <div className="feature-content p-4">
                    <div className="feature-content-inner">
                      <h4 className="text-white">Waterslides</h4>
                      <p className="text-white">
                        High-energy waterslides deliver fast drops, sharp turns, and exciting moments all day long.
                      </p>
                      <NavLink
                        to="/Feature"
                        className="btn btn-primary rounded-pill py-2 px-4"
                      >
                        Read More <i className="fa fa-arrow-right ms-1" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div className="feature-item">
                  <img
                    src="img/feature-3.jpg"
                    className="img-fluid rounded w-100"
                    alt="Image"
                  />
                  <div className="feature-content p-4">
                    <div className="feature-content-inner">
                      <h4 className="text-white">River Rides</h4>
                      <p className="text-white">
                        Gentle river routes create a calm contrast to the park's thrill attractions and are perfect for families.
                      </p>
                      <NavLink
                        to="/Feature"
                        className="btn btn-primary rounded-pill py-2 px-4"
                      >
                        Read More <i className="fa fa-arrow-right ms-1" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Testimonial Start */}
        <div className="container-fluid testimonial py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Testimonials</h4>
              <h1 className="display-5 text-white mb-4">What Our Guests Say</h1>
              <p className="text-white mb-0">
                Our best feedback comes from guests who return with friends and family after a day that felt exciting, easy, and well managed.
              </p>
            </div>
            <div
              className="owl-carousel testimonial-carousel wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-item p-4">
                <p className="text-white fs-4 mb-4">
                  WaterLand gave us a full day of fun without feeling stressful. Every area felt designed with families in mind.
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
                  We appreciated the clean layout, helpful staff, and mix of attractions for both adults and children.
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
                  From booking to departure, the experience felt smooth and professional. It is a strong choice for groups and events.
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
      </div>

      <Footer />
    </div>
  );
}

export default Service;
