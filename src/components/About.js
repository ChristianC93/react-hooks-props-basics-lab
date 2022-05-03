import React from "react";
import user from "../data/user";

function About(props) {
  if (!props.bio) {
    return null
  } else {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={user.links} github={"https://github.com/liza"} linkedin={"https://www.linkedin.com/in/liza/"}/>
    </div>
  );}
}

function Links(props) {
  //console.log(props)
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default About;
