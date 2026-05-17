import React, { useEffect, useState } from 'react';
import AdHeader from '../../AdCommon/AdHeader';
import AdNavHeader from '../../AdCommon/AdNavHeader';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function BlogManage() {
  const [blog, setblog] = useState([]);

  const [blogdata, setblogdata] = useState({
    id: "",
    badge: "",
    img: "",
    date: "",
    title: "",
    description: ""
  });

  const [updatedata, setupdatedata] = useState({
    id: "",
    badge: "",
    img: "",
    date: "",
    title: "",
    description: ""
  });

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/blog");
    setblog(res.data);
  };

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/blog/${id}`);
    setblogdata(res.data);
  };

  const deletedata = async (id) => {
    await axios.delete(`http://localhost:3000/blog/${id}`);
    fetchdata();
  };

  const openmodal = (item) => {
    setupdatedata(item);
  };

  const changedata = (e) => {
    setupdatedata({
      ...updatedata,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:3000/blog/${updatedata.id}`, updatedata);
    fetchdata();

    setupdatedata({
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
      <AdNavHeader title="Manage Blogs" subtitle="Blogs" />

      <section className="admin-surface py-5">
        <div className="container py-5">
          <div className="admin-panel-card">
            <div className="admin-panel-head">
              <div>
                <span className="admin-kicker">Editorial Control</span>
                <h1>Blogs Management</h1>
                <p>Manage article cards, category labels, dates, and summaries shown in the WaterLand blog sections.</p>
              </div>
              <NavLink to="/BlogAdd" className="btn admin-btn-primary d-inline-flex align-items-center gap-2 shadow">
                <i className="fas fa-pen-nib fs-5"></i> Add New Blog
              </NavLink>
            </div>

            <div className="admin-table-wrap">
              <table className="table admin-table align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col"><i className="fas fa-hashtag me-2 text-primary"></i>ID</th>
                    <th scope="col"><i className="fas fa-tag me-2 text-primary"></i>Badge</th>
                    <th scope="col"><i className="fas fa-calendar-alt me-2 text-primary"></i>Date</th>
                    <th scope="col"><i className="fas fa-heading me-2 text-primary"></i>Title</th>
                    <th scope="col"><i className="fas fa-align-left me-2 text-primary"></i>Description</th>
                    <th scope="col"><i className="fas fa-tools me-2 text-primary"></i>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blog && blog.map((item) => (
                    <tr key={item.id}>
                      <th scope="row" className="admin-id-cell">{item.id}</th>
                      <td className="admin-role-cell">{item.badge}</td>
                      <td className="admin-date-cell">{item.date}</td>
                      <td>
                        <div className="admin-feature-title">{item.title}</div>
                      </td>
                      <td className="admin-description-cell">{item.description}</td>
                      <td>
                        <div className="admin-table-actions">
                          <button className="btn admin-btn-success d-inline-flex align-items-center gap-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#blogViewModal" onClick={() => getdata(item.id)}><i className="fas fa-eye"></i> View</button>
                          <button className="btn admin-btn-warning d-inline-flex align-items-center gap-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#blogEditModal" onClick={() => openmodal(item)}><i className="fas fa-edit"></i> Edit</button>
                          <button className="btn admin-btn-danger d-inline-flex align-items-center gap-2 shadow-sm" onClick={() => deletedata(item.id)}><i className="fas fa-trash-alt"></i> Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="blogViewModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content admin-modal">
            <div className="modal-body">
              <div className="admin-form-card admin-modal-form">
                <div className="admin-section-heading text-center">
                  <span className="admin-kicker">Article Preview</span>
                  <h1>View Blog</h1>
                </div>

                <div className="card admin-blog-preview border-0">
                  <div className="blog-item">
                    <div className="blog-img">
                      <img
                        src={blogdata.img}
                        className="img-fluid w-100 rounded-top"
                        alt="Blog"
                      />
                      <div className="blog-category py-2 px-4">{blogdata.badge}</div>
                      <div className="blog-date">
                        <i className="fas fa-clock me-2" />
                        {blogdata.date}
                      </div>
                    </div>
                    <div className="blog-content p-4">
                      <div className="h4 d-inline-block mb-4">{blogdata.title}</div>
                      <p className="mb-4">{blogdata.description}</p>
                    </div>
                  </div>
                </div>

                <div className="admin-action-row">
                  <button type="button" className="btn admin-btn-primary" data-bs-dismiss="modal">Looks Good</button>
                  <button type="button" className="btn admin-btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="blogEditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content admin-modal">
            <div className="modal-body">
              <div className="admin-form-card admin-form-card--wide admin-modal-form">
                <div className="admin-section-heading text-center">
                  <span className="admin-kicker">Update Article</span>
                  <h1>Edit Blog</h1>
                  <p>Update category labels, scheduling, titles, visuals, and summaries before pushing changes live.</p>
                </div>

                <form onSubmit={submit}>
                  <div className="row g-4">
                    <div className="col-lg-12 col-xl-6">
                      <label htmlFor="editBlogBadge" className="admin-label">Category Badge</label>
                      <input type="text" name="badge" value={updatedata.badge} onChange={changedata} className="form-control admin-input" id="editBlogBadge" placeholder="Enter badge label" />
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <label htmlFor="editBlogDate" className="admin-label">Publish Date</label>
                      <input type="date" name="date" value={updatedata.date} onChange={changedata} className="form-control admin-input" id="editBlogDate" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="editBlogTitle" className="admin-label">Blog Title</label>
                      <input type="text" name="title" value={updatedata.title} onChange={changedata} className="form-control admin-input" id="editBlogTitle" placeholder="Enter blog title" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="editBlogImage" className="admin-label">Image URL</label>
                      <input type="url" name="img" value={updatedata.img} onChange={changedata} className="form-control admin-input" id="editBlogImage" placeholder="Paste image URL" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="editBlogDesc" className="admin-label">Description</label>
                      <textarea className="form-control admin-input admin-textarea" name="description" value={updatedata.description} onChange={changedata} id="editBlogDesc" placeholder="Write a short article summary" />
                    </div>
                    <div className="col-12">
                      <div className="admin-action-row">
                        <button className="btn admin-btn-primary" type="submit" data-bs-dismiss="modal">Save Changes</button>
                        <button className="btn admin-btn-secondary" type="button" data-bs-dismiss="modal">Cancel</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogManage;
