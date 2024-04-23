import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
function Dashboard() {
  return (
    <>
      <NavBar />
     <h1 className="p-5" style={{display:"flex",justifyContent:"center"}}>Welcome Admin Panel</h1>
     <Footer/>
    </>
  );
}

export default Dashboard;
