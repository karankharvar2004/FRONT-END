import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdNavHeader from '../AdCommon/AdNavHeader';
import AdHeader from '../AdCommon/AdHeader';

function UserManage() {
    const [users, setusers] = useState([]);
    const [formopen, setformopen] = useState(null);
    const [updateform, setupdateform] = useState({
        id: "",
        name: "",
        email: "",
        status: ""
    });

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/user");
        setusers(res.data);
    };

    const openmodal = (user) => {
        setformopen(user.id);
        setupdateform({
            id: user.id,
            name: user.name,
            email: user.email,
            status: user.status
        });
    };

    const datachange = (e) => {
        setupdateform({
            ...updateform,
            [e.target.name]: e.target.value,
        });
    };

    const updatedata = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/user/${updateform.id}`, updateform);
            fetchdata();
        } catch (error) {
            console.error("Error updating user:", error);
        }

        setupdateform({ id: "", name: "", email: "", status: "" });
        setformopen(null);
    };

    return (
        <div>
            <AdHeader />
            <AdNavHeader title="Manage Users" subtitle="Users" />

            <section className="admin-surface py-5">
                <div className="container py-5">
                    <div className="admin-panel-card">
                        <div className="admin-panel-head">
                            <div>
                                <span className="admin-kicker">User Control</span>
                                <h1>User Status Management</h1>
                                <p>Review registered users and update their account status between blocked and unblocked access.</p>
                            </div>
                        </div>

                        <div className="admin-table-wrap">
                            <table className="table admin-table align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col"><i className="fas fa-hashtag me-2 text-primary"></i>ID</th>
                                        <th scope="col"><i className="fas fa-user me-2 text-primary"></i>Name</th>
                                        <th scope="col"><i className="fas fa-envelope me-2 text-primary"></i>Email</th>
                                        <th scope="col"><i className="fas fa-shield-alt me-2 text-primary"></i>Status</th>
                                        <th scope="col"><i className="fas fa-tools me-2 text-primary"></i>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users && users.map((data) => (
                                        <tr key={data.id}>
                                            <th scope="row" className="admin-id-cell">{data.id}</th>
                                            <td>
                                                <div className="admin-feature-title">{data.name}</div>
                                            </td>
                                            <td className="admin-description-cell">{data.email}</td>
                                            <td>
                                                <span className={`admin-status-badge ${data.status === "block" ? "is-blocked" : "is-active"}`}>
                                                    {data.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="admin-table-actions">
                                                    <button
                                                        className="btn admin-btn-primary d-inline-flex align-items-center gap-2 shadow-sm"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#userStatusModal"
                                                        onClick={() => openmodal(data)}
                                                    >
                                                        <i className="fas fa-user-edit"></i> Update Status
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {formopen && (
                <div className="modal fade" id="userStatusModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content admin-modal">
                            <div className="modal-body">
                                <div className="admin-form-card admin-modal-form">
                                    <div className="admin-section-heading text-center">
                                        <span className="admin-kicker">Access Control</span>
                                        <h1>Update User Status</h1>
                                        <p>Adjust this user account status to control whether they can access the public user area.</p>
                                    </div>

                                    <form onSubmit={updatedata}>
                                        <div className="mb-4">
                                            <label htmlFor="userName" className="admin-label">User Name</label>
                                            <input
                                                type="text"
                                                id="userName"
                                                className="form-control admin-input"
                                                value={updateform.name}
                                                name="name"
                                                onChange={datachange}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="userEmail" className="admin-label">Email Address</label>
                                            <input
                                                type="email"
                                                id="userEmail"
                                                className="form-control admin-input"
                                                value={updateform.email}
                                                name="email"
                                                onChange={datachange}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="userStatus" className="admin-label">Account Status</label>
                                            <select
                                                id="userStatus"
                                                className="form-select admin-input"
                                                value={updateform.status}
                                                name="status"
                                                onChange={datachange}
                                            >
                                                <option value="unblock">Unblock</option>
                                                <option value="block">Block</option>
                                            </select>
                                        </div>

                                        <div className="admin-action-row">
                                            <button className="btn admin-btn-primary" type="submit" data-bs-dismiss="modal">
                                                Save Status
                                            </button>
                                            <button type="button" className="btn admin-btn-secondary" data-bs-dismiss="modal" onClick={() => setformopen(null)}>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserManage;
