import React, { useState } from 'react';
import AdHeader from '../../AdCommon/AdHeader';
import AdNavHeader from '../../AdCommon/AdNavHeader';
import axios from 'axios';
import { toast } from 'react-toastify';

function PackagesAdd() {
  const [form, setForm] = useState({
    id: "",
    title: "",
    subtitle: "",
    price: "",
    desc: "",
    service1: "",
    service2: "",
    service3: "",
    service4: "",
    service5: ""
  });

  const changedata = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/packages", form);
    toast.success("Package Added Successfully");
    setForm({
      id: "", title: "", subtitle: "", price: "", desc: "",
      service1: "", service2: "", service3: "", service4: "", service5: ""
    });
  };

  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Add Ticket Package" subtitle="Tickets" />

      <section className="admin-surface py-5">
        <div className="container py-5">
          <div className="admin-form-shell">
            <div className="admin-form-card admin-form-card--wide">
              <div className="admin-section-heading text-center">
                <span className="admin-kicker">New Entry</span>
                <h1>Create Ticket Package</h1>
                <p>Define a new pricing tier and outline the features it includes for visitors.</p>
              </div>

              <form onSubmit={submit}>
                <div className="row g-4">
                  <div className="col-md-3">
                    <label className="admin-label">ID</label>
                    <input type="text" name="id" value={form.id} onChange={changedata} className="form-control admin-input" required />
                  </div>
                  <div className="col-md-6">
                    <label className="admin-label">Package Title</label>
                    <input type="text" name="title" value={form.title} onChange={changedata} className="form-control admin-input" placeholder="e.g. Premium Family" required />
                  </div>
                  <div className="col-md-3">
                    <label className="admin-label">Price</label>
                    <input type="text" name="price" value={form.price} onChange={changedata} className="form-control admin-input" placeholder="e.g. $199.00" required />
                  </div>
                  <div className="col-12">
                    <label className="admin-label">Subtitle</label>
                    <input type="text" name="subtitle" value={form.subtitle} onChange={changedata} className="form-control admin-input" placeholder="Short description or tagline" />
                  </div>
                  <div className="col-12">
                    <label className="admin-label">Description</label>
                    <textarea name="desc" value={form.desc} onChange={changedata} className="form-control admin-input admin-textarea" rows="3" placeholder="Full descriptive paragraph..."></textarea>
                  </div>
                  
                  <div className="col-12 mt-4"><h5 className="text-dark border-bottom pb-2">Included Services</h5></div>
                  
                  <div className="col-md-4">
                    <input type="text" name="service1" value={form.service1} onChange={changedata} className="form-control admin-input" placeholder="Service 1" />
                  </div>
                  <div className="col-md-4">
                    <input type="text" name="service2" value={form.service2} onChange={changedata} className="form-control admin-input" placeholder="Service 2" />
                  </div>
                  <div className="col-md-4">
                    <input type="text" name="service3" value={form.service3} onChange={changedata} className="form-control admin-input" placeholder="Service 3" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="service4" value={form.service4} onChange={changedata} className="form-control admin-input" placeholder="Service 4" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="service5" value={form.service5} onChange={changedata} className="form-control admin-input" placeholder="Service 5" />
                  </div>

                  <div className="col-12 text-center mt-5">
                    <button className="btn admin-btn-primary px-5 py-3 shadow" type="submit">Publish Package</button>
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

export default PackagesAdd;
