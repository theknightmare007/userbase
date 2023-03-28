import { useEffect } from 'react';
import NavBar from './NavBar';

function AboutUsPage() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSections = document.querySelectorAll('.about-us-section');
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      aboutSections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        const sectionVisible = windowHeight - sectionTop > sectionHeight / 2;

        if (sectionVisible) {
          section.style.opacity = '1';
          section.style.visibility = 'visible';
        } else {
          section.style.opacity = '0';
          section.style.visibility = 'hidden';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const onDashboard= true;
    const onRewards = true;
    const onParticipate = true;
    const onPostPic = true;
    const onAboutUs = true;

  return (
    <div>
      <NavBar
            onDashboard={onDashboard}
            onRewards={onRewards}
            onParticipate={onParticipate}
            onPostPic={onPostPic}
            onAboutUs={onAboutUs}/>
      <h1 align="center" className='intro-title'>About Us</h1>
      <div className="about-us-section">
        <p>Welcome to [Startup Name], where we believe in the power of sustainable solutions to transform our world for the better. We are a team of passionate individuals who have come together with a common goal: to make the world a cleaner, greener, and more sustainable place.

Our startup is focused on converting organic waste into biogas, a renewable and eco-friendly source of energy that can be used to power homes, businesses, and communities. By harnessing the power of biogas, we are able to reduce greenhouse gas emissions, reduce landfill waste, and provide a renewable source of energy for our communities.

Our innovative process is based on years of research and development, and we have partnered with leading experts in the field of biogas production to create a cutting-edge technology that is efficient, effective, and environmentally responsible. Our process is designed to take organic waste from a variety of sources, including food waste, agricultural waste, and municipal solid waste, and convert it into usable biogas.</p>
      </div>

      <div className="about-us-section">
        <p>We are also committed to transparency and accountability. We believe that our customers and stakeholders have the right to know how our process works, and how we are working to promote sustainability and environmental responsibility. That&apos;s why we are dedicated to providing regular updates, sharing our progress, and engaging with our customers and communities to create a better future for all.</p>
      </div>

      <div className="about-us-section">
        <p>At [Startup Name], we are committed to sustainability and environmental stewardship. We believe that the best way to create a cleaner, healthier, and more sustainable world is by developing innovative solutions that harness the power of nature. By converting organic waste into biogas, we are able to create a closed loop system that promotes sustainability, reduces waste, and creates value for our customers and communities.</p>
      </div>

      <div className="about-us-section">
        <p>At [Startup Name], we are excited about the possibilities that lie ahead. We believe that our technology has the potential to transform the way we think about waste, energy, and sustainability, and we are committed to making a positive impact on the world around us. Join us on this journey, and let&apos;s work together to create a cleaner, greener, and more sustainable world for future generations.</p>
      </div>
    </div>
  );
}

export default AboutUsPage;
