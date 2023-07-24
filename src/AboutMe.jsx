import './AboutMe.css'
import Polygon from '../src/assets/Polygon.png'

const AboutMe = ({completeAboutMe}) =>{
  const longIntro = `Hi, my name is Owais Shah and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.

  One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics, I’m able to optimize complex integrations to require little-to-no maintenance while running on their own for years.`;
  
    return(
         <>
         <div className="AboutMe w-full ">
          <div className="IntroAboutMe">
            <h1 className=' font-heading1 text-main text-first-color'>{completeAboutMe.name}</h1> 
            <h4 className=' font-heading1 text-body text-second-color'>{completeAboutMe.desig}</h4>
            <p className=' font-body text-normal text-second-color'>{longIntro}</p>
          </div>
          <div className="personalInfo">
            <h2>Personal Info</h2>
            <ul>
              <li><h3>Birthday:</h3><p>{completeAboutMe.birthdate}</p></li>
              <li><h3>Age:</h3><p>{completeAboutMe.age}</p></li>
              <li><h3>Adress:</h3><p>{completeAboutMe.adress}</p></li>
              <li><h3>Email:</h3><p>{completeAboutMe.email}</p></li>
              <li><h3>Phone:</h3><p>{completeAboutMe.phone}</p></li>
            </ul>
          </div>
          <div className="knowledge">
            <h2>Knowledge</h2>
            <ul>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.know1}</p></li>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.know2}</p></li>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.know3}</p></li>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.know4}</p></li>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.know5}</p></li>
            </ul>
          </div>
          <div className="Interest">
            <h2>Interest</h2>
            <ul>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.inter1}</p></li>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.inter2}</p></li>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.inter3}</p></li>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.inter4}</p></li>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.inter5}</p></li>
              <li><img src={Polygon} alt="" srcset="" /><p>{completeAboutMe.skill1 }</p></li>
            </ul>
          </div>
         </div>
         </>
    );
};
export default AboutMe;