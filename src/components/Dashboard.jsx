import React from "react";
import NavBar from "./NavBar";
function Dashboard() {
  return (
    <>
      <NavBar />
     <h1 className="p-5" style={{display:"flex",justifyContent:"center"}}>Welcome Admin Panel</h1>
    </>
  );
}

export default Dashboard;
