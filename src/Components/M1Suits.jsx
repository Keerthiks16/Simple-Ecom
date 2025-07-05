import React from "react";
import ObjCard from "./ObjCard";
import "./M1Suits.css";
const M1Suits = () => {
  return (
    <>
      <div className="obj-section">
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240712/ZXLC/669154e76f60443f31fab075/-473Wx593H-469666633-navy-MODEL.jpg"
          description="Suit 1"
          size="XXL"
          price="4000"
          rating="4"
        />
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240712/95pI/66914d1f1d763220fa72b45d/-473Wx593H-469666633-black-MODEL.jpg"
          description="Suit 2"
          size="XXL"
          price="3000"
          rating="4.5"
        />
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20220722/CbYg/62dad97eaeb26921af90d824/-473Wx593H-469063047-darkgreen-MODEL.jpg"
          description="Suit 3"
          size="XXL"
          price="2500"
          rating="3"
        />
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240305/kADW/65e704b705ac7d77bb9828d0/-473Wx593H-443034788-wine-MODEL.jpg"
          description="Suit 4"
          size="XXL"
          price="5000"
          rating="4"
        />
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240305/vXbO/65e7043805ac7d77bb982402/-473Wx593H-443034793-maroon-MODEL.jpg"
          description="Suit 5"
          size="XXL"
          price="3500"
          rating="4.5"
        />
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240305/DeN9/65e706ec16fd2c6e6a3cbeae/-473Wx593H-443034790-navy-MODEL.jpg"
          description="Suit 6"
          size="XXL"
          price="4000"
          rating="4.5"
        />
      </div>
    </>
  );
};

export default M1Suits;
