// Resume page by Jack Loveday

// Clone home for now
// Import react
import React from "react";
import resumeFile from "./assets/JackLovedayResume.txt"

// Generate Resume page
export const Resume = () => {
    return (
        <div>
            <h1>My Programming Resume</h1><br />
            <h3>Languages:</h3>
            <p>Java, JavaScript, Node.js, C</p><br />
            <h3>Front End Skills:</h3>
            <p>jQuery, Bootstrap, HTML/CSS, Sass (SCSS), React</p><br />
            <h3>Back End Skill:</h3>
            <p>npm, API GET/POST, Express, MySQL, Sequelize, MongoDB, Mongoose, REST, GraphQL, Stripe</p><br /><br />
            <h3>Click below for PDF Download</h3>
            <div>
                <a
                    href={resumeFile}
                    download
                    class="dlButton">
                    Download Resume
                </a>
            </div>
        </div>
    );
};