import './AboutMe.css'
import Polygon from '../src/assets/Polygon.png'
import Skills from './subcomponent/Skills';
import PersonalInfoCom from '../src/subcomponent/PersonalInfo'
import KnowledgeComp from './subcomponent/Knowledge.jsx';
import InterestsComp from '../src/subcomponent/Interests.jsx';

const AboutMe = ({completeAboutMe}) =>{
  const longIntro = `Hi, my name is Owais Shah and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.

  One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics, I’m able to optimize complex integrations to require little-to-no maintenance while running on their own for years.`;
  const skilltype ={
    skilltype1: 'Programing Skills',
    skilltype2: 'Designing Skills',
  }
  const personalInfo=[
    {
      info: 'Birthdate:',
      data: '09.Nov.2005',
    },
    {
      info: 'Age:',
      data: '18',
    },
    {
      info: 'Adress:',
      data: 'New Karachi Town',
    },
    {
      info: 'Email:',
      data: 'xhowais@gmail.com',
    },
    {
      info: 'Phone:',
      data: '+92 317 2906 746',
    },
  ];
  const knowledge =[
    {
    data: 'HTML5,CSS3,JavaScript,ES6',
    },
    {
    data: 'Tailwind CSS,Bootstrap',
    },
    {
    data: 'React,Vue,Vite',
    },
    {
    data: 'Node Js,Next Js',
    },
    {
    data: 'Photoshop,Adobe XD,Figma',
    },
  ];
  const interests =[                          
    {
    data: 'Learning Ai',
    },
    {
    data: 'Ai Critical Thinking',
    },
    {
    data: 'Create Web Apps',
    },
    {
    data: 'Custom Website',
    },
    {
    data: 'Making Ui/Ux',
    },
    {
    data: 'Site Optomization',
    },
  ];
  const skillsData = [
    {
      domain: 'React',
      progress: '63%',
    },
    {
      domain: 'JavaScript',
      progress: '80%',
    },
    {
      domain: 'HTML',
      progress: '95%',
    },
    {
      domain: 'CSS',
      progress: '75%',
    },
  ];
  const skillsData2 = [
    {
      domain: 'Adobe XD',
      progress: '63%',
    },
    {
      domain: 'Figma',
      progress: '80%',
    },
    {
      domain: 'Photoshop',
      progress: '69%',
    },
    {
      domain: 'After Effect',
      progress: '75%',
    },
  ];
  
    return(
         <>
         <div className="AboutMe w-full">
          <div className="IntroAboutMe">
            <h1 className=' font-heading1 text-main text-first-color'>{completeAboutMe.name}</h1> 
            <h4 className=' font-heading1 text-body text-second-color'>{completeAboutMe.desig}</h4>
            <p className=' font-body text-normal text-second-color'>{longIntro}</p>
          </div>
          <div className="personalInfo">
            <h2>Personal Info</h2>
            <PersonalInfoCom personalInfo={personalInfo} />
          </div>
          <div className="knowledge">
            <h2>Knowledge</h2>
            <KnowledgeComp knowledge={knowledge} />
          </div>
          <div className="Interest">
            <h2>Interest</h2>
            <InterestsComp interests={interests} />
          </div>
         </div>
        <div className="skills">
        <h2>{skilltype.skilltype1}</h2>
        {skillsData.map((skill, index) => (
          <Skills key={index} Skills={skill} />
        ))}
      </div>
      <div className="skills">
        <h2>{skilltype.skilltype2}</h2>
        {skillsData2.map((skill, index) => (
          <Skills key={index} Skills={skill} />
        ))}
      </div>
         </>
    );
};
export default AboutMe;