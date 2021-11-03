// Home page by Jack Loveday

// Import react
import React from "react";

// Import extra files
import self_IMG from './imgs/self.png'

// Generate home page
export const Home = () => {
    return (
        <div className='home.body'>
            <h1>About Me</h1><br />
            <img src={self_IMG}
                className='imgGrayscale'
                alt='Jack Loveday'
            ></img>
            <p>Hello! Welcome to my personal react portfolio. <br/>This is a website I will use, and update, to show my apptitude as a full stack developer!</p>
        </div>
    );
};