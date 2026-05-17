import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Footer from '../Common/Footer';

export default function Login() {
    const [form, setform] = useState({
        email: "",
        password: ""
    });

    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("userId")) {
            redirect("/");
        }
    }, [redirect]);

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        const { email, password } = form;

        // Form Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.trim() === "" || password.trim() === "") {
            toast.error("Please fill all fields");
            return false;
        }

        if (!emailRegex.test(email)) {
            toast.error("Invalid email format");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        try {
            const res = await axios.get(`http://localhost:3000/user?email=${email}`);

            if (res.data.length === 0) {
                toast.error("Email does not exist");
                return;
            }

            const user = res.data[0];

            if (user.status === "block") {
                toast.error("Your account has been blocked");
                return;
            }

            if (user.password !== password) {
                toast.error("Incorrect password");
                return;
            }

            localStorage.setItem("userId", user.id);
            localStorage.setItem("username", user.name);
            toast.success("Login Successful");
            redirect("/");

        } catch (error) {
            console.error("Login Error", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="auth-page">
            <section className="auth-hero">
                <div className="container py-5">
                    <div className="auth-topbar mb-4">
                        <NavLink to="/" className="auth-brand">
                            <i className="fas fa-swimmer me-2" />
                            WaterLand
                        </NavLink>
                        <div className="auth-top-links">
                            <NavLink to="/" className="auth-top-link">Back to Home</NavLink>
                            <NavLink to="/Register" className="auth-top-link">Create Account</NavLink>
                        </div>
                    </div>

                    <div className="row g-4 align-items-stretch">
                        <div className="col-lg-6">
                            <div className="auth-showcase h-100">
                                <span className="auth-badge">Guest Portal</span>
                                <h1 className="display-5 text-white mb-3">Welcome back to WaterLand</h1>
                                <p className="text-white-50 mb-4">
                                    Sign in to manage your profile, review park plans, and continue your WaterLand experience from one place.
                                </p>

                                <div className="auth-highlight-grid">
                                    <div className="auth-highlight-card">
                                        <h5>Quick Access</h5>
                                        <p>Open your account details and continue exploring attractions, tickets, and park updates.</p>
                                    </div>
                                    <div className="auth-highlight-card">
                                        <h5>Theme Consistency</h5>
                                        <p>The login area now matches the same bright, resort-style look used across the site.</p>
                                    </div>
                                </div>

                                <div className="auth-stat-row">
                                    <div className="auth-stat">
                                        <h3>150K+</h3>
                                        <span>Happy Visitors</span>
                                    </div>
                                    <div className="auth-stat">
                                        <h3>20+</h3>
                                        <span>Years of Fun</span>
                                    </div>
                                    <div className="auth-stat">
                                        <h3>100%</h3>
                                        <span>Family Vibes</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="auth-form-card">
                                <div className="mb-4">
                                    <span className="text-primary text-uppercase fw-semibold small">User Login</span>
                                    <h2 className="display-6 mb-2">Access your WaterLand account</h2>
                                    <p className="text-muted mb-0">
                                        Enter your account details to continue to your personalized park dashboard.
                                    </p>
                                </div>

                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                                        <div className="auth-input-group">
                                            <span className="auth-input-icon">
                                                <i className="fas fa-envelope" />
                                            </span>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={form.email}
                                                onChange={getchange}
                                                className="form-control auth-input"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                                        <div className="auth-input-group">
                                            <span className="auth-input-icon">
                                                <i className="fas fa-lock" />
                                            </span>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={form.password}
                                                onChange={getchange}
                                                className="form-control auth-input"
                                                placeholder="Enter your password"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary rounded-pill py-3 px-4 w-100">
                                        Login to WaterLand
                                    </button>
                                </form>

                                <div className="auth-form-footer">
                                    <span className="text-muted">New here?</span>
                                    <NavLink to="/Register" className="auth-inline-link">
                                        Create your account
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
