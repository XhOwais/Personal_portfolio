import React from 'react';
import '../subcomponent/Skills.css';

const Skills = ({ Skills }) => {
  const div1Styles = {
    width: Skills.progress, 
  };

  return (
    <>
      <div className="programingSkill pb-4">
        <ul>
          <li>
            <div className="aboutSkill flex justify-between w-Skil">
              <h2 className="domain">{Skills.domain}</h2>
              <h2 className="progress">{Skills.progress}</h2>
            </div>
            <div className="progressba absolute flex barfrom bg-section-color rounded-e absolute -z-10">
              <div
                style={div1Styles}
                className="barto bg-third-color rounded-s h-4 z-10"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
