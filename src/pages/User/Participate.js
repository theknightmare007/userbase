import React from "react";
import NavBar from "../components/NavBar";

const Participate = () => {

  const onDashboard= true;
  const onRewards = true;
  const onParticipate = true;
  const onPostPic = true;
  const onAboutUs = true;
    return (
    <div className="intro-title">
        <NavBar 
        onDashboard={onDashboard}
        onRewards={onRewards}
        onParticipate={onParticipate}
        onPostPic={onPostPic}
        onAboutUs={onAboutUs}></NavBar>
        <div className="dark">
        <h1>Want to Participate?</h1>
Are you interested in joining our mission to create a sustainable future? We&apos;re always looking for partners and collaborators who share our values and vision.
        </div >
        <div className="dark">
        <h3>What We Do</h3>
At our startup, we convert organic waste into biogas, a renewable energy source that can power homes and businesses. By using waste as a resource, we&apos;re reducing greenhouse gas emissions and helping to create a circular economy. Our innovative technology and processes allow us to maximize the potential of organic waste, turning it into a valuable commodity.
        </div>
        <div className="dark">
        <h3>Why Participate?</h3>
By participating in our mission, you can help to make a real impact on the environment and contribute to a more sustainable future. Whether you&apos;re an individual, organization, or business, there are many ways to get involved and support our work.
        </div>
        <div className="dark">
        <h3>How to Participate</h3>
There are several ways you can participate in our mission:<br/><br/>

<b>Invest</b>: If you&apos;re interested in investing in our startup, we&apos;d love to hear from you. We&apos;re always looking for partners who share our vision and can help us to grow our business.<br/><br/>
<b>Collaborate</b>: If you&apos;re part of an organization or business that produces organic waste, we&apos;d love to explore opportunities for collaboration. We can work with you to develop a customized waste management solution that meets your needs and supports our mission.<br/><br/>
<b>Volunteer</b>: If you&apos;re passionate about sustainability and want to make a difference, consider volunteering with us. We&apos;re always looking for motivated individuals who can help us to spread the word about our work and engage with the community.<br/><br/>
<b>Spread the Word</b>: If you support our mission and want to help us raise awareness, share our message with your friends, family, and colleagues. Follow us on social media, attend our events, and help us to spread the word about the importance of sustainability and waste reduction.<br/><br/>
        </div>
        <div className="dark">
            <h2>Contact Us</h2>
If you&apos;re interested in participating in our mission, we&apos;d love to hear from you. Please fill out the form below and one of our team members will get back to you as soon as possible.

Thank you for your support and interest in our work. Together, we can create a more sustainable future for all.</div>
    </div>
    )
}

export default Participate;