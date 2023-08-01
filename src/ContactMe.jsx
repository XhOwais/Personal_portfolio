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
            <div className="main w-screen h-screen items-center xl:flex justify-between max-2xl:py-16 px-20">
                <div className="contant xl:w-2/5 pb-10">
                    <h1 className=' font-heading1 text-main text-first-color py-8'>
                        {contactData.heading}
                    </h1>
                    <p className=' font-body text-second-color pb-8'>{contactData.text}</p>
                    <ul className=' flex justify-between h-12  items-end '>
                        <li>
                            <h4 className=' font-body text-second-color'>Mail me at</h4>
                            <a className=' font-heading1 text-first-color' href="">{contactData.email}</a>
                        </li>
                        <div className=' h-12'>
                            <h2 className=' font-body'>Follow me</h2>
                            <ul className=' icon-list'>
                                <li><a href="#"><img src={logoYT} alt="" srcset="" /></a></li>
                                <li><a href="#"><img src={logoGIT} alt="" srcset="" /></a></li>
                                <li><a href="#"><img src={logoLINK} alt="" srcset="" /></a></li>
                                <li><a href="#"><img src={logoINSTA} alt="" srcset="" /></a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="form h-96 xl:w-2/5 bg-first-color rounded-xl">
                    <form className=' grid p-14' action="">
                        <input placeholder='Your name' className=' bg-first-color h-10 mb-4 border-b-2 text-section-color' type="text" />
                        <input placeholder='Your email adress ' className=' bg-first-color h-10 mb-4 border-b-2 text-section-color' type="email" name="" id="" />
                        <input placeholder='Your budget (optional)' className=' bg-first-color h-10 mb-4 border-b-2 text-section-color' type="text" />
                        <input placeholder='Your project discription' className=' bg-first-color h-10 mb-4 border-b-2 text-section-color' type="text" />
                    </form>
                    <button className=' w-36 h-16 bg-third-color float-right rounded-xl'>Submit</button>
                </div>
            </div>
        </>
    );
};
export default ContactMe;