import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function AdLogin() {
    const [form, setform] = useState({
        email: "",
        password: ""
    });

    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("AdminId")) {
            redirect("/DashBoard");
        }
    }, []);

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        const { email, password } = form;

        if (email.trim() === "" || password.trim() === "") {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const res = await axios.get(`http://localhost:3000/Admin?email=${email}`);

            if (res.data.length === 0) {
                toast.error("Email id does not match");
                return;
            }

            const admin = res.data[0];

            if (admin.password !== password) {
                toast.error("Password does not match");
                return;
            }

            localStorage.setItem("AdminId", admin.id);
            localStorage.setItem("AdminName", admin.name);
            toast.success("Login Successful");
            redirect("/DashBoard");

        } catch (error) {
            console.error("Login Error", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 43, 91, 0.6), rgba(0, 43, 91, 0.6)), url('/img/carousel-1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="p-5 shadow-lg"
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    borderRadius: '20px',
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(10px)"
                }}
            >
                <div className="text-center mb-4">
                    <i className="fas fa-water fa-3x text-primary mb-3"></i>
                    <h2 className="fw-bold text-dark mb-0">WaterLand</h2>
                    <p className="text-muted">Admin Portal Login</p>
                </div>

                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold text-dark">Email Address</label>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0 text-primary">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={getchange}
                                className="form-control border-start-0 ps-0"
                                placeholder="admin@waterland.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label fw-semibold text-dark">Password</label>
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0 text-primary">
                                <i className="fas fa-lock"></i>
                            </span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={form.password}
                                onChange={getchange}
                                className="form-control border-start-0 ps-0"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4 text-end">
                        <a href="#" className="text-decoration-none small text-primary">
                            Forgot Password?
                        </a>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 py-2 rounded-pill fw-bold shadow-sm">
                        Sign In to Admin Panel
                    </button>
                </form>

                <div className="text-center mt-4 pt-3 border-top">
                    <p className="text-muted small mb-0">
                        Not an administrator? <NavLink to="/" className="text-decoration-none fw-bold text-primary">Return to Home</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdLogin;
