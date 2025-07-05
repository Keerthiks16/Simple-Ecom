import React from "react";
import ObjCard from "./ObjCard";
import "./M1Suits.css";
const W3Lounge = () => {
  return (
    <>
      <div className="obj-section">
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240702/A88v/668405546f60443f312bfedc/-473Wx593H-700155116-beige-MODEL.jpg"
          description="Lounge 1"
          size="XXL"
          price="4000"
          rating="4"
        />
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240702/WfN6/668405546f60443f312bfed7/-473Wx593H-700155118-white-MODEL.jpg"
          description="Lounge 2"
          size="XXL"
          price="3000"
          rating="4.5"
        />
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240520/FCrV/664b7ecd16fd2c6e6a132a2b/-473Wx593H-467343453-wine-MODEL.jpg"
          description="Lounge 3"
          size="XXL"
          price="2500"
          rating="3"
        />
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240521/UanI/664ba6e916fd2c6e6a136b56/-473Wx593H-467343439-turquoise-MODEL.jpg"
          description="Lounge 4"
          size="XXL"
          price="5000"
          rating="4"
        />
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240207/1zWC/65c3b2478cdf1e0df5f4b3d1/-473Wx593H-467052156-navy-MODEL.jpg"
          description="Lounge 5"
          size="XXL"
          price="3500"
          rating="4.5"
        />
        <ObjCard
          image="https://assets.ajio.com/medias/sys_master/root/20240815/r5fj/66bd0c316f60443f310aa64c/-473Wx593H-700289724-beige-MODEL.jpg"
          description="Lounge 6"
          size="XXL"
          price="4000"
          rating="4.5"
        />
      </div>
    </>
  );
};

export default W3Lounge;
