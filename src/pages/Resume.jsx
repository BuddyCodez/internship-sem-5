import React from 'react'
import '../resume.css';
import Rprofile from '../components/Rprofile';
import Rabout from '../components/Rabout';
import Rcontact from '../components/Rcontact';
import RExp from '../components/RExp';
import Redu from '../components/Redu';
import Rskill from '../components/Rskill';
import Rintrest from '../components/Rintrest';
const Resume = () => {
    const data = {
        name: "Udit Vegad",
        email: "udit@hotmail.com",
        phone: "+91 1234567890",
        profilepic: "https://cdn.discordapp.com/avatars/480285300484997122/a_7e63fb0a76d9a69a645119a164334760.gif",
        address: "some address goes here.........",
        about: `I'm Creative Developer and Ui/Ux Designer. I have been working in the field of web design and development for 2 years. I have a lot of experience in creating websites and web applications. I have also been working as a Discord bot developer for 1 year. I have a professional approach to work and I am always ready to help you with your project.`,
        experience: [
            {
                tofrom: "Apr 2018 - Now",
                title: "Technical Consultant - Web Design",
                company: "Fiserv"
            },
            {
                tofrom: "Jan 2018 - Apr 2018",
                title: "Web Designer",
                company: "Lynden"
            },
            {
                tofrom: "Aug 2017 - Dec 2017",
                title: "Intern - Web Design",
                company: "Lynden"
            },

        ],
        education: [
            {
                tofrom: "Jan. 2016 - Apr. 2018",
                title: "Bachelor of Science Web Design and Development",
                subtitle: "BYU-Idaho"
            },
            {
                tofrom: "Sept. 2014 - Dec. 2015",
                title: "Computer Science",
                subtitle: "Edmonds Community College"
            },
            {
                tofrom: "Jan. 2013 - Jun. 2015",
                title: "High School",
                subtitle: "Henry M. Jackson High School"
            },
        ],
        skills: [
            {
                name: "HTML5",
                percent: 95
            },
            {
                name: "CSS3 & SCSS",
                percent: 90
            },
            {
                name: "JavaScript",
                percent: 90
            },
            {
                name: "jQuery",
                percent: 50
            },
            {
                name: "SQL",
                percent: 70
            },
            {
                name: "Mongo DB",
                percent: 90
            },
        ],
        languages: [
            "English - Fluent",
            "Hindi - Fluent",
            "Gujarati - Native"
        ],
    }
    return (
        <>
            <div class="resume">
                <div class="base">
                    <Rprofile {...data} />
                    <Rabout  {...data} />
                    <Rcontact {...data} />
                </div>
                <div class="func">
                    <RExp  {...data} />
                    <Redu  {...data} />
                    <Rskill  {...data} />
                    <Rintrest  {...data} />
                </div>
            </div>
        </>
    )
}

export default Resume