import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from '../Common/Footer';
import NavHeader from '../Common/NavHeader';

function UserEdit() {

    const redirect = useNavigate();

    const [user, setuser] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    });

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem("userId")}`)
        console.log(res.data);
        setuser(res.data)
    }

    const getchange = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const updatedata = async (e) => {
        e.preventDefault();

        try {

            if (!user.email.trim() || !user.password.trim() || !user.name.trim()) {
                console.log("Please Fill required Details")
                toast.error("Please Fill required Details")
                return false
            }

            const res = await axios.patch(`http://localhost:3000/user/${user.id}`, user)
            console.log(res.data)
            localStorage.setItem("username", res.data.name)
            toast.success("Profile Updated")
            redirect("/")
            setuser({
                id: "",
                name: "",
                email: "",
                password: "",
                status: ""
            })

        } catch (error) {

            console.log("Api Data not Found")
            toast.error("Api Data not Found")
            return false

        }
    }

    return (
        <div>
            <Header />
            <NavHeader title="Your Profile" subtitle="Profile Edit" />

            <section className="container-fluid py-5 profile-edit-section">
                <div className="container py-5">
                    <div className="row g-4 align-items-stretch">
                        <div className="col-lg-5">
                            <div className="profile-showcase h-100">
                                <div className="profile-showcase-image">
                                    <img
                                        src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
                                        alt="WaterLand visitor"
                                        className="img-fluid w-100 h-100"
                                    />
                                </div>
                                <div className="profile-showcase-content">
                                    <span className="auth-badge">Member Zone</span>
                                    <h2 className="text-white mt-3">{user.name || "WaterLand Guest"}</h2>
                                    <p className="text-white-50 mb-4">
                                        Keep your visitor details updated so your WaterLand account stays ready for every splash, ride, and family outing.
                                    </p>

                                    <div className="profile-info-list">
                                        <div className="profile-info-item">
                                            <span>Status</span>
                                            <strong>{user.status || "unblock"}</strong>
                                        </div>
                                        <div className="profile-info-item">
                                            <span>Email</span>
                                            <strong>{user.email || "visitor@waterland.com"}</strong>
                                        </div>
                                        <div className="profile-info-item">
                                            <span>Profile Type</span>
                                            <strong>Registered Visitor</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="auth-form-card profile-form-card">
                                <div className="mb-4">
                                    <span className="text-primary text-uppercase fw-semibold small">Profile Settings</span>
                                    <h2 className="display-6 mb-2">Edit your personal details</h2>
                                    <p className="text-muted mb-0">
                                        Update the information connected to your WaterLand account. Changes will be reflected in your visitor greeting right away.
                                    </p>
                                </div>

                                <form onSubmit={updatedata}>
                                    <div className="mb-3">
                                        <label htmlFor="profileName" className="form-label fw-semibold">Your Name</label>
                                        <div className="auth-input-group">
                                            <span className="auth-input-icon">
                                                <i className="fas fa-user" />
                                            </span>
                                            <input
                                                type="text"
                                                name='name'
                                                value={user.name}
                                                onChange={getchange}
                                                id="profileName"
                                                className="form-control auth-input"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="profileEmail" className="form-label fw-semibold">Your Email</label>
                                        <div className="auth-input-group">
                                            <span className="auth-input-icon">
                                                <i className="fas fa-envelope" />
                                            </span>
                                            <input
                                                type="email"
                                                name='email'
                                                value={user.email}
                                                onChange={getchange}
                                                id="profileEmail"
                                                className="form-control auth-input"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="profilePassword" className="form-label fw-semibold">Password</label>
                                        <div className="auth-input-group">
                                            <span className="auth-input-icon">
                                                <i className="fas fa-lock" />
                                            </span>
                                            <input
                                                type="password"
                                                name='password'
                                                value={user.password}
                                                onChange={getchange}
                                                id="profilePassword"
                                                className="form-control auth-input"
                                                placeholder="Password"
                                            />
                                        </div>
                                    </div>

                                    <div className="profile-action-row">
                                        <button type="submit" className="btn btn-primary rounded-pill py-3 px-5">
                                            Update Profile
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary rounded-pill py-3 px-5"
                                            onClick={() => redirect("/")}
                                        >
                                            Back to Home
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default UserEdit
