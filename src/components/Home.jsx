import "../css/all.css";

function Home() {
    const services = [
        {
          title: "Social Media Copy",
          description: "Engaging captions and posts for your social media platforms.",
          image:""
       },
        {
          title: "Blog/Article Copy",
          description: "Informative and captivating blog posts for your audience.",
          image:""
        },    
        {
          title: "Email Copy",
          description: "Compelling email campaigns to boost conversions.",
          image:""
        },
      ];

    return (
        <>
            <div className="home">
                <div>
                    <nav className="small-nav">Alaina Thomas Marketing</nav>
                    <section>
                        <div className="about">
                            <div>
                                <p className="about-words">
                                    I am Alaina, a copywriter specializing in social media marketing
                                    and storytelling.
                                </p>
                            </div>

                            <div className="about-image">
                                <img
                                    className="about-image"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
                                    alt="Alaina Thomas"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="popular-services">
                        <h2>Most Popular Services</h2>
                    </div>

                    <section className="services">
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

                </div>
        
                <section>
                    <div className="more-info">
                        <div>
                            <p className="more-info-words">
                             <h2> I am Alaina, a copywriter and a social media manager</h2> 
                            <p>I am Alaina, a copywriter specializing in social media marketing
                                and storytelling.</p>
                            <p>  I am Alaina, a copywriter specializing in social media marketing
                                and storytelling.</p>
                            </p>
                        </div>

                        <div className="more-info-image">
                            <img
                                className="about-image"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s"
                                alt="Alaina Thomas"
                            />
                        </div>
                    </div>
                </section>
        
                
                <section>
                    <div className="contact">
                        <h1>Contact Us</h1>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </section>
                
            </div>
        </>
    );
}

export default Home;
