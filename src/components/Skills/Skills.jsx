import React from "react";
import "./skills.css"
import Frontend from "./Frontend";
import Backend from "./Backend";
import ML from "./ML"

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Technical Skills</span>
            <div className="skills_containter container grid">
                <Frontend/>
                <Backend />
                <ML />
            </div>
        </section>
    )
}

export default Skills