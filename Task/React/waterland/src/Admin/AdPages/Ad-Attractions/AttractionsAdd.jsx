import React, { useState } from 'react';
import AdHeader from '../../AdCommon/AdHeader';
import AdNavHeader from '../../AdCommon/AdNavHeader';
import axios from 'axios';
import { toast } from 'react-toastify';

function AttractionsAdd() {
  const [form, setForm] = useState({
    id: "",
    title: "",
    img: ""
  });

  const changedata = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/attractions", form);
    toast.success("Attraction Added Successfully");
    setForm({ id: "", title: "", img: "" });
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Add Attraction" subtitle="Attractions" />

      <section className="admin-surface py-5">
        <div className="container py-5">
          <div className="admin-form-shell">
            <div className="admin-form-card">
              <div className="admin-section-heading text-center">
                <span className="admin-kicker">New Entry</span>
                <h1>Add Park Attraction</h1>
                <p>Register a new ride or attraction for the waterpark.</p>
              </div>

              <form onSubmit={submit}>
                <div className="row g-4">
                  <div className="col-12">
                    <label className="admin-label">ID</label>
                    <input type="text" name="id" value={form.id} onChange={changedata} className="form-control admin-input" placeholder="Unique ID" required />
                  </div>
                  <div className="col-12">
                    <label className="admin-label">Attraction Title</label>
                    <input type="text" name="title" value={form.title} onChange={changedata} className="form-control admin-input" placeholder="Enter attraction title" required />
                  </div>
                  <div className="col-12">
                    <label className="admin-label">Image URL</label>
                    <input type="url" name="img" value={form.img} onChange={changedata} className="form-control admin-input" placeholder="Paste image URL" required />
                  </div>
                  <div className="col-12 text-center mt-5">
                    <button className="btn admin-btn-primary px-5 py-3 shadow" type="submit">Publish Attraction</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AttractionsAdd;
