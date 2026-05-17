import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Register() {

    const redirect = useNavigate();

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    });

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        const { name, email, password } = form;

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Basic empty check
        if (!name.trim() || !email.trim() || !password.trim()) {
            toast.error("Please fill all fields");
            return;
        }

        // Email format validation
        if (!emailRegex.test(email)) {
            toast.error("Invalid email format");
            return;
        }

        // Password length validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        try {
            // Check for duplicate email
            const res = await axios.get(`http://localhost:3000/user?email=${email}`);
            if (res.data.length > 0) {
                toast.error("Email already exists");
                return;
            }

            // Submit form
            const response = await axios.post("http://localhost:3000/user", form);
            console.log(response.data);
            toast.success("Registration Successful");
            redirect("/Login");

        } catch (error) {
            console.error("Registration Error:", error);
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
                            <NavLink to="/Login" className="auth-top-link">Sign In</NavLink>
                        </div>
                    </div>

                    <div className="row g-4 align-items-stretch">
                        <div className="col-lg-6 order-lg-2">
                            <div className="auth-showcase auth-showcase-register h-100">
                                <span className="auth-badge">New Visitor</span>
                                <h1 className="display-5 text-white mb-3">Create your WaterLand profile</h1>
                                <p className="text-white-50 mb-4">
                                    Register to personalize your experience, save your details, and become part of the WaterLand visitor community.
                                </p>

                                <div className="auth-highlight-grid">
                                    <div className="auth-highlight-card">
                                        <h5>Fast Sign Up</h5>
                                        <p>Simple registration flow with validation, toast feedback, and instant redirect to login.</p>
                                    </div>
                                    <div className="auth-highlight-card">
                                        <h5>Branded Experience</h5>
                                        <p>Every element now follows the same aqua, resort, and rounded-card language as the rest of the app.</p>
                                    </div>
                                </div>

                                <div className="auth-stat-row">
                                    <div className="auth-stat">
                                        <h3>3</h3>
                                        <span>Steps to Join</span>
                                    </div>
                                    <div className="auth-stat">
                                        <h3>24/7</h3>
                                        <span>Account Access</span>
                                    </div>
                                    <div className="auth-stat">
                                        <h3>1</h3>
                                        <span>Park Community</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-1">
                            <div className="auth-form-card">
                                <div className="mb-4">
                                    <span className="text-primary text-uppercase fw-semibold small">Register</span>
                                    <h2 className="display-6 mb-2">Start your WaterLand journey</h2>
                                    <p className="text-muted mb-0">
                                        Create your visitor account to manage your details and unlock a more connected park experience.
                                    </p>
                                </div>

                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                                        <div className="auth-input-group">
                                            <span className="auth-input-icon">
                                                <i className="fas fa-user" />
                                            </span>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={form.name}
                                                onChange={getchange}
                                                className="form-control auth-input"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>
                                    </div>

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
                                                placeholder="Create a password"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary rounded-pill py-3 px-4 w-100">
                                        Create WaterLand Account
                                    </button>
                                </form>

                                <div className="auth-form-footer">
                                    <span className="text-muted">Already registered?</span>
                                    <NavLink to="/Login" className="auth-inline-link">
                                        Login here
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
