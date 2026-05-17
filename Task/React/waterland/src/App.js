import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./WaterLand/Pages/Home";
import About from "./WaterLand/Pages/About";
import Service from "./WaterLand/Pages/Service";
import Blog from "./WaterLand/Pages/Blog";
import Contact from "./WaterLand/Pages/Contact";
import Feature from "./WaterLand/Pages/Feature";
import Gallery from "./WaterLand/Pages/Gallery";
import Attractions from "./WaterLand/Pages/Attractions";
import Ticket from "./WaterLand/Pages/Ticket";
import Team from "./WaterLand/Pages/Team";
import Testimonial from "./WaterLand/Pages/Testimonial";
import NotFound from "./WaterLand/Pages/NotFound";
import DashBoard from "./Admin/AdPages/DashBoard";
import FeaturesManage from "./Admin/AdPages/Ad-Features/FeaturesManage";
import FeaturesAdd from "./Admin/AdPages/Ad-Features/FeaturesAdd";
import TeamManage from "./Admin/AdPages/Ad-Team/TeamManage";
import TeamAdd from "./Admin/AdPages/Ad-Team/TeamAdd";
import BlogManage from "./Admin/AdPages/Ad-Blogs/BlogManage";
import BlogAdd from "./Admin/AdPages/Ad-Blogs/BlogAdd";
import Login from "./WaterLand/Pages/Login";
import Register from "./WaterLand/Pages/Register";
import UserEdit from "./WaterLand/Pages/UserEdit";
import AdLogin from "./Admin/AdPages/AdLogin";
import AdminEdit from "./Admin/AdPages/AdminEdit";
import UserManage from "./Admin/AdPages/UserManage";
import PackagesManage from "./Admin/AdPages/Ad-Packages/PackagesManage";
import PackagesAdd from "./Admin/AdPages/Ad-Packages/PackagesAdd";
import AttractionsManage from "./Admin/AdPages/Ad-Attractions/AttractionsManage";
import AttractionsAdd from "./Admin/AdPages/Ad-Attractions/AttractionsAdd";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <div className="App">

      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Feature" element={<Feature />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Attraction" element={<Attractions />} />
      <Route path="/Ticket" element={<Ticket />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Testimonial" element={<Testimonial />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/UserEdit" element={<UserEdit />} />

      {/* ADMIN */}

      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/FeaturesManage" element={<FeaturesManage />} />
      <Route path="/FeaturesAdd" element={<FeaturesAdd />} />
      <Route path="/TeamManage" element={<TeamManage />} />
      <Route path="/TeamAdd" element={<TeamAdd />} />
      <Route path="/BlogManage" element={<BlogManage />} />
      <Route path="/BlogAdd" element={<BlogAdd />} />
      <Route path="/AdLogin" element={<AdLogin />} />
      <Route path="/AdminEdit" element={<AdminEdit />} />
      <Route path="/UserManage" element={<UserManage />} />
      <Route path="/PackagesManage" element={<PackagesManage />} />
      <Route path="/PackagesAdd" element={<PackagesAdd />} />
      <Route path="/AttractionsManage" element={<AttractionsManage />} />
      <Route path="/AttractionsAdd" element={<AttractionsAdd />} />


      </Routes>
      
    </div>
    </BrowserRouter>
  );
 
}

export default App;
