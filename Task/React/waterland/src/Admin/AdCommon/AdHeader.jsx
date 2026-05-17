import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function AdHeader() {

    const redirect = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("AdminId")) {
            redirect("/AdLogin")
        }
    })

    const logout = () => {
        localStorage.removeItem("AdminId")
        localStorage.removeItem("AdminName")
        redirect("/AdLogin")
        toast.success("Admin Logout SuccessFully!!")
    }

    return (
        <div>
            {/* Navbar & Hero Start */}
            <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink to="/DashBoard" className="navbar-brand p-0">
                        <h1 className="display-6 text-dark">
                            <i className="fas fa-swimmer text-primary me-3" />
                            WaterLand
                        </h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <NavLink to="/DashBoard" className="nav-item nav-link">
                                DashBoard
                            </NavLink>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Features
                                </a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/FeaturesManage" className="dropdown-item">
                                        Features-Manage
                                    </NavLink>
                                    <NavLink to="/FeaturesAdd" className="dropdown-item">
                                        Features-Add
                                    </NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Team
                                </a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/TeamManage" className="dropdown-item">
                                        Team-Manage
                                    </NavLink>
                                    <NavLink to="/TeamAdd" className="dropdown-item">
                                        Team-Add
                                    </NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Blogs
                                </a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/BlogManage" className="dropdown-item">
                                        Blogs-Manage
                                    </NavLink>
                                    <NavLink to="/BlogAdd" className="dropdown-item">
                                        Blogs-Add
                                    </NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Tickets
                                </a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/PackagesManage" className="dropdown-item">
                                        Tickets-Manage
                                    </NavLink>
                                    <NavLink to="/PackagesAdd" className="dropdown-item">
                                        Tickets-Add
                                    </NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Attractions
                                </a>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/AttractionsManage" className="dropdown-item">
                                        Attractions-Manage
                                    </NavLink>
                                    <NavLink to="/AttractionsAdd" className="dropdown-item">
                                        Attractions-Add
                                    </NavLink>
                                </div>
                            </div>
                            <NavLink to="/UserManage" className="nav-item nav-link">
                                UserManage
                            </NavLink>

                            {
                                (() => {
                                    if (localStorage.getItem("AdminId")) {
                                        return (

                                            <NavLink className="nav-item nav-link ms-5 text-primary" to="/AdminEdit">
                                                Hello-{localStorage.getItem("AdminName")}
                                            </NavLink>
                                        )
                                    }
                                })()
                            }
                            {
                                (() => {
                                    if (localStorage.getItem("AdminId")) {
                                        return (
                                            <NavLink onClick={logout} className="nav-item nav-link" to="#">
                                                Admin-LogOut
                                            </NavLink>)
                                    }

                                    else {
                                        return (
                                            <NavLink to="/AdLogin">Admin-Login</NavLink>
                                        )
                                    }
                                })()
                            }

                        </div>
                        <div className="team-icon d-none d-xl-flex justify-content-center me-3">
                            <a className="btn btn-square btn-light rounded-circle mx-1" href>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href>
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href>
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href>
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                        <a
                            href="#"
                            className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0"
                        >
                            Get Started
                        </a>
                    </div>
                </nav>
            </div>
            {/* Navbar & Hero End */}
        </div>
    )
}

export default AdHeader
