import "../css/homepage.css";
import FullStackImage from "../assets/Full Stack.jpeg";
import FrontendImage from "../assets/Frontend.jpeg";
import BackendImage from "../assets/backend castle.jpeg";
import ApiImage from "../assets/api castle.jpeg";
import DesignImage from "../assets/design castle.jpeg";
import DatabaseImage from "../assets/database.jpeg";
import Me from "../assets/DS_3888.jpg";

function HomePage() {
    const services = [
        { 
            title: "Full Stack Web Development", 
            description: "From concept to deployment, I offer full-stack web development services using React for the frontend and Flask for the backend. I create responsive, high-performance applications tailored to your business needs.", 
            image: FullStackImage
        },
        { 
            title: "Frontend Development", 
            description: "Specializing in creating intuitive and engaging user interfaces with React and modern JavaScript. I focus on delivering seamless user experiences.", 
            image: FrontendImage
        },
        { 
            title: "Backend Development", 
            description: "Building secure and scalable backend systems using Flask and SQL, ensuring reliable performance and seamless integration.", 
            image: BackendImage
        },
        { 
            title: "API Integration", 
            description: "Designing and implementing RESTful APIs for smooth communication between different parts of your application.", 
            image: ApiImage
        },
        { 
            title: "Responsive Design", 
            description: "Creating mobile-first and user-friendly web designs that look great on any device.", 
            image: DesignImage
        },
        { 
            title: "Database Management", 
            description: "Setting up and managing databases to ensure data integrity and efficient storage.", 
            image: DatabaseImage
        },
    ];
    

    return (
        <>
          <div className="page">
              <div className="intro-content">
                    <img
                        className="intro-image"
                        src={Me}
                        alt="Linet Jerop"
                    />
                    <div className="intro-text">
                        <h1>Welcome to My Portfolio</h1>
                        <p>Hi, I am Linet Jerop, a Full Stack Web Developer.</p>
                        <p>I specialize in building responsive web applications using modern technologies like React, Flask, and SQL.</p>
                        {/* <a href="/portfolio" className="cta-button">View My Work</a> */}
                    </div>
              </div>
              
                <section className="services">
                     <h2>Services I Offer</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <img src={service.image} alt={service.title} />
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="contacts">
                        <h2>Contact Me</h2>
                        <p>If you have any questions or want to discuss a project, feel free to reach out!</p>
                        <p>Phone: +254 742-730-336</p>
                        <p>Address: Kajiado, Kenya</p>
                        <p>Email: teweilinet@gmail.com</p>
                        <p>LinkedIn: <a href='https://www.linkedin.com/in/linet-kibet-1a18b4276/'>Click Me</a></p>
                        <p>GitHub Profile: <a href='https://github.com/JeropLinet'>Click Me</a></p>
                    </div>
                </section>

                <section className="testimonial">
                    <blockquote>
                        Linet is an exceptional developer. Her ability to create seamless, high-performance web applications has been transformative for our business.
                    </blockquote>
                     <cite>- Project Manager, TechVision</cite>
                </section>
          </div>
        </>
    );
}

export default HomePage;
