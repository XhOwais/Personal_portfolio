import Hero from "./hero.jsx"
import Header from './Header.jsx'
import AboutMe from "./AboutMe.jsx";

const App= () =>{
  return (
    <>
      <Hero
       personalInfo={{
        name: 'Owais Shah', 
        firstMess: 'HI THERE',
        Iam: 'I Am Web Developer And Designer.',
        firstAboutMe: 'I Spend My Days Fixing Problems And Learning New Things That Will Help People Build Their Own Business. ',
        btnText: 'About me'
        }}
      />
        <Header  />
        <AboutMe 
        completeAboutMe={{
          name: 'Owais Shah',
          desig: 'Web Developer',
          /*Personal Info */
          birthdate: '09.Nov.2005',
          age: '18',
          adress: 'New Karachi Town',
          email: 'xhowais@gmail.com',
          phone: '+92 317 2906 746', 
          // Knowledge
          know1: 'HTML5,CSS3,JavaScript,ES6',
          know2: 'Tailwind CSS,Bootstrap',
          know3: 'React,Vue,Vite',
          know4: 'Node Js,Next Js',
          know5: 'Photoshop,Adobe XD,Figma',
          // Interest
          inter1: 'Learning Ai',
          inter2: 'Ai Critical Thinking',
          inter3: 'Create Web Apps',
          inter4: 'Custom Website',
          inter5: 'Making Ui/Ux',
          inter6: 'Site Optomization',
          // Programing Skills
        }}
        />
    </>
  );
};

export default App;
