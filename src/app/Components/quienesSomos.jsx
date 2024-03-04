import React from "react";
import Image from "next/image";

const QuienesSomos = () => {
  return (
    <section className="parent2">
      <div className="cardGrid2">
        <div className="leftQuienesSomos">
          <h5 className="mb-2 text-4xl font-medium text-neutral-800 dark:text-neutral-800">
            Tus expertos en diseño
          </h5>
          <p className="mb-4 text-base text-black dark:text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architectolabore magnam mollitia nulla, incidunt eligendi accusamus
            illoquaerat commodi repellendus suscipit culpa. Dolores
            exercitationemrepellat eos asperiores incidunt voluptas nam.
          </p>
          <p className="mb-4 text-base text-black dark:text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architectolabore magnam mollitia nulla, incidunt eligendi accusamus
            illoquaerat commodi repellendus suscipit culpa. Dolores
            exercitationemrepellat eos asperiores incidunt voluptas nam.
          </p>
          <button className="botonQuienesSomos">Cotiza con nosotros !</button>
        </div>
        <div className="imagenQuienesSomos"></div>
        <div className="changeCard">
          <button className="change">
            <img src="/webitoBorde.png" alt="Image 1" />
          </button>
          <button className="change">
            <img src="/webitoBorde.png" alt="Image 1" />
          </button>
          <button className="change">
            <img src="/webitoBorde.png" alt="Image 1" />
          </button>
          <button className="change">
            <img src="/webitoBorde.png" alt="Image 1" />
          </button>
          <button className="change">
            <img src="/webitoBorde.png" alt="Image 1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
