import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";

const Rewards = () => {

    const needLogin = false;
    const onDashboard= true;
    const onRewards = true;
    const onParticipate = true;
    const onPostPic = true;
    const onAboutUs = true;

    return (
        <div align ="center" className="intro-title">
            <NavBar
            onDashboard={onDashboard}
            onRewards={onRewards}
            onParticipate={onParticipate}
            onPostPic={onPostPic}
            onAboutUs={onAboutUs}></NavBar>
        <h1 align ="center">Redeem You Rewards</h1>
        <table style={{ fontSize: '22px' }}>
            <thead >
                <tr>
              <th style={{ border: '5px solid magenta', padding: '18px' }}>Your Token ID</th>
              <th style={{ border: '5px solid magenta', padding: '18px' }}>Time of Token Generation</th>
              <th style={{ border: '5px solid magenta', padding: '18px' }}>Time Left in Reward Unlock</th>
                </tr> 
            </thead>
            <tbody>
                <tr>
                    <td style={{ border: '5px solid magenta', padding: '18px' }}> -- </td>
                    <td style={{ border: '5px solid magenta', padding: '18px' }}> -- </td>
                    <td style={{ border: '5px solid magenta', padding: '18px' }}>  -- </td>
                </tr>
            </tbody>
        </table>
        <div>
            <h1 color="purple">Past Reward Activity</h1>
            <table style={{ fontSize: '22px' }}>
            <thead >
                <tr>
              <th>Date of Reward Redemption</th>
              <th>Amount of Reward</th>
              <th>Any more details we want to show</th>
                </tr> 
            </thead>
            <tbody>
                <tr>
                    <td style={{ border: '5px solid magenta', padding: '18px' }}> -- </td>
                    <td style={{ border: '5px solid magenta', padding: '18px' }}> -- </td>
                    <td style={{ border: '5px solid magenta', padding: '18px' }}>  -- </td>
                </tr>
            </tbody>
            </table>

            <Link href="/"><h2 type="url">Back to Home</h2></Link>
        </div>
        </div>
    )
}

export default Rewards;