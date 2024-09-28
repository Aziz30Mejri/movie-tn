import React from 'react';
import {FaStar}from 'react-icons/fa';
import {BiCloudDownload} from 'react-icons/bi';

const film = (props) => {
  return (
    <div style={{display:"inline-block",flexWrap:"wrap",justifyContent:"space-between",marginLeft:"40px",marginTop:"30px"}}>
      <div className="card" style={{width: "18rem",marginLeft:"20px"}}>
        <img src={props.img} className="card-img-top" alt="..."style={{width: "15rem",marginLeft:"25px",maxHeight:"320px",marginTop:"25px"}}/>
        <div className="card-body">
          <h4 className="card-title"style={{textAlign:"center"}}>{props.nom}</h4>
          <h6 className="card-telechargement"style={{textAlign:"center"}}>{props.notation} <FaStar className="star-icon" style={{marginTop:"-4px"}}/> </h6>
            <h6 className="card-telechargement"style={{textAlign:"center"}}>{props.telechargement} <BiCloudDownload className="download-icon"/> </h6>
        </div>
      </div>
    </div>
  );
}

export default film;