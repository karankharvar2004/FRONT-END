import React from "react";
import Header from "../Common/Header";
import NavHeader from "../Common/NavHeader";
import Footer from "../Common/Footer";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function Attractions() {
  return (
    <div>
      <Header />
      <NavHeader title="Attractions" subtitle="Attractions" />

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

      {/* Attractions Start */}
      <div
        className="container-fluid attractions py-5"
        style={{ marginTop: 100 }}
      >
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
            <p className="text-white mb-0 pb-5">
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
            <div className="attractions-item wow fadeInUp" data-wow-delay="1s">
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

      <Footer />
    </div>
  );
}

export default Attractions;
