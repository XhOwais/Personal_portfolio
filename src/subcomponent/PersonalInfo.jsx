const PersonalInfoCom = ({ personalInfo }) => {
    return (
      <>
        <div className="personalInfo">
          <ul>
            {personalInfo.map((infoItem, index) => (
              <li key={index}>
                <h3>{infoItem.info}</h3>
                <p>{infoItem.data}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  
  export default PersonalInfoCom;
  