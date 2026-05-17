import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdHeader from '../AdCommon/AdHeader';
import AdNavHeader from '../AdCommon/AdNavHeader';

function AdminEdit() {
    const redirect = useNavigate();

    const [admin, setAdmin] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/Admin/${localStorage.getItem("AdminId")}`);
            setAdmin(res.data);
        } catch (error) {
            console.error("Failed to fetch admin data");
            toast.error("Error fetching admin data");
        }
    };

    const handleChange = (e) => {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        });
    };

    const updateAdmin = async (e) => {
        e.preventDefault();

        const { name, email, password } = admin;

        if (!name.trim() || !email.trim() || !password.trim()) {
            toast.error("Please fill all required fields");
            return;
        }

        try {
            const res = await axios.patch(`http://localhost:3000/Admin/${admin.id}`, admin);
            localStorage.setItem("AdminName", res.data.name);
            toast.success("Admin Profile Updated");
            redirect("/DashBoard");
        } catch (error) {
            console.error("Update error", error);
            toast.error("Failed to update admin profile");
        }
    };

    return (
        <div>
            <AdHeader />
            <AdNavHeader title="Admin Profile" subtitle="Profile" />

            <section className="admin-surface py-5">
                <div className="container py-5">
                    <div className="admin-form-shell">
                        <div className="admin-form-card">
                            <div className="admin-section-heading text-center">
                                <span className="admin-kicker">Profile Settings</span>
                                <h1>Edit Admin Profile</h1>
                                <p>Update your account information so the admin panel stays personalized, current, and secure.</p>
                            </div>

                            <form onSubmit={updateAdmin}>
                                <div className="mb-4">
                                    <label className="admin-label" htmlFor="adminName">Admin Name</label>
                                    <input
                                        type="text"
                                        id="adminName"
                                        name="name"
                                        value={admin.name}
                                        onChange={handleChange}
                                        className="form-control admin-input"
                                        placeholder="Enter admin name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="admin-label" htmlFor="adminEmail">Email Address</label>
                                    <input
                                        type="email"
                                        id="adminEmail"
                                        name="email"
                                        value={admin.email}
                                        onChange={handleChange}
                                        className="form-control admin-input"
                                        placeholder="Enter email address"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="admin-label" htmlFor="adminPassword">Password</label>
                                    <input
                                        type="password"
                                        id="adminPassword"
                                        name="password"
                                        value={admin.password}
                                        onChange={handleChange}
                                        className="form-control admin-input"
                                        placeholder="Enter password"
                                    />
                                </div>

                                <div className="form-check admin-check mb-4">
                                    <input className="form-check-input" type="checkbox" id="termsCheck" />
                                    <label className="form-check-label" htmlFor="termsCheck">
                                        I confirm these profile details are ready to update.
                                    </label>
                                </div>

                                <div className="admin-action-row admin-action-row--center">
                                    <button type="submit" className="btn admin-btn-primary">
                                        Update Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AdminEdit;
