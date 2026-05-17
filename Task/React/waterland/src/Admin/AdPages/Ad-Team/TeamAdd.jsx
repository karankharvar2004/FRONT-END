import React, { useState } from 'react';
import AdHeader from '../../AdCommon/AdHeader';
import AdNavHeader from '../../AdCommon/AdNavHeader';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

function TeamAdd() {
  const redirect = useNavigate();

  const [form, setform] = useState({
    id: "",
    name: "",
    role: "",
    img: "",
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

    await axios.post("http://localhost:3000/team", form);
    redirect("/TeamManage");

    setform({
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
      <AdNavHeader title="Add Team" subtitle="Team" />

      <div className="container py-5">
        <div className="admin-form-shell">
          <div className="admin-form-card admin-form-card--wide">
            <div className="admin-section-heading text-center">
              <span className="admin-kicker">Team Studio</span>
              <h1>Add a Team Member</h1>
              <p>Create a new team profile with the member name, role, photo, and short bio used across the site.</p>
            </div>

            <form onSubmit={submit}>
              <div className="row g-4">
                <div className="col-lg-12 col-xl-6">
                  <label htmlFor="teamName" className="admin-label">Member Name</label>
                  <input type="text" name="name" value={form.name} onChange={getchange} className="form-control admin-input" id="teamName" placeholder="Enter member name" />
                </div>
                <div className="col-lg-12 col-xl-6">
                  <label htmlFor="teamRole" className="admin-label">Role</label>
                  <input type="text" name="role" value={form.role} onChange={getchange} className="form-control admin-input" id="teamRole" placeholder="Enter member role" />
                </div>
                <div className="col-12">
                  <label htmlFor="teamImage" className="admin-label">Image URL</label>
                  <input type="url" name="img" value={form.img} onChange={getchange} className="form-control admin-input" id="teamImage" placeholder="Paste image URL" />
                </div>
                <div className="col-12">
                  <label htmlFor="teamDescription" className="admin-label">Description</label>
                  <textarea className="form-control admin-input admin-textarea" value={form.description} onChange={getchange} name="description" id="teamDescription" placeholder="Write a short team member description" />
                </div>
                <div className="col-12">
                  <div className="admin-action-row">
                    <button className="btn admin-btn-primary" type="submit">Add Team Member</button>
                    <NavLink to="/TeamManage" className="btn admin-btn-secondary">View Team List</NavLink>
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

export default TeamAdd;
