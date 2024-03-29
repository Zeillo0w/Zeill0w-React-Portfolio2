import React from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import Skillcard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";


const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    };


    return (
        <section className="skills-container">
            <h5>Site en cours de developpement !</h5>
            <h5>Technical Proficiency</h5>

            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <Skillcard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => {
                                handleSelectedSkill(item);
                            }}
                        />

                    ))}
                </div>

                <div className="skills-info"></div>
                <SkillsInfoCard
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                />
            </div>

        </section>
    );
}

export default Skills;