import React from 'react';
import Slider from '../../Slider';
import Header from '../../Header';
import ListCards2 from '../../Cards/ListCards2';
import ListCards from '../../Cards/ListCards';
import {RiSlideshow3Fill} from 'react-icons/ri' ;
import {BiCameraMovie} from 'react-icons/bi';

const Accueil = () => {
  return (
    <React.Fragment>
      <Header/>
      <Slider/>
        <h3 style={{textAlign:"center",marginTop:"30px",marginBottom:"30px",color:"white"}}>Tendance Série Tv <RiSlideshow3Fill/> </h3>
        <ListCards/>
        <div className="container" style={{marginTop:"25px"}}>
          <a href='/series' className='button' style={{textDecoration:"none",width:"190px"}}>
          <span> Lire Plus ! </span></a>
        </div>
        <h3 style={{textAlign:"center",marginTop:"30px",marginBottom:"30px",color:"white"}}>Tendance Films <BiCameraMovie/> </h3>
        <ListCards2/>
        <div className="container" style={{marginTop:"25px",marginBottom:"30px"}}>
          <a href='/films' className='button' style={{textDecoration:"none",width:"190px"}}>
           <span> Lire Plus ! </span></a>
        </div>
    </React.Fragment>
  );
}
export default Accueil;
