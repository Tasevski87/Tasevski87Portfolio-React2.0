import React from "react";
import "./style.css";
import Wrapper from "../../components/Wrapper";

function About() {
    return (
        <div id="about-section">
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title"></div>
                    <Wrapper>
                        <h3>Toshe Tasevski</h3>
                    </Wrapper>
                    <Wrapper>
                        <p className="font-italic">Full-Stack Web Developer</p>
                    </Wrapper>
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="about-title">Introduction</h3>
                            <div className="about-item pb-0">
                              
                                <p>
                                    <em>
                                    Solutions-driven professional with front and back web development. Adept at offering cutting edge engineering solutions. Skilled in managing all aspects of the web development life cycle. Proficient in writing code, developing databases, creating user interfaces, and staying up to date with the newest libraries.
                                        <br />
                                    </em>
                                </p>
                            
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>
        </div>
    );
}

export default About;
