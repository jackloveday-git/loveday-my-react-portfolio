// Portfolio page by Jack Loveday

// Clone home for now
// Import react
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

// Generate Portfolio page
export const Portfolio = ({ category }) => {
    const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
        {
            name: "Bark Side of the Moon",
            description: "A MERN application that connects pet lovers to pets that are in desperate need of a good home.",
            link: "https://cryptic-hollows-09419.herokuapp.com/",
            github: "https://github.com/adamgmcfadden/Bark-Side-of-the-Moon"
        },
        {
            name: "FurFoodz",
            description: "A Group Project in cooperation with the 2021 CU Programming Bootcamp. Features user logins and posts.",
            link: "https://furfoodz.herokuapp.com/",
            github: "https://github.com/jackloveday-git/FurFoodz"
        },
        {
            name: "Space Camp",
            description: "Main repo for Project 1: Space Camp application. Jack Loveday, Charlie Rick, Adam Girard-McFadden, Yussef Rafat, & Mike Obasogie",
            link: "jackloveday-git.github.io/space-camp/",
            github: "https://github.com/jackloveday-git/space-camp"
        },
        {
            name: "HTML Portfolio",
            description: "An old version of my personal portfolio",
            link: "https://jackloveday-git.github.io/Loveday-Portfolio/",
            github: "https://github.com/jackloveday-git/Loveday-Portfolio"
        }
    ])

    return (
        <div>
            <div className="profile-container">
                <h1>Portfolio</h1><br />
                <div className="flex-images">
                    {projects.map((project, i) => (
                        <div className="project-container" key={project.name}>
                            <img
                                src={require(`./imgs/projects/proj${i}.png`).default}
                                alt={project.name}
                                className="project img-size"
                                key={project.name}
                            />
                            <div className="project-text-cont">
                                <a className="link-style" href={project.link} target="_blank">
                                    {" "}
                                    <span className="project-title-style">{project.name}</span>
                                </a>
                                <a className="link-style" href={project.github} target="_blank">
                                    {" "}
                                    <FaGithub className="github-style" size="1em" />{" "}
                                </a>
                                <h3 className="project-desc">{project.description}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};