const PersonalInfoCom = ({ personalInfo }) => {
    return (
      <>
        <div className="personalInfo">
          <ul>
            {personalInfo.map((infoItem, index) => (
              <li className=" flex justify-between w-auto font-body text-second-color pb-2" key={index}>
                <h3 className=" font-heading1 text-first-color">{infoItem.info}</h3>
                <p className=" w-36">{infoItem.data}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  
  export default PersonalInfoCom;
  