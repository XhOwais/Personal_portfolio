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
