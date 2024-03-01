import React from "react";
import Image from "next/image";

const Gio = () => {
  return (
    <section className="parent">
      <div className="textoGrid">
        <h2>Quienes Somos </h2>
      </div>
      <div class="fotosGrid">
        <img src="/GioWebo.png" alt="Image 1" className="active" />
        <img src="/GioWebo.png" alt="Image 1" />
        <img src="/GioWebo.png" alt="Image 1" />
        <img src="/GioWebo.png" alt="Image 1" />
      </div>
      <div className="cardGrid">
        <img src="/GioWebo.png" alt="Image 1" />

        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-800">
            Gio
          </h5>
          <p className="mb-4 text-base text-black dark:text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            labore magnam mollitia nulla, incidunt eligendi accusamus illo
            quaerat commodi repellendus suscipit culpa. Dolores exercitationem
            repellat eos asperiores incidunt voluptas nam.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            Last updated 3 mins ago
          </p>
        </div>
      </div>
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
    </section>
  );
};

export default Gio;
