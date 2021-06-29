import React from 'react'
import './Page.css'

function About() {


    return (
        <div>
            <div className="about-header">
            <h3>Welcome to Retail Therapy, an interactive adventure! </h3>
            </div>
            <h5>This is a game I built based on a one-shot about my time working in a grocery store. If you're interested in playing, it's available <a href='https://github.com/JillKlatt'>here </a></h5>
            <div className='about-body'>
            <p>For those brave enough to accept the challenge and horrible wages, Your manager, who was once a beacon of hope and joy and light, has been put under some sort of spell by their boss, cursing her to become glum and irritated and overwhelmed. Your task is to complete the challenges and obstacles of an hourly employee to defeat the evil DM (District Manager)</p>
            <p>You will be presented with a choice, be warned, there is usually a right answer, but not always.</p>
            </div>
        </div>
    )
} 

export default About;