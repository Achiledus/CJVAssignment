import React from "react";
import "../styles.css"; 
import ContentSection from "../components/ContentSection";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div>
      <HeroSection>
        <ContentSection /> 
      </HeroSection>
    </div>
  );
}

export default Home;
