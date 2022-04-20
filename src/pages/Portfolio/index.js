import React from "react";
import "./style.css";
import PortfolioCard from "../../components/PortfolioCard";
import Wrapper from "../../components/Wrapper";
import overseer from "../../portfolio/overseer.gif"
import img2 from "../../portfolio/img2.jpg"
import img3 from "../../portfolio/img3.gif"
import img4 from "../../portfolio/img4.gif"
import img5 from "../../portfolio/img5.jpg"


function Portfolio() {
    return (
        <div id="portfolio-section">
            <Wrapper>
                <h2>Portfolio</h2>
            </Wrapper>
            <Wrapper>
                <p>
                    Click <a href="https://github.com/Tasevski87">here</a> to see the list
                    of all my projects.
                </p>
            </Wrapper>

            <Wrapper>
                <PortfolioCard
                    title="Overseer"
                    img={overseer}
                    description="Overseer is a project management application who is assisting an individual or team in organaizing and managing their projects effectively. Despite the name, project management application is not just for project managers, can be customized to fit the needs of different teams of different sizes and with different goals.
        Technologies: HTML, JavaScript, JQuery, Bulma, Sequelize, mysql2, Express, Express-session, Express-handlebars, dotenv, Connect-session-sequelize, Bcrypt and Chalk."
                    github="https://github.com/Tasevski87/project-management-app"
                    deployed="https://hidden-sea-60654.herokuapp.com"
                />
                <PortfolioCard
                    title="Budget Tracker"
                    img={img2}
                    description="Budget Tracker application is created for users where they can be able to track withdrawals and deposits with or without a data/internet connection so their account balance is accurate.
                    Technologies: HTML, CSS, JavaScript, Node, Express.js, Mongoose, compression and morgan"
                    github="https://github.com/Tasevski87/Budget-Tracker"
                    deployed="https://shrouded-hamlet-11676.herokuapp.com"
                />
                <PortfolioCard
                    title="Tech Blog"
                    img={img3}
                    description="Tech Blog it is a CMS-style blog site, where developers can create username and password, login and publish their blog posts and comment on other developers posts as well.Technologies: HTML, JavaScript, Node, Sequelize, mysql, mysql2, Express, Express-session, Express-handlebars, dotenv, Connect-session-sequelize, Bcrypt"
                    github="https://github.com/Tasevski87/Tech-Blog"
                    deployed="https://techblogapp888.herokuapp.com"
                />
                <PortfolioCard
                    title="Note Taker"
                    img={img4}
                    description="Note-Taker app it is created for the needs of a small business client, where he can write, save and delete notes.
                    Technologies: JavaScript,Node,Express.js"
                    github="https://github.com/Tasevski87/Note-Taker"
                    deployed="https://note-taker-tt.herokuapp.com"
                />
                <PortfolioCard
                    title="Juhst Chat"
                    img={img5}
                    description="Juhst Chat app is a simple, user friendly and easy to use chat messaging app. The app is purposefully only focused on messaging, to deliver a high quality messaging experience and nothing else. You can look up users, add them as your friend, and begin messaging immediately.
                    Technologies: MERN Stack, HTML, CSS, Javascript, Apollo Server, Websocket, GraphQL, socket.io, Chakra UI"
                    github="https://github.com/Tasevski87/chat-app-live"
                    deployed="https://drive.google.com/file/d/1ee-Xw1ZBSZTI5ATQVeStMCq2KMAsCVdr/view"
                />
            </Wrapper>
        </div>
    );
}

export default Portfolio;