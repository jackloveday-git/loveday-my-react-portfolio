// Contact page by Jack Loveday

// Clone home for now
// Import react
import React from "react";

// Generate Contact page
export const Contact = () => {

    function handleSubmit() {
        alert('Contact Submitted.');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="labelText" htmlFor="name">Name: </label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label className="labelText" htmlFor="email">Email: </label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label className="labelText" htmlFor="message">Message: </label>
                <textarea id="message" required />
            </div>
            <button className="dlButton" type="submit">Contact</button>
        </form>
    );
};