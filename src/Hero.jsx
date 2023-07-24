import './Hero.css'
import heroPic from '../src/assets/heroPic.png'
import logoYT from '../src/assets/youtube.png'
import logoGIT from '../src/assets/github.png'
import logoLINK from '../src/assets/linkdin.png'
import logoINSTA from '../src/assets/insta.png'

const Hero = ({personalInfo}) =>{

  return (
      <>
      <div className='main w-full flex justify-center'>
      <div className='nameBox max-xl:w-auto  justify-self-start'>
      <h1 className='name font-heading1 2xl:text-large xl:text-8xl '>{personalInfo.name}</h1>
      </div>
      <div className="imgBox relative -z-10">
        <img className='heroPic' src={heroPic} alt="" />
      </div>
      <div className="heroContent self-end">
        <div className="textContent">
        <h4 className='text-normal font-medium text-first-color'>{personalInfo.firstMess}</h4>
        <h2 className='xl:text-main lg:text-2xl font-heading1 text-first-color mb-2'>{personalInfo.Iam}</h2>
        <p className='firstAboutMe font-body mb-4 text-second-color'>{personalInfo.firstAboutMe}</p>
        </div>
        <div className="buttons flex h">
          <button className='btn1 hover:bg-third-color text-normal text-text-color bg-first-color' href="">{personalInfo.btnText}</button>
          <div className='icon-list-box'>
          <ul className=' icon-list flex'>
            <li><a href="#"><img src={logoYT} alt="" srcset="" /></a></li>
            <li><a href="#"><img src={logoGIT} alt="" srcset="" /></a></li>
            <li><a href="#"><img src={logoLINK} alt="" srcset="" /></a></li>
            <li><a href="#"><img src={logoINSTA} alt="" srcset="" /></a></li>
          </ul>
          </div>
        </div>
      </div>
      </div>
      </>
    );
  };
  
  export default Hero;
  