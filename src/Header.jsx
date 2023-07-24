import './Header.css'
const Header = () =>{

    return(
       <>
        <header className='header w-4/5 mx-auto h-28 bg-section-color rounded-xl '>
         <ul className=' h-28 items-center flex justify-between items-center '> 
            <li>
                <a className=' text-3xl font-medium text-first-color hover:text-third-color ' href="">Home</a>
            </li>
            <li>
                <a className=' text-3xl font-medium text-first-color hover:text-third-color ' href="">About Me</a>
            </li>
            <li>
                <a className=' text-3xl font-medium text-first-color hover:text-third-color ' href="">Services</a>
            </li>
            <li>
                <a className=' text-3xl font-medium text-first-color hover:text-third-color ' href="">Portfolio</a>
            </li>
            <li>
                <a className=' text-3xl font-medium text-first-color hover:text-third-color ' href="">Contact Me</a>
            </li>
         </ul>
        </header>
       </>
    );
};
export default Header;