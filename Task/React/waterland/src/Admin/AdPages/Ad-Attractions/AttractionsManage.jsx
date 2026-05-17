import React, { useEffect, useState } from 'react';
import AdHeader from '../../AdCommon/AdHeader';
import AdNavHeader from '../../AdCommon/AdNavHeader';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function AttractionsManage() {
  const [attractions, setAttractions] = useState([]);

  const [attractiondata, setAttractiondata] = useState({
    id: "",
    title: "",
    img: ""
  });

  const [updatedata, setupdatedata] = useState({
    id: "",
    title: "",
    img: ""
  });

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/attractions");
    setAttractions(res.data);
  };

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/attractions/${id}`);
    setAttractiondata(res.data);
  };

  const deletedata = async (id) => {
    await axios.delete(`http://localhost:3000/attractions/${id}`);
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
    await axios.put(`http://localhost:3000/attractions/${updatedata.id}`, updatedata);
    fetchdata();
    setupdatedata({ id: "", title: "", img: "" });
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Manage Attractions" subtitle="Attractions" />

      <section className="admin-surface py-5">
        <div className="container py-5">
          <div className="admin-panel-card">
            <div className="admin-panel-head">
              <div>
                <span className="admin-kicker">Park Control</span>
                <h1>Attractions Management</h1>
                <p>Manage the rides and attractions shown on the site.</p>
              </div>
              <NavLink to="/AttractionsAdd" className="btn admin-btn-primary d-inline-flex align-items-center gap-2 shadow">
                <i className="fas fa-plus-circle fs-5"></i> Add Attraction
              </NavLink>
            </div>

            <div className="admin-table-wrap">
              <table className="table admin-table align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col"><i className="fas fa-hashtag me-2 text-primary"></i>ID</th>
                    <th scope="col"><i className="fas fa-image me-2 text-primary"></i>Image</th>
                    <th scope="col"><i className="fas fa-heading me-2 text-primary"></i>Title</th>
                    <th scope="col"><i className="fas fa-tools me-2 text-primary"></i>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {attractions && attractions.map((item) => (
                    <tr key={item.id}>
                      <th scope="row" className="admin-id-cell">{item.id}</th>
                      <td>
                        <img src={item.img} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                      </td>
                      <td>
                        <div className="admin-feature-title">{item.title}</div>
                      </td>
                      <td>
                        <div className="admin-table-actions">
                          <button className="btn admin-btn-success d-inline-flex align-items-center gap-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#attrViewModal" onClick={() => getdata(item.id)}><i className="fas fa-eye"></i> View</button>
                          <button className="btn admin-btn-warning d-inline-flex align-items-center gap-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#attrEditModal" onClick={() => openmodal(item)}><i className="fas fa-edit"></i> Edit</button>
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

      <div className="modal fade" id="attrViewModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content admin-modal">
            <div className="modal-body p-4 text-center">
                <img src={attractiondata.img} className="img-fluid rounded mb-3 shadow-sm" alt="Attraction" style={{maxHeight: '200px', objectFit: 'cover'}} />
                <h3 className="fw-bold">{attractiondata.title}</h3>
                <div className="mt-4">
                  <button type="button" className="btn admin-btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="attrEditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content admin-modal">
            <div className="modal-body">
              <div className="admin-form-card admin-modal-form w-100 p-0">
                <div className="admin-section-heading text-center mb-4">
                  <span className="admin-kicker">Update</span>
                  <h2>Edit Attraction</h2>
                </div>

                <form onSubmit={submit}>
                  <div className="row g-4">
                    <div className="col-12">
                      <label htmlFor="attrTitle" className="admin-label">Title</label>
                      <input type="text" name="title" value={updatedata.title} onChange={changedata} className="form-control admin-input" id="attrTitle" placeholder="Enter title" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="attrImg" className="admin-label">Image URL</label>
                      <input type="url" name="img" value={updatedata.img} onChange={changedata} className="form-control admin-input" id="attrImg" placeholder="Paste image URL" />
                    </div>
                    <div className="col-12 mt-4 text-center">
                      <button className="btn admin-btn-primary me-2" type="submit" data-bs-dismiss="modal">Save Changes</button>
                      <button className="btn admin-btn-secondary" type="button" data-bs-dismiss="modal">Cancel</button>
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

export default AttractionsManage;
