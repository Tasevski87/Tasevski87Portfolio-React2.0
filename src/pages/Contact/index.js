import React from "react";
import "./style.css";



function Contact(props) {
    return (
        <div id="contact-page">
            <section id="contact" className="contact">
                <div className="section-title">
                    <h2>Contact</h2>
                </div>
                <div className="container">
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="email">
                    
                                    <h4>Name:</h4>
                                    <p>Toshe Tasevski</p>
                                </div>
                                <div className="address">
                                    
                                    <h4>Location:</h4>
                                    <p>Columbus, Ohio</p>
                                </div>
                                <div className="email">
                                    
                                    <h4>Email:</h4>
                                    <p>tose_tox@yahoo.com</p>
                                </div>
                                <div className="phone">
                                
                                    <h4>Call:</h4>
                                    <p>+1 (614)589-8784</p>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24463.4363160339!2d-83.0199630513083!3d39.9653280248839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388f2fc58bb6e5%3A0xdbbe8dd1f9c928f2!2sDowntown%2C%20Columbus%2C%20OH%2043215%2C%20USA!5e0!3m2!1sen!2sbg!4v1607481847015!5m2!1sen!2sbg"
                                    frameBorder="0"
                                    title="contact"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;