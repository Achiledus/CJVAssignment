import React from "react";
import { Link } from "react-router-dom"; 
import "../styles.css"; 
import actor1 from "../MovieAssets/actors/actor1.png";
import actor2 from "../MovieAssets/actors/actor2.png";
import actor3 from "../MovieAssets/actors/actor3.png";
import actor4 from "../MovieAssets/actors/actor4.png";
import actor5 from "../MovieAssets/actors/actor5.png";
import actor6 from "../MovieAssets/actors/actor6.png";

const actors = [
  { name: "Cillian Murphy", img: actor1 },
  { name: "Kira Noir", img: actor2 },
  { name: "Denzel Washington", img: actor3 },
  { name: "Chloë Grace Moretz", img: actor4 },
  { name: "Uzoamaka Onouha", img: actor5 },
  { name: "Damson Isreal", img: actor6 },
];

const ContentSection = () => {
  return (
    <div className="content-bar">
      <h2 className="content-title">ACTOR'S <br/> SPOTLIGHT</h2>
      <div className="content-actors">
        {actors.map((actor, index) => (
          <Link 
            key={index} 
            to={`/movies?actor=${encodeURIComponent(actor.name)}`} 
            className="actor-link"
          >
            <img src={actor.img} alt={actor.name} title={`View movies of ${actor.name}`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
