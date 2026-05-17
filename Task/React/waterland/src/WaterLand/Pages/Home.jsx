import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Helmet } from "react-helmet";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Home() {
  const [team, setteam] = useState([]);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    const res = await axios.get("http://localhost:3000/team");
    setteam(res.data);
  };

  return (
    <div>
      <Header />

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
        {/* Carousel Start */}
        <div className="header-carousel owl-carousel">
          <div className="header-carousel-item">
            <img
              src="img/carousel-1.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="carousel-caption">
              <div className="container align-items-center py-4">
                <div className="row g-5 align-items-center">
                  <div
                    className="col-xl-7 fadeInLeft animated"
                    data-animation="fadeInLeft"
                    data-delay="1s"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="text-start">
                      <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Welcome To WaterLand
                      </h4>
                      <h1 className="display-4 text-uppercase text-white mb-4">
                        The Biggest Theme &amp; Amusement Park
                      </h1>
                      <p className="mb-4 fs-5">
                        Spend the day exploring thrilling rides, refreshing pools, family zones, and resort-style spaces designed for unforgettable group fun.
                      </p>
                      <div className="d-flex flex-shrink-0">
                        <NavLink
                          className="btn btn-primary rounded-pill text-white py-3 px-5"
                          to="/Ticket"
                        >
                          Our Packages
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-5 fadeInRight animated"
                    data-animation="fadeInRight"
                    data-delay="1s"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="ticket-form p-5">
                      <h2 className="text-dark text-uppercase mb-4">
                        book your ticket
                      </h2>
                      <form>
                        <div className="row g-4">
                          <div className="col-12">
                            <input
                              type="text"
                              className="form-control border-0 py-2"
                              id="name"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="col-12 col-xl-6">
                            <input
                              type="email"
                              className="form-control border-0 py-2"
                              id="email"
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="col-12 col-xl-6">
                            <input
                              type="phone"
                              className="form-control border-0 py-2"
                              id="phone"
                              placeholder="Phone"
                            />
                          </div>
                          <div className="col-12">
                            <select
                              className="form-select border-0 py-2"
                              aria-label="Default select example"
                            >
                              <option selected>Select Packages</option>
                              <option value={1}>Family Packages</option>
                              <option value={2}>Basic Packages</option>
                              <option value={3}>Premium Packages</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <input
                              className="form-control border-0 py-2"
                              type="date"
                            />
                          </div>
                          <div className="col-12">
                            <input
                              type="number"
                              className="form-control border-0 py-2"
                              id="number"
                              placeholder="Guest"
                            />
                          </div>
                          <div className="col-12">
                            <button
                              type="button"
                              className="btn btn-primary w-100 py-2 px-5"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-carousel-item">
            <img
              src="img/carousel-2.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
            <div className="carousel-caption">
              <div className="container py-4">
                <div className="row g-5 align-items-center">
                  <div
                    className="col-xl-7 fadeInLeft animated"
                    data-animation="fadeInLeft"
                    data-delay="1s"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="text-start">
                      <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Welcome To WaterLand
                      </h4>
                      <h1 className="display-4 text-uppercase text-white mb-4">
                        The Greatest Water and Amusement Park
                      </h1>
                      <p className="mb-4 fs-5">
                        From fast slides to relaxing river rides, WaterLand brings together excitement, comfort, and family-friendly experiences in one destination.
                      </p>
                      <div className="d-flex flex-shrink-0">
                        <NavLink
                          className="btn btn-primary rounded-pill text-white py-3 px-5"
                          to="/Ticket"
                        >
                          Our Packages
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-5 fadeInRight animated"
                    data-animation="fadeInRight"
                    data-delay="1s"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="ticket-form p-5">
                      <h2 className="text-dark text-uppercase mb-4">
                        book your ticket
                      </h2>
                      <form>
                        <div className="row g-4">
                          <div className="col-12">
                            <input
                              type="text"
                              className="form-control border-0 py-2"
                              id="name"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="col-12 col-xl-6">
                            <input
                              type="email"
                              className="form-control border-0 py-2"
                              id="email"
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="col-12 col-xl-6">
                            <input
                              type="phone"
                              className="form-control border-0 py-2"
                              id="phone"
                              placeholder="Phone"
                            />
                          </div>
                          <div className="col-12">
                            <select
                              className="form-select border-0 py-2"
                              aria-label="Default select example"
                            >
                              <option selected>Select Packages</option>
                              <option value={1}>Family Packages</option>
                              <option value={2}>Basic Packages</option>
                              <option value={3}>Premium Packages</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <input
                              className="form-control border-0 py-2"
                              type="date"
                            />
                          </div>
                          <div className="col-12">
                            <input
                              type="number"
                              className="form-control border-0 py-2"
                              id="number"
                              placeholder="Guest"
                            />
                          </div>
                          <div className="col-12">
                            <button
                              type="button"
                              className="btn btn-primary w-100 py-2 px-5"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel End */}
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
        {/* About Start */}
        <div className="container-fluid about pb-5">
          <div className="container pb-5">
            <div className="row g-5">
              <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
                <div>
                  <h4 className="text-primary">About Waterland</h4>
                  <h1 className="display-5 mb-4">
                    The Best Theme &amp; Amusement Park For Your Family
                  </h1>
                  <p className="mb-5">
                    WaterLand is designed as a complete family destination where thrilling attractions, relaxing spaces, and thoughtful guest services come together in one place.
                  </p>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3">
                          <i className="fas fa-glass-cheers fa-3x text-primary" />
                        </div>
                        <div>
                          <h4>Food &amp; Drinks</h4>
                          <p>
                            Enjoy refreshing beverages, quick bites, and family meals served throughout the park.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3">
                          <i className="fas fa-dot-circle fa-3x text-primary" />
                        </div>
                        <div>
                          <h4>Many Attractions</h4>
                          <p>
                            Explore slides, splash zones, pools, and classic rides designed for every age group.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3">
                          <i className="fas fa-hand-holding-usd fa-3x text-primary" />
                        </div>
                        <div>
                          <h4>Affordable Price</h4>
                          <p>
                            Flexible ticket options make group visits and family outings easier to plan.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex">
                        <div className="me-3">
                          <i className="fas fa-lock fa-3x text-primary" />
                        </div>
                        <div>
                          <h4>Safety Lockers</h4>
                          <p>
                            Keep valuables secure while you focus on enjoying the attractions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="position-relative rounded">
                  <div className="rounded" style={{ marginTop: 40 }}>
                    <div className="row g-0">
                      <div className="col-lg-12">
                        <div className="rounded mb-4">
                          <img
                            src="img/about.jpg"
                            className="img-fluid rounded w-100"
                            alt
                          />
                        </div>
                        <div className="row gx-4 gy-0">
                          <div className="col-6">
                            <div className="counter-item bg-primary rounded text-center p-4 h-100">
                              <div className="counter-item-icon mx-auto mb-3">
                                <i className="fas fa-thumbs-up fa-3x text-white" />
                              </div>
                              <div className="counter-counting mb-3">
                                <span
                                  className="text-white fs-2 fw-bold"
                                  data-toggle="counter-up"
                                >
                                  150
                                </span>
                                <span className="h1 fw-bold text-white">
                                  K +
                                </span>
                              </div>
                              <h5 className="text-white mb-0">
                                Happy Visitors
                              </h5>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="counter-item bg-dark rounded text-center p-4 h-100">
                              <div className="counter-item-icon mx-auto mb-3">
                                <i className="fas fa-certificate fa-3x text-white" />
                              </div>
                              <div className="counter-counting mb-3">
                                <span
                                  className="text-white fs-2 fw-bold"
                                  data-toggle="counter-up"
                                >
                                  122
                                </span>
                                <span className="h1 fw-bold text-white">
                                  {" "}
                                  +
                                </span>
                              </div>
                              <h5 className="text-white mb-0">
                                Awards Won
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded bg-primary p-4 position-absolute d-flex justify-content-center"
                    style={{
                      width: "90%",
                      height: 80,
                      top: "-40px",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <h3 className="mb-0 text-white">20 Years Experience</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Service Start */}
        <div className="container-fluid service py-5">
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
                  <NavLink
                    to="/Contact"
                    className="btn btn-primary rounded-pill py-3 px-5"
                  >
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
        {/* Attractions Start */}
        <div className="container-fluid attractions py-5">
          <div className="container attractions-section py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Attractions</h4>
              <h1 className="display-5 text-white mb-4">
                Explore WaterLand Park Attractions
              </h1>
              <p className="text-white mb-0">
                From fast-paced thrill rides to classic family favorites, our attractions are designed to keep every age group entertained throughout the day.
              </p>
            </div>
            <div
              className="owl-carousel attractions-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                className="attractions-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <img
                  src="img/attraction-1.jpg"
                  className="img-fluid rounded w-100"
                  alt
                />
                <NavLink to="/Attraction" className="attractions-name">
                  Roller Coaster
                </NavLink>
              </div>
              <div
                className="attractions-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <img
                  src="img/attraction-2.jpg"
                  className="img-fluid rounded w-100"
                  alt
                />
                <NavLink to="/Attraction" className="attractions-name">
                  Carousel
                </NavLink>
              </div>
              <div
                className="attractions-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <img
                  src="img/attraction-3.jpg"
                  className="img-fluid rounded w-100"
                  alt
                />
                <NavLink to="/Attraction" className="attractions-name">
                  Arcade Game
                </NavLink>
              </div>
              <div
                className="attractions-item wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <img
                  src="img/attraction-4.jpg"
                  className="img-fluid rounded w-100"
                  alt
                />
                <NavLink to="/Attraction" className="attractions-name">
                  Hanging Carousel
                </NavLink>
              </div>
              <div
                className="attractions-item wow fadeInUp"
                data-wow-delay="1s"
              >
                <img
                  src="img/attraction-2.jpg"
                  className="img-fluid rounded w-100"
                  alt
                />
                <NavLink to="/Attraction" className="attractions-name">
                  Carousel
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* Attractions End */}
        {/* Gallery Start */}
        <div className="container-fluid gallery pb-5">
          <div className="container pb-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Our Gallery</h4>
              <h1 className="display-5 mb-4">Captured Moments In Waterland</h1>
              <p className="mb-0">
                Explore snapshots from across the park, from splash-filled rides and family moments to relaxing corners that make every visit memorable.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-1.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-1.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-1"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-2.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-2.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-2"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 wow fadeInUp" data-wow-delay="0.6s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-3.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-3.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-3"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 wow fadeInUp" data-wow-delay="0.2s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-4.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-4.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-4"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-5.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-5.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-5"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="gallery-item">
                  <img
                    src="img/gallery-6.jpg"
                    className="img-fluid rounded w-100 h-100"
                    alt
                  />
                  <div className="search-icon">
                    <a
                      href="img/gallery-6.jpg"
                      className="btn btn-light btn-lg-square rounded-circle"
                      data-lightbox="Gallery-6"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery End */}
        {/* Blog Start */}
        <div className="container-fluid blog pb-5">
          <div className="container pb-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Our Blog</h4>
              <h1 className="display-5 mb-4">Latest Blog &amp; Articles</h1>
              <p className="mb-0">
                Read practical tips, family guides, and park updates that help guests plan a better visit and enjoy more of what WaterLand offers.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-item">
                  <div className="blog-img">
                    <NavLink to="/Blog">
                      <img
                        src="img/blog-2.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt="Image"
                      />
                    </NavLink>
                    <div className="blog-category py-2 px-4">Park Guide</div>
                    <div className="blog-date">
                      <i className="fas fa-clock me-2" />
                      August 19, 2025
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <NavLink to="/Blog" className="h4 d-inline-block mb-4">
                      Why kids never want to leave the splash zone
                    </NavLink>
                    <p className="mb-4">
                      Splash pads, mini slides, and wave pools turn a short stop into the most repeated part of the day.
                    </p>
                    <NavLink
                      to="/Blog"
                      className="btn btn-primary rounded-pill py-2 px-4"
                    >
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="blog-item">
                  <div className="blog-img">
                    <NavLink to="/Blog">
                      <img
                        src="img/blog-3.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt="Image"
                      />
                    </NavLink>
                    <div className="blog-category py-2 px-4">Season Tips</div>
                    <div className="blog-date">
                      <i className="fas fa-clock me-2" />
                      August 19, 2025
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <NavLink to="/Blog" className="h4 d-inline-block mb-4">
                      5 Ways To Enjoy Waterland This Spring Break
                    </NavLink>
                    <p className="mb-4">
                      Plan the right ride order, take mid-day breaks, and use lockers wisely to enjoy more of the park with less stress.
                    </p>
                    <NavLink
                      to="/Blog"
                      className="btn btn-primary rounded-pill py-2 px-4"
                    >
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div className="blog-item">
                  <div className="blog-img">
                    <NavLink to="/Blog">
                      <img
                        src="img/blog-1.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt="Image"
                      />
                    </NavLink>
                    <div className="blog-category py-2 px-4">Family Tips</div>
                    <div className="blog-date">
                      <i className="fas fa-clock me-2" />
                      August 19, 2025
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <NavLink to="/Blog" className="h4 d-inline-block mb-4">
                      3 Tips for Your Family Spring Break at Amusement Park
                    </NavLink>
                    <p className="mb-4">
                      A few simple planning choices can make family visits smoother, more comfortable, and more enjoyable from start to finish.
                    </p>
                    <NavLink
                      to="/Blog"
                      className="btn btn-primary rounded-pill py-2 px-4"
                    >
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        {/* Team Start */}
        <div className="container-fluid team pb-5">
          <div className="container pb-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Meet Our Team</h4>
              <h1 className="display-5 mb-4">
                Our Waterland Park Dedicated Team Member
              </h1>
              <p className="mb-0">
                Our team works behind the scenes and on the ground to make each visit welcoming, organized, and safe.
              </p>
            </div>
            <div className="row g-4 justify-content-center">
              {team &&
                team.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="team-item team-card p-4 h-100">
                        <div className="team-content team-card-content">
                          <div className="team-card-header border-bottom pb-4">
                            <div className="text-start team-card-copy">
                              <h4 className="mb-0">{data.name}</h4>
                              <p className="mb-0">{data.role}</p>
                            </div>
                            <div className="team-card-media">
                              <img
                                src={data.img}
                                className="img-fluid rounded team-card-image"
                                alt
                              />
                            </div>
                          </div>
                          <div className="team-icon rounded-pill my-4 p-3">
                            <a
                              className="btn btn-primary btn-sm-square rounded-circle me-3"
                              href
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a
                              className="btn btn-primary btn-sm-square rounded-circle me-3"
                              href
                            >
                              <i className="fab fa-twitter" />
                            </a>
                            <a
                              className="btn btn-primary btn-sm-square rounded-circle me-3"
                              href
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                            <a
                              className="btn btn-primary btn-sm-square rounded-circle me-0"
                              href
                            >
                              <i className="fab fa-instagram" />
                            </a>
                          </div>
                          <p className="team-card-desc text-center mb-0">{data.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* Team End */}
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
      </div>

      <Footer />
    </div>
  );
}

export default Home;
