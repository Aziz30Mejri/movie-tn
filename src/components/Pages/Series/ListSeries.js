import React,{useState, useEffect} from 'react';
import Agent from "./serie";

const ListSeries = ({ searchTerm }) => {
    const [Series] = useState([
        {id:1,nom:"Baraa", image:"../../images/baraa.jpg" ,notation:"4.1",telechargement:"4.5M"},
        {id:2,nom:"Nouba", image:"../../images/nouba.webp",notation:"3.5", telechargement:"4.1M"},
        {id:3,nom:"Jbal Lahmer", image:"../../images/الجبل الأحمر.jpg",notation:"4", telechargement:"4.7M"},
        {id:4,nom:"Sabak Lkhir", image:"../../images/saba9L5ir.jpg",notation:"3.5", telechargement:"3.9M"},
        {id:5,nom:"Fallouja", image:"../../images/fallouja.jpg" ,notation:"5",telechargement:"9.5M"},
        {id:6,nom:"Lella Cendrela", image:"../../images/للا-السندريلا.jpg",notation:"3.2", telechargement:"1.1M"},
        {id:7,nom:"El Foundo", image:"../../images/foundo.jpg",notation:"4", telechargement:"4.7M"},
        {id:8,nom:"Agent 86", image:"../../images/agent86.jpg",notation:"2.5", telechargement:"3.9M"},     
    ]);
    // Randomiser la liste à chaque actualisation
    const [randomizedSeries, setRandomizedSeries] = useState([]);
    useEffect(() => {
        const shuffledSeries = [...Series].sort(() => Math.random() - 0.5);
        setRandomizedSeries(shuffledSeries);
    }, [Series]);
    // Filtrer selon le terme de recherche
    const filteredSeries = randomizedSeries.filter((serie) =>
        serie.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <div className="scroll">
            {filteredSeries.map((value)=>{
                return <Agent key={value.id} nom={value.nom} img={value.image} notation= {value.notation} telechargement={value.telechargement} />
            })}
        </div>
    );
};

export default ListSeries;
