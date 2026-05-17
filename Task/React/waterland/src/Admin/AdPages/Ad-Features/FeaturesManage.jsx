import React, { useEffect, useState } from 'react';
import AdHeader from '../../AdCommon/AdHeader';
import AdNavHeader from '../../AdCommon/AdNavHeader';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function FeaturesManage() {
  const [features, setfeatures] = useState([]);

  const [featuredata, setfeaturedata] = useState({
    id: "",
    title: "",
    description: "",
    img: ""
  });

  const [updatedata, setupdatedata] = useState({
    id: "",
    title: "",
    description: "",
    img: ""
  });

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Features");
    setfeatures(res.data);
  };

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/Features/${id}`);
    setfeaturedata(res.data);
  };

  const deletedata = async (id) => {
    await axios.delete(`http://localhost:3000/Features/${id}`);
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

  const submitdata = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:3000/Features/${updatedata.id}`, updatedata);
    fetchdata();

    setupdatedata({
      id: "",
      title: "",
      description: "",
      img: ""
    });
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Manage Features" subtitle="Features" />

      <section className="admin-surface py-5">
        <div className="container py-5">
          <div className="admin-panel-card">
            <div className="admin-panel-head">
              <div>
                <span className="admin-kicker">Content Control</span>
                <h1>Features Management</h1>
                <p>Review, edit, and remove the feature cards shown on the public WaterLand pages.</p>
              </div>
              <NavLink to="/FeaturesAdd" className="btn admin-btn-primary d-inline-flex align-items-center gap-2 shadow">
                <i className="fas fa-plus-circle fs-5"></i> Add New Feature
              </NavLink>
            </div>

            <div className="admin-table-wrap">
              <table className="table admin-table align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col"><i className="fas fa-hashtag me-2 text-primary"></i>ID</th>
                    <th scope="col"><i className="fas fa-image me-2 text-primary"></i>Feature</th>
                    <th scope="col"><i className="fas fa-align-left me-2 text-primary"></i>Description</th>
                    <th scope="col"><i className="fas fa-tools me-2 text-primary"></i>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {features && features.map((item) => (
                    <tr key={item.id}>
                      <th scope="row" className="admin-id-cell">{item.id}</th>
                      <td>
                        <div className="admin-feature-title">{item.title}</div>
                      </td>
                      <td className="admin-description-cell">{item.description}</td>
                      <td>
                        <div className="admin-table-actions">
                          <button className="btn admin-btn-success d-inline-flex align-items-center gap-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#featureViewModal" onClick={() => getdata(item.id)}><i className="fas fa-eye"></i> View</button>
                          <button className="btn admin-btn-warning d-inline-flex align-items-center gap-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#featureEditModal" onClick={() => openmodal(item)}><i className="fas fa-edit"></i> Edit</button>
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

      <div className="modal fade" id="featureViewModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content admin-modal">
            <div className="modal-body p-0">
              <div className="admin-preview-card">
                <div className="admin-preview-media">
                  <img
                    src={featuredata.img}
                    className="w-100 h-100"
                    alt="Feature"
                  />
                </div>
                <div className="admin-preview-copy">
                  <span className="admin-kicker">Feature Preview</span>
                  <h2>{featuredata.title}</h2>
                  <p>{featuredata.description}</p>
                  <div className="admin-action-row">
                    <button type="button" className="btn admin-btn-primary" data-bs-dismiss="modal">Looks Good</button>
                    <button type="button" className="btn admin-btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="featureEditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content admin-modal">
            <div className="modal-body">
              <div className="admin-form-card admin-form-card--wide admin-modal-form">
                <div className="admin-section-heading text-center">
                  <span className="admin-kicker">Update Content</span>
                  <h1>Edit Feature</h1>
                  <p>Refine the title, image, or description before publishing the updated feature card.</p>
                </div>

                <form onSubmit={submitdata}>
                  <div className="row g-4">
                    <div className="col-12">
                      <label htmlFor="featureTitle" className="admin-label">Feature Title</label>
                      <input type="text" name="title" value={updatedata.title} onChange={changedata} className="form-control admin-input" id="featureTitle" placeholder="Enter feature title" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="featureImage" className="admin-label">Image URL</label>
                      <input type="url" name="img" value={updatedata.img} onChange={changedata} className="form-control admin-input" id="featureImage" placeholder="Paste image URL" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="featureMessage" className="admin-label">Description</label>
                      <textarea className="form-control admin-input admin-textarea" name="description" value={updatedata.description} onChange={changedata} id="featureMessage" placeholder="Write a short feature description" />
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

export default FeaturesManage;
