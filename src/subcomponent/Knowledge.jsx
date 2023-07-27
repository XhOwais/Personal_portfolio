import Polygon from '../assets/Polygon.png'
const KnowledgeComp = ({ knowledge }) => {
  return (
    <>
      <div className="knowledgeList">
        <ul>
          {knowledge.map((knowledgeItem, index) => (
            <li key={index} className='flex  pb-2 font-body'>
              <img className=' pr-3' src={Polygon} alt="" srcset="" />
              <p>{knowledgeItem.data}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default KnowledgeComp;
