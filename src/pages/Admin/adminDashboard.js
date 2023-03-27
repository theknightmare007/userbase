import Admin from "./AdminLogin";
import React from "react";
import Link from "next/link";

const Admin_Dashboard = () => {
    return (
        <div align="center">
            <div className="blue">
                <h1 >Dump collection stats Graph <small>(locality wise)</small></h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            </div>
            

            <div className="red">
                <h1>Dump Collection Stats by Type Graph<small>(Organic/Inorganic)</small></h1>
                <br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            </div>


            <div className="dark">
                <h1>User Participation Graph</h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>

            <div className="light">
                <h1> Overall Analytics Graph</h1>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            </div>
        </div>
    )
}

export default Admin_Dashboard;
