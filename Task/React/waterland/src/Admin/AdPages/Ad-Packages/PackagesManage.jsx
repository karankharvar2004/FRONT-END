import React, { useEffect, useState } from 'react';
import AdHeader from '../../AdCommon/AdHeader';
import AdNavHeader from '../../AdCommon/AdNavHeader';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function PackagesManage() {
  const [packages, setPackages] = useState([]);

  const [packagedata, setPackagedata] = useState({});
  const [updatedata, setupdatedata] = useState({});

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/packages");
    setPackages(res.data);
  };

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/packages/${id}`);
    setPackagedata(res.data);
  };

  const deletedata = async (id) => {
    await axios.delete(`http://localhost:3000/packages/${id}`);
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
    await axios.put(`http://localhost:3000/packages/${updatedata.id}`, updatedata);
    fetchdata();
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Manage Tickets" subtitle="Tickets & Packages" />

      <section className="admin-surface py-5">
        <div className="container py-5">
          <div className="admin-panel-card">
            <div className="admin-panel-head">
              <div>
                <span className="admin-kicker">Sales Control</span>
                <h1>Ticket Packages</h1>
                <p>Manage pricing tiers and package features available to customers.</p>
              </div>
              <NavLink to="/PackagesAdd" className="btn admin-btn-primary d-inline-flex align-items-center gap-2 shadow">
                <i className="fas fa-plus-circle fs-5"></i> Add Package
              </NavLink>
            </div>

            <div className="admin-table-wrap">
              <table className="table admin-table align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col"><i className="fas fa-hashtag me-2 text-primary"></i>ID</th>
                    <th scope="col"><i className="fas fa-ticket-alt me-2 text-primary"></i>Package</th>
                    <th scope="col"><i className="fas fa-dollar-sign me-2 text-primary"></i>Price</th>
                    <th scope="col"><i className="fas fa-align-left me-2 text-primary"></i>Description</th>
                    <th scope="col"><i className="fas fa-tools me-2 text-primary"></i>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {packages && packages.map((item) => (
                    <tr key={item.id}>
                      <th scope="row" className="admin-id-cell">{item.id}</th>
                      <td>
                        <div className="admin-feature-title">{item.title}</div>
                        <div className="small text-muted">{item.subtitle}</div>
                      </td>
                      <td>
                        <span className="badge bg-primary rounded-pill px-3 py-2 fs-6">{item.price}</span>
                      </td>
                      <td className="admin-description-cell">
                        <p className="mb-1 text-truncate" style={{maxWidth: '200px'}}>{item.desc}</p>
                      </td>
                      <td>
                        <div className="admin-table-actions">
                          <button className="btn admin-btn-success d-inline-flex align-items-center gap-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#pkgViewModal" onClick={() => getdata(item.id)}><i className="fas fa-eye"></i> View</button>
                          <button className="btn admin-btn-warning d-inline-flex align-items-center gap-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#pkgEditModal" onClick={() => openmodal(item)}><i className="fas fa-edit"></i> Edit</button>
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

      {/* VIEW MODAL */}
      <div className="modal fade" id="pkgViewModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content admin-modal">
            <div className="modal-body p-5 text-center">
                <span className="badge bg-primary rounded-pill px-3 py-2 fs-5 mb-3">{packagedata.price}</span>
                <h2 className="fw-bold text-dark mb-1">{packagedata.title}</h2>
                <p className="text-muted mb-4">{packagedata.subtitle}</p>
                <p className="small text-start bg-light p-3 rounded text-muted">{packagedata.desc}</p>
                <ul className="list-unstyled text-start mt-4 mb-4">
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>{packagedata.service1}</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>{packagedata.service2}</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>{packagedata.service3}</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>{packagedata.service4}</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>{packagedata.service5}</li>
                </ul>
                <div className="mt-4">
                  <button type="button" className="btn admin-btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      <div className="modal fade" id="pkgEditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content admin-modal">
            <div className="modal-body">
              <div className="admin-form-card admin-form-card--wide admin-modal-form w-100 p-0">
                <div className="admin-section-heading text-center mb-4">
                  <span className="admin-kicker">Update Package</span>
                  <h2>Edit Ticket Tier</h2>
                </div>

                <form onSubmit={submit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="admin-label">Package Title</label>
                      <input type="text" name="title" value={updatedata.title || ""} onChange={changedata} className="form-control admin-input" />
                    </div>
                    <div className="col-md-6">
                      <label className="admin-label">Subtitle (e.g. Gazebo included)</label>
                      <input type="text" name="subtitle" value={updatedata.subtitle || ""} onChange={changedata} className="form-control admin-input" />
                    </div>
                    <div className="col-md-6">
                      <label className="admin-label">Price (e.g. $260.90)</label>
                      <input type="text" name="price" value={updatedata.price || ""} onChange={changedata} className="form-control admin-input" />
                    </div>
                    <div className="col-12">
                      <label className="admin-label">Description</label>
                      <textarea name="desc" value={updatedata.desc || ""} onChange={changedata} className="form-control admin-input admin-textarea" rows="3"></textarea>
                    </div>
                    <div className="col-md-4">
                      <label className="admin-label">Service 1</label>
                      <input type="text" name="service1" value={updatedata.service1 || ""} onChange={changedata} className="form-control admin-input" />
                    </div>
                    <div className="col-md-4">
                      <label className="admin-label">Service 2</label>
                      <input type="text" name="service2" value={updatedata.service2 || ""} onChange={changedata} className="form-control admin-input" />
                    </div>
                    <div className="col-md-4">
                      <label className="admin-label">Service 3</label>
                      <input type="text" name="service3" value={updatedata.service3 || ""} onChange={changedata} className="form-control admin-input" />
                    </div>
                    <div className="col-md-6">
                      <label className="admin-label">Service 4</label>
                      <input type="text" name="service4" value={updatedata.service4 || ""} onChange={changedata} className="form-control admin-input" />
                    </div>
                    <div className="col-md-6">
                      <label className="admin-label">Service 5</label>
                      <input type="text" name="service5" value={updatedata.service5 || ""} onChange={changedata} className="form-control admin-input" />
                    </div>
                    <div className="col-12 mt-4 text-center">
                      <button className="btn admin-btn-primary px-5 shadow me-2" type="submit" data-bs-dismiss="modal">Save Changes</button>
                      <button className="btn admin-btn-secondary px-5" type="button" data-bs-dismiss="modal">Cancel</button>
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

export default PackagesManage;
