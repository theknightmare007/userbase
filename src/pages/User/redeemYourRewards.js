import React from "react";
import Link from "next/link";

const Rewards = () => {
    return (
        <div align ="center">
        <h1 align ="center">Redeem You Rewards</h1>
        <table style={{ fontSize: '22px' }}>
            <thead >
                <tr>
              <th style={{ border: '5px solid cyan', padding: '8px' }}>Your Token ID</th>
              <th>Time of Token Generation</th>
              <th>Time Left in Reward Unlock</th>
                </tr> 
            </thead>
            <tbody>
                <tr>
                    <td style={{ border: '5px solid cyan', padding: '18px' }}> -- </td>
                    <td style={{ border: '5px solid cyan', padding: '18px' }}> -- </td>
                    <td style={{ border: '5px solid cyan', padding: '18px' }}>  -- </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Rewards;