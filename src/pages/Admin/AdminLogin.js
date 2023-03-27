
import React from "react";
import Link from "next/link";


const Admin = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform additional logic or submit the form here
      };

    return (
        <div>
            <div align="center">
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit}>
                <label htmlFor="fname">Email Address</label>
                <input type="text" id="fname" name="fname" /><br /><br />
                <label htmlFor="lname">Passkey</label>
                <input type="text" id="lname" name="lname" /><br /><br />
                <Link href='/Admin/adminDashboard'><input type="submit" value="Proceed to Login" /></Link>
                </form>
            </div>
        
        </div>
        )
}

export default Admin;