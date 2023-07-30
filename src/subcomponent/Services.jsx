import '../subcomponent/Services.css'
import Polygon from '../assets/Polygon 1.png'


const ServicesComp = ({Services})=>{

    return(
      <>
      <div className="services bg-section-color rounded-xl grid p-8">
        <div className="num-domain flex items-center">
            <div className="num w-32 h-32 rounded-full bg-third-color flex justify-center items-center font-heading1 text-6xl -rotate-45 text-white">{Services.num}</div>
            <div className="domain font-heading1 text-2xl ml-4">{Services.domain}</div>
        </div>
        <ul className=' list'>
        <li className=' flex font-body'><img className=' mr-3 polygon' src={Polygon} alt="" srcset="" />{Services.about1}</li>
        <li className=' flex font-body'><img className=' mr-3 polygon' src={Polygon} alt="" srcset="" />{Services.about2}</li>
        </ul>
      </div>
      </>
    );
}
export default ServicesComp;