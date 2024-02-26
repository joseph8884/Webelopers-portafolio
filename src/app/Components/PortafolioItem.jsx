import React from "react";
import Image from "next/image";


const PortafolioItem = ({ imageSrc, altText, projectName, onClick }) => {
  return (
    <div className="portafolioItem" onClick={onClick}>
      <div className="portafolioItemInner">
        <div className="portafolioItemImg">
          <Image
            loading="lazy"
            src={imageSrc}
            alt={altText}
            width={500}
            height={300}
          />
          <div className="viewProject">Ver Proyecto</div>
        </div>
        <p>{projectName}</p>
      </div>
    </div>
  );
};

export default PortafolioItem;
