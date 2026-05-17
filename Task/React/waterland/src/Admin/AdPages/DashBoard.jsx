import React, { useEffect, useState } from 'react'
import AdHeader from '../AdCommon/AdHeader'
import AdNavHeader from '../AdCommon/AdNavHeader'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function DashBoard() {
  const [stats, setStats] = useState({
    users: 0,
    features: 0,
    team: 0,
    blogs: 0
  });

  const [reviews, setReviews] = useState([]);
  const [packages, setPackages] = useState([]);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [usersRes, featuresRes, teamRes, blogsRes, reviewsRes, packagesRes, attractionsRes] = await Promise.all([
        axios.get("http://localhost:3000/user"),
        axios.get("http://localhost:3000/Features"),
        axios.get("http://localhost:3000/team"),
        axios.get("http://localhost:3000/blog"),
        axios.get("http://localhost:3000/client"),
        axios.get("http://localhost:3000/packages"),
        axios.get("http://localhost:3000/attractions")
      ]);
      setStats({
        users: usersRes.data.length,
        features: featuresRes.data.length,
        team: teamRes.data.length,
        blogs: blogsRes.data.length
      });
      
      setReviews(reviewsRes.data.slice(0, 3));
      setPackages(packagesRes.data);
      setAttractions(attractionsRes.data.slice(0, 4));
    } catch (error) {
      console.error("Failed to fetch dashboard stats", error);
    }
  }

  return (
    <div className="bg-light min-vh-100">
      <AdHeader />
      <AdNavHeader title="DashBoard" subtitle="DashBoard" />
      
      <div className="container-fluid px-4 px-lg-5 py-5">
        
        {/* Statistics Cards */}
        <div className="row g-4">
          <div className="col-sm-6 col-xl-3">
            <div className="admin-panel-card h-100 position-relative overflow-hidden p-4" style={{padding: '30px'}}>
              <div className="d-flex align-items-center justify-content-between mb-4 position-relative" style={{zIndex: 1}}>
                <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #1fa2ff, #12d8fa)'}}>
                  <i className="fas fa-users fa-xl text-white"></i>
                </div>
                <h2 className="display-5 fw-bolder mb-0" style={{color: '#062033'}}>{stats.users}</h2>
              </div>
              <div className="position-relative" style={{zIndex: 1}}>
                <h6 className="text-uppercase fw-bold mb-1" style={{color: '#587086', letterSpacing: '1px'}}>Total Users</h6>
                <NavLink to="/UserManage" className="text-decoration-none fw-bold" style={{color: '#1fa2ff'}}>
                  Manage Users <i className="fas fa-arrow-right ms-1"></i>
                </NavLink>
              </div>
              <i className="fas fa-users position-absolute" style={{fontSize: '120px', bottom: '-20px', right: '-10px', color: '#1fa2ff', opacity: '0.05'}}></i>
            </div>
          </div>
          
          <div className="col-sm-6 col-xl-3">
            <div className="admin-panel-card h-100 position-relative overflow-hidden p-4" style={{padding: '30px'}}>
              <div className="d-flex align-items-center justify-content-between mb-4 position-relative" style={{zIndex: 1}}>
                <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #1f9d63, #2ecc71)'}}>
                  <i className="fas fa-swimming-pool fa-xl text-white"></i>
                </div>
                <h2 className="display-5 fw-bolder mb-0" style={{color: '#062033'}}>{stats.features}</h2>
              </div>
              <div className="position-relative" style={{zIndex: 1}}>
                <h6 className="text-uppercase fw-bold mb-1" style={{color: '#587086', letterSpacing: '1px'}}>Park Features</h6>
                <NavLink to="/FeaturesManage" className="text-decoration-none fw-bold" style={{color: '#1f9d63'}}>
                  Manage Features <i className="fas fa-arrow-right ms-1"></i>
                </NavLink>
              </div>
              <i className="fas fa-swimming-pool position-absolute" style={{fontSize: '120px', bottom: '-20px', right: '-10px', color: '#1f9d63', opacity: '0.05'}}></i>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="admin-panel-card h-100 position-relative overflow-hidden p-4" style={{padding: '30px'}}>
              <div className="d-flex align-items-center justify-content-between mb-4 position-relative" style={{zIndex: 1}}>
                <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #17a2b8, #20c997)'}}>
                  <i className="fas fa-id-badge fa-xl text-white"></i>
                </div>
                <h2 className="display-5 fw-bolder mb-0" style={{color: '#062033'}}>{stats.team}</h2>
              </div>
              <div className="position-relative" style={{zIndex: 1}}>
                <h6 className="text-uppercase fw-bold mb-1" style={{color: '#587086', letterSpacing: '1px'}}>Team Members</h6>
                <NavLink to="/TeamManage" className="text-decoration-none fw-bold" style={{color: '#17a2b8'}}>
                  Manage Team <i className="fas fa-arrow-right ms-1"></i>
                </NavLink>
              </div>
              <i className="fas fa-id-badge position-absolute" style={{fontSize: '120px', bottom: '-20px', right: '-10px', color: '#17a2b8', opacity: '0.05'}}></i>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="admin-panel-card h-100 position-relative overflow-hidden p-4" style={{padding: '30px'}}>
              <div className="d-flex align-items-center justify-content-between mb-4 position-relative" style={{zIndex: 1}}>
                <div className="rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #f39c12, #ffc107)'}}>
                  <i className="fas fa-file-alt fa-xl text-white"></i>
                </div>
                <h2 className="display-5 fw-bolder mb-0" style={{color: '#062033'}}>{stats.blogs}</h2>
              </div>
              <div className="position-relative" style={{zIndex: 1}}>
                <h6 className="text-uppercase fw-bold mb-1" style={{color: '#587086', letterSpacing: '1px'}}>Blog Posts</h6>
                <NavLink to="/BlogManage" className="text-decoration-none fw-bold" style={{color: '#f39c12'}}>
                  Manage Blogs <i className="fas fa-arrow-right ms-1"></i>
                </NavLink>
              </div>
              <i className="fas fa-file-alt position-absolute" style={{fontSize: '120px', bottom: '-20px', right: '-10px', color: '#f39c12', opacity: '0.05'}}></i>
            </div>
          </div>
        </div>

        {/* Lower Dashboard Area */}
        <div className="row mt-5">
            {/* Quick Actions */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow-sm border-0 h-100" style={{borderRadius: '15px'}}>
                    <div className="card-header bg-white border-bottom p-4" style={{borderRadius: '15px 15px 0 0'}}>
                        <h5 className="mb-0 text-primary fw-bold"><i className="fas fa-bolt me-2"></i>Quick Actions</h5>
                    </div>
                    <div className="card-body p-4">
                        <div className="d-grid gap-3">
                            <NavLink to="/FeaturesAdd" className="btn btn-outline-primary text-start p-3 fw-semibold shadow-sm"><i className="fas fa-plus-circle me-3 fs-5 align-middle"></i> Add New Park Feature</NavLink>
                            <NavLink to="/TeamAdd" className="btn btn-outline-success text-start p-3 fw-semibold shadow-sm"><i className="fas fa-user-plus me-3 fs-5 align-middle"></i> Register New Team Member</NavLink>
                            <NavLink to="/BlogAdd" className="btn btn-outline-warning text-start p-3 fw-semibold shadow-sm"><i className="fas fa-pen-nib me-3 fs-5 align-middle"></i> Write a Blog Post</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Latest Client Reviews */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow-sm border-0 h-100" style={{borderRadius: '15px'}}>
                    <div className="card-header bg-white border-bottom p-4" style={{borderRadius: '15px 15px 0 0'}}>
                        <h5 className="mb-0 text-primary fw-bold"><i className="fas fa-star text-warning me-2"></i>Latest Client Reviews</h5>
                    </div>
                    <div className="card-body p-4">
                        <ul className="list-group list-group-flush">
                            {reviews.map((rev) => (
                                <li key={rev.id} className="list-group-item px-0 border-0 mb-3 bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <img src={rev.img} alt={rev.name} className="rounded-circle me-3 shadow-sm" style={{width: '55px', height: '55px', objectFit: 'cover'}} />
                                        <div>
                                            <h6 className="mb-0 fw-bold text-dark">{rev.name} <span className="text-muted small fw-normal ms-2">({rev.role})</span></h6>
                                            <div className="text-warning small mb-1">
                                                <i className="fas fa-star"></i> {rev.review} Rating
                                            </div>
                                            <p className="mb-0 text-muted small text-truncate" style={{maxWidth: '350px'}}>{rev.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Ticket Packages Overview */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow-sm border-0 h-100" style={{borderRadius: '15px'}}>
                    <div className="card-header bg-white border-bottom p-4" style={{borderRadius: '15px 15px 0 0'}}>
                        <h5 className="mb-0 text-primary fw-bold"><i className="fas fa-ticket-alt me-2 text-info"></i>Ticket Packages Overview</h5>
                    </div>
                    <div className="card-body p-4">
                        <div className="d-flex flex-column gap-3">
                            {packages.map(pkg => (
                                <div key={pkg.id} className="p-3 border rounded d-flex justify-content-between align-items-center bg-light shadow-sm">
                                    <div>
                                        <h6 className="mb-1 fw-bold text-dark">{pkg.title}</h6>
                                        <span className="text-muted small">{pkg.subtitle || pkg.gazebo}</span>
                                    </div>
                                    <span className="badge bg-primary rounded-pill px-3 py-2 fs-6">{pkg.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Park Attractions */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow-sm border-0 h-100" style={{borderRadius: '15px'}}>
                    <div className="card-header bg-white border-bottom p-4" style={{borderRadius: '15px 15px 0 0'}}>
                        <h5 className="mb-0 text-primary fw-bold"><i className="fas fa-map-marked-alt me-2 text-success"></i>Top Park Attractions</h5>
                    </div>
                    <div className="card-body p-4">
                        <div className="row g-3">
                            {attractions.map(attr => (
                                <div key={attr.id} className="col-sm-6">
                                    <div className="position-relative rounded overflow-hidden shadow-sm" style={{height: '110px'}}>
                                        <img src={attr.img} alt={attr.title} className="w-100 h-100" style={{objectFit: 'cover'}} />
                                        <div className="position-absolute bottom-0 w-100 p-2" style={{background: 'linear-gradient(transparent, rgba(0,0,0,0.85))'}}>
                                            <h6 className="text-white mb-0 text-truncate small fw-bold">{attr.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

      </div>
    </div>
  )
}

export default DashBoard
