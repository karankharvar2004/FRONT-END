import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import NavHeader from "../Common/NavHeader";
import Footer from "../Common/Footer";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Blog() {

  const [blog, setblog] = useState([]);

  useEffect(() => {
    fetchdata()
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/blog");
    console.log(res.data);
    setblog(res.data);
  }

  return (
    <div>
      <Header />
      <NavHeader title="Our Blog" subtitle="Blog" />

      {/* Blog Start */}
      <div className="container-fluid blog py-5">
        <div className="container py-5">
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
            <div className="col-12">
              <div className="d-flex flex-row flex-nowrap overflow-auto">
                {
                  blog && blog.map((data) => (
                    <div className="card me-3" style={{ minWidth: '300px'}}>
                      <div className="blog-item">
                        <div className="blog-img">
                          <NavLink to="/Blog">
                            <img
                              src={data.img}
                              className="img-fluid w-100 rounded-top"
                              alt="Image"
                            />
                          </NavLink>
                          <div className="blog-category py-2 px-4">{data.badge}</div>
                          <div className="blog-date">
                            <i className="fas fa-clock me-2" />
                            {data.date}
                          </div>
                        </div>
                        <div className="blog-content p-4">
                          <NavLink to="/Blog" className="h5 d-inline-block mb-3">
                            {data.title}
                          </NavLink>
                          <p className="mb-3">
                            {data.description}
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
                  ))
                }
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Blog End */}

      <Footer />
    </div>
  );
}

export default Blog;
