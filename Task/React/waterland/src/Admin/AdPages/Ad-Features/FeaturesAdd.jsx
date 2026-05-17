import React, { useState } from 'react'
import AdHeader from '../../AdCommon/AdHeader'
import AdNavHeader from '../../AdCommon/AdNavHeader'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

function FeaturesAdd() {

  const redirect = useNavigate(); 

  const [form, setform] = useState({
    id: "1",
    title: "",
    img: "",
    description: ""
  });

  // Form Handling
  const getchange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    });
    console.log(form);
  };

  // Form Submit
  const submit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/Features", form)
    console.log(res.data);
    redirect("/FeaturesManage")

    setform({
      id: "1",
      title: "",
      img: "",
      description: ""
    })
  };



  return (
    <div>
      <AdHeader />
      <AdNavHeader title="Add Features" subtitle="Features" />

      <div className='container py-5'>
        <div className="admin-form-shell">
          <div className="admin-form-card admin-form-card--wide">
            <div className="admin-section-heading text-center">
              <span className="admin-kicker">Content Studio</span>
              <h1>Add a New Feature</h1>
              <p>Publish a new attraction highlight with a title, image, and short description for the public website.</p>
            </div>

            <form onSubmit={submit}>
              <div className="row g-4">
                <div className="col-12">
                  <label htmlFor="name" className="admin-label">Feature Title</label>
                  <input type="text" value={form.title} name='title' onChange={getchange} className="form-control admin-input" id="name" placeholder="Enter feature title" />
                </div>
                <div className="col-12">
                  <label htmlFor="image" className="admin-label">Image URL</label>
                  <input type="url" value={form.img} name='img' onChange={getchange} className="form-control admin-input" id="image" placeholder="Paste image URL" />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="admin-label">Description</label>
                  <textarea className="form-control admin-input admin-textarea" name='description' onChange={getchange} value={form.description} placeholder="Write a short feature description" id="message" />
                </div>
                <div className="col-12">
                  <div className="admin-action-row">
                    <button className="btn admin-btn-primary" type="submit">Add Feature</button>
                    <NavLink to="/FeaturesManage" className="btn admin-btn-secondary">View All Features</NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}

export default FeaturesAdd
