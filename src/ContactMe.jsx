import '../src/ContactMe.css'
import logoYT from '../src/assets/youtube.png'
import logoGIT from '../src/assets/github.png'
import logoLINK from '../src/assets/linkdin.png'
import logoINSTA from '../src/assets/insta.png'

const ContactMe = () => {
    const contactData = {
        heading: 'Just Say Hi.',
        text: 'I am always open to discuss your project and talk about new things.',
        email: 'xhowais@gmail.com',
    }
    return (
        <>
        <div className="main w-screen flex justify-between px-20">
                <div className="contant w-2/5">
                    <h1 className=' font-heading1 text-main text-first-color py-8'>
                        {contactData.heading}
                    </h1>
                    <p className=' font-body text-second-color pb-8'>{contactData.text}</p>
                    <ul className=' flex justify-between h-12  items-end'>
                        <li>
                            <h4 className=' font-body text-second-color'>Mail me at</h4>
                            <a className=' font-heading1 text-first-color' href="">{contactData.email}</a>
                        </li>
                        <ul className=' icon-list flex'>
                            <li><a href="#"><img src={logoYT} alt="" srcset="" /></a></li>
                            <li><a href="#"><img src={logoGIT} alt="" srcset="" /></a></li>
                            <li><a href="#"><img src={logoLINK} alt="" srcset="" /></a></li>
                            <li><a href="#"><img src={logoINSTA} alt="" srcset="" /></a></li>
                        </ul>
                    </ul>
                </div>
                <div className="form h-96 w-2/5 bg-first-color rounded-xl">

                </div>
            </div>
        </>
    );
};
export default ContactMe;