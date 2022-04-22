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
                    <Wrapper>
                    <iframe title="Video intrudoction" 
                    width="760"
                    height="428"
                    src=""
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    />
                    </Wrapper>
                </div>
            </section>
        </div>
    );
}

export default About;