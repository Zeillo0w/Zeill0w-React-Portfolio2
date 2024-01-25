import React from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import Skillcard from "./Skillcard";


const Skills = () => {
    return (
        <section className="skills-container">
            <h6 style="font-size:4rem;">Site en cours de developpement !</h6>
            <h5>Technical Proficiency</h5>

            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <Skillcard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                        />

                    ))}
                </div>

                <div className="skills-info"></div>

            </div>

        </section>
    );
}

export default Skills;