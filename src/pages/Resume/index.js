import React from "react";
import "./style.css";
import Wrapper from "../../components/Wrapper";
import pdfResume from "../../Resume TT.pdf";
function Resume() {
    return (
        <div id="resume-section">
            <section id="resume" className="resume">
                <div className="container">
                    <div className="section-title">
                        <Wrapper>
                            <h2>Resume</h2>
                        </Wrapper>
                        <Wrapper>
                            {" "}
                            <p>
                                Click{" "}
                                <a href={pdfResume} target="_black">
                                    here
                                </a>{" "}
                                to download pdf version of my resume.{" "}
                            </p>
                        </Wrapper>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Summary</h3>
                            <div className="resume-item pb-0">
                                <h4>Toshe Tasevski</h4>
                                <p>
                                    <em>
                                    Solutions-driven professional with front and back web development. Adept at offering cutting edge engineering solutions. Skilled in managing all aspects of the web development life cycle. Proficient in writing code, developing databases, creating user interfaces, and staying up to date with the newest libraries.
                                        <br />
                                    </em>
                                </p>
                                <br />
                                <ul>
                                    <li>Columbus, OH, USA</li>
                                    <li>(614) 589-8784</li>
                                    <li>tose_tox@yahoo.com</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>FulL-Stack Web Development</h4>
                                <h5>2021 - 2022</h5>
                                <p>
                                    <em>Ohio State University Bootcamp, Columbus, OH</em>
                                </p>
                            </div>
                            <div className="resume-item">
                                <h4>Computer Science</h4>
                                <h5>2005 - 2008</h5>
                                <p>
                                    <em>St. Kliment Ohridski, Bitola,
                                        Republic of Macedonia</em>
                                </p>
                            </div>
                            <div className="resume-item">
                                <h4>High School Diploma </h4>
                                <h4>School of Electronic Engineer</h4>
                                <h5>2001 - 2005</h5>
                                <p>
                                    <em>OSU Kole Nedelkovski Veles
                                Republic of Macedonia</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            
            <br /> <br />
        </div>
    );
}

export default Resume;