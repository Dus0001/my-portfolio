import React from 'react';
import profilePic from "../../assets/cover/daven.jpeg";

function About() {
  return (
    <article className="my-5">
            <h2>About Me</h2>
            <p>
                My passion has always been centered around people. As the eldest of 7, I found myself naturally taking care of others. Finding creative solutions to complex problems, Advocating for my community, and exploring new techniques were just a few of my hobbies. Now, as a first-generation college graduate from the great city of Houston, TX, I am blessed to employ those same hobbies in my career. My goal is to continue to learn, grow, and be inspired by the people around me and my community.
            </p>
            <img src={profilePic} className="my-2" style={{ width: "100%" }} alt="cover" />
        </article>
  );
}

export default About;
