import React, { useState } from 'react';
import AdHeader from '../../AdCommon/AdHeader';
import AdNavHeader from '../../AdCommon/AdNavHeader';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

function BlogAdd() {
  const redirect = useNavigate();

  const [form, setform] = useState({
    id: "",
    badge: "",
    img: "",
    date: "",
    title: "",
    description: ""
  });

  const getchange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/blog", form);
    redirect("/BlogManage");

    setform({
      id: "",
      badge: "",
      img: "",
      date: "",
      title: "",
      description: ""
    });
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Add Blogs" subtitle="Blogs" />

      <div className="container py-5">
        <div className="admin-form-shell">
          <div className="admin-form-card admin-form-card--wide">
            <div className="admin-section-heading text-center">
              <span className="admin-kicker">Editorial Studio</span>
              <h1>Create a Blog Post</h1>
              <p>Publish a new article card with category, date, visual, title, and summary for the WaterLand blog pages.</p>
            </div>

            <form onSubmit={submit}>
              <div className="row g-4">
                <div className="col-lg-12 col-xl-6">
                  <label htmlFor="blogBadge" className="admin-label">Category Badge</label>
                  <input type="text" name="badge" value={form.badge} onChange={getchange} className="form-control admin-input" id="blogBadge" placeholder="Enter badge label" />
                </div>
                <div className="col-lg-12 col-xl-6">
                  <label htmlFor="blogDate" className="admin-label">Publish Date</label>
                  <input type="date" name="date" value={form.date} onChange={getchange} className="form-control admin-input" id="blogDate" />
                </div>
                <div className="col-12">
                  <label htmlFor="blogTitle" className="admin-label">Blog Title</label>
                  <input type="text" name="title" value={form.title} onChange={getchange} className="form-control admin-input" id="blogTitle" placeholder="Enter blog title" />
                </div>
                <div className="col-12">
                  <label htmlFor="blogImage" className="admin-label">Image URL</label>
                  <input type="url" name="img" value={form.img} onChange={getchange} className="form-control admin-input" id="blogImage" placeholder="Paste image URL" />
                </div>
                <div className="col-12">
                  <label htmlFor="blogDesc" className="admin-label">Description</label>
                  <textarea className="form-control admin-input admin-textarea" name="description" onChange={getchange} value={form.description} id="blogDesc" placeholder="Write a short article summary" />
                </div>
                <div className="col-12">
                  <div className="admin-action-row">
                    <button className="btn admin-btn-primary" type="submit">Add Blog</button>
                    <NavLink to="/BlogManage" className="btn admin-btn-secondary">View All Blogs</NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogAdd;
