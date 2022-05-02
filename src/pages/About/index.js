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
                                    Hello, my name is Toshe. I was born and raised in the Republic of Macedonia in Europe. I moved to the United States in July, 2008. My wife and I live in Columbus, Ohio. I recently graduated from the Ohio State Coding Boot Camp. I am looking for a company where I can grow as a more advanced software developer.                                    <br />
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
