import React, { useEffect, useState } from 'react';
import AdHeader from '../../AdCommon/AdHeader';
import AdNavHeader from '../../AdCommon/AdNavHeader';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function TeamManage() {
  const [team, setteam] = useState([]);

  const [teamdata, setteamdata] = useState({
    id: "",
    name: "",
    role: "",
    img: "",
    description: ""
  });

  const [updatedata, setupdatedata] = useState({
    id: "",
    name: "",
    role: "",
    img: "",
    description: ""
  });

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/team");
    setteam(res.data);
  };

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/team/${id}`);
    setteamdata(res.data);
  };

  const deletedata = async (id) => {
    await axios.delete(`http://localhost:3000/team/${id}`);
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

    await axios.put(`http://localhost:3000/team/${updatedata.id}`, updatedata);
    fetchdata();

    setupdatedata({
      id: "",
      name: "",
      role: "",
      img: "",
      description: ""
    });
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Manage Team" subtitle="Team" />

      <section className="admin-surface py-5">
        <div className="container py-5">
          <div className="admin-panel-card">
            <div className="admin-panel-head">
              <div>
                <span className="admin-kicker">Team Control</span>
                <h1>Team Management</h1>
                <p>Manage the people profiles shown on the homepage and dedicated team page.</p>
              </div>
              <NavLink to="/TeamAdd" className="btn admin-btn-primary d-inline-flex align-items-center gap-2 shadow">
                <i className="fas fa-user-plus fs-5"></i> Add Team Member
              </NavLink>
            </div>

            <div className="admin-table-wrap">
              <table className="table admin-table align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col"><i className="fas fa-hashtag me-2 text-primary"></i>ID</th>
                    <th scope="col"><i className="fas fa-user me-2 text-primary"></i>Member</th>
                    <th scope="col"><i className="fas fa-briefcase me-2 text-primary"></i>Role</th>
                    <th scope="col"><i className="fas fa-align-left me-2 text-primary"></i>Description</th>
                    <th scope="col"><i className="fas fa-tools me-2 text-primary"></i>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {team && team.map((item) => (
                    <tr key={item.id}>
                      <th scope="row" className="admin-id-cell">{item.id}</th>
                      <td>
                        <div className="admin-feature-title">{item.name}</div>
                      </td>
                      <td className="admin-role-cell">{item.role}</td>
                      <td className="admin-description-cell">{item.description}</td>
                      <td>
                        <div className="admin-table-actions">
                          <button className="btn admin-btn-success d-inline-flex align-items-center gap-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#teamViewModal" onClick={() => getdata(item.id)}><i className="fas fa-eye"></i> View</button>
                          <button className="btn admin-btn-warning d-inline-flex align-items-center gap-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#teamEditModal" onClick={() => openmodal(item)}><i className="fas fa-edit"></i> Edit</button>
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

      <div className="modal fade" id="teamViewModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content admin-modal">
            <div className="modal-body">
              <div className="admin-form-card admin-modal-form">
                <div className="admin-section-heading text-center">
                  <span className="admin-kicker">Member Preview</span>
                  <h1>View Team Member</h1>
                </div>
                <div className="team-item team-card p-4">
                  <div className="team-content team-card-content">
                    <div className="team-card-header border-bottom pb-4">
                      <div className="text-start team-card-copy">
                        <h4 className="mb-0">{teamdata.name}</h4>
                        <p className="mb-0">{teamdata.role}</p>
                      </div>
                      <div className="team-card-media">
                        <img
                          src={teamdata.img}
                          className="img-fluid rounded team-card-image"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="team-icon rounded-pill my-4 p-3">
                      <a className="btn btn-primary btn-sm-square rounded-circle me-3" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-primary btn-sm-square rounded-circle me-3" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-primary btn-sm-square rounded-circle me-3" href>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a className="btn btn-primary btn-sm-square rounded-circle me-0" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <p className="team-card-desc text-center mb-0">{teamdata.description}</p>
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

      <div className="modal fade" id="teamEditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content admin-modal">
            <div className="modal-body">
              <div className="admin-form-card admin-form-card--wide admin-modal-form">
                <div className="admin-section-heading text-center">
                  <span className="admin-kicker">Update Team</span>
                  <h1>Edit Team Member</h1>
                  <p>Update role details, profile imagery, and copy used on the public-facing team sections.</p>
                </div>

                <form onSubmit={submit}>
                  <div className="row g-4">
                    <div className="col-lg-12 col-xl-6">
                      <label htmlFor="editTeamName" className="admin-label">Member Name</label>
                      <input type="text" name="name" value={updatedata.name} onChange={changedata} className="form-control admin-input" id="editTeamName" placeholder="Enter member name" />
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <label htmlFor="editTeamRole" className="admin-label">Role</label>
                      <input type="text" name="role" value={updatedata.role} onChange={changedata} className="form-control admin-input" id="editTeamRole" placeholder="Enter member role" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="editTeamImage" className="admin-label">Image URL</label>
                      <input type="url" name="img" value={updatedata.img} onChange={changedata} className="form-control admin-input" id="editTeamImage" placeholder="Paste image URL" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="editTeamDesc" className="admin-label">Description</label>
                      <textarea className="form-control admin-input admin-textarea" name="description" value={updatedata.description} onChange={changedata} id="editTeamDesc" placeholder="Write a short team member description" />
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

export default TeamManage;
