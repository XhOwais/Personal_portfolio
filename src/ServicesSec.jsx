import '../src/ServicesSec.css'
import ServicesComp from '../src/subcomponent/Services'
const ServicesSecComp = ()=>{
    const Services =[
        {
         num: '1',
         domain: 'Web Consulting',
         about1: 'Offering expertise and advice on web development and UI/UX design best practices.',
         about2: 'Providing insights on how clients can improve their online presence and reach their goals.',
        },
        {
         num: '2',
         domain: 'UI/UX Design',
         about1: 'Crafting user-friendly and visually appealing UI/UX designs for web applications and websites.',
         about2: 'Using tools like Adobe XD, Figma, and Photoshop for designing mockups and prototypes.',
        },
        {
         num: '3',
         domain: 'Web App Development',
         about1: "Creating custom web applications tailored to clients' specific needs and requirements.",
         about2: 'Utilizing your critical thinking and problem-solving skills to build AI-powered features or integrating AI capabilities into web applications.',
        },
        {
         num: '4',
         domain: 'Progressive Web Apps',
         about1: 'Creating PWAs with offline capabilities for app-like experience & smooth performance.',
         about2: 'Enhancing user engagement and retention through PWAs.',
        },
        {
         num: '5',
         domain: 'AI Integration ',
         about1: 'Incorporating AI functionalities into web applications to enhance user experience and efficiency.',
         about2: 'Exploring and learning more about AI technologies to stay updated with the latest advancements.',
        },
        {
         num: '6',
         domain: 'Web Security',
         about1: 'Implementing security best practices to protect web applications from common vulnerabilities.',
         about2: 'Conducting security audits and ensuring data privacy.',
        }
    ]
    return(
    <>
    <div className=" p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    {Services.map((service, index) => (
          <ServicesComp key={index} Services={service} />
        ))}
        </div>
    </>
    );
};
export default ServicesSecComp;