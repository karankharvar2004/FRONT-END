import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import NavHeader from "../Common/NavHeader";
import Footer from "../Common/Footer";
import axios from "axios";

function Team() {

  const [team, setteam] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/team")
    console.log(res.data)
    setteam(res.data);
  }

  return (
    <div>
      <Header />
      <NavHeader title="Our Team" subtitle="Team" />

      {/* Team Start */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
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
              Behind every smooth park day is a team focused on guest safety, service quality, and creating an atmosphere that families enjoy.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {
              team && team.map((data) => {
                console.log(data);
                return (
                  <div
                    className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                    data-wow-delay="0.2s"
                    key={data.id}
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
                        <p className="team-card-desc text-center mb-0">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* Team End */}
      <Footer />
    </div>
  );
}

export default Team;
