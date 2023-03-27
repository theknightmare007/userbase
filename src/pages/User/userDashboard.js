import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";

const Dashboard = () => {
    const needLogin = false;
    const onDashboard= true;
    const onRewards = true;
    const onParticipate = true;
    const onPostPic = true;

    return (
        <div className="intro-title">
            <h1 align="center">Dashboard</h1>
             <NavBar
            needLogin={needLogin}
            onDashboard={onDashboard}
            onRewards={onRewards}
            onParticipate={onParticipate}
            onPostPic={onPostPic}></NavBar>
            <div className='blue'>
                <h2 align="left">Activity</h2>
                <br/><b>First Contribution:</b><i> fetch from DB</i>
                <br/><b>Number of Contributions:</b><i></i>
                <br/><b>Reward Earned <small>in rupees</small>:</b><i>500rs</i>
            </div>

            <div className="dark">
                <h1>Any future Text</h1>
            </div>

            <div className="light">
                <h1>Second text</h1>
            </div>

            <div className="red">
                <h1>Third Text</h1>
            </div>
        </div>
    )
}

export default Dashboard;