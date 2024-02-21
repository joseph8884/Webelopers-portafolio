import React from "react";
import Image from "next/image";

const Gio = () => {
  return (
    <section className="quienes_somos_carrusel">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image src="/GioWebo.png" alt="Image 1" width={100} height={100} />
        </div>
        <div>
          <Image src="/GioWebo.png" alt="Image 1" width={100} height={100} />
        </div>
        <div>
          <Image src="/GioWebo.png" alt="Image 1" width={100} height={100} />
        </div>
        <div>
          <Image src="/GioWebo.png" alt="Image 1" width={100} height={100} />
        </div>
      </div>

      <div className="flex flex-col rounded-lg bg-white dark:bg-white dark:text-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row p-8">
        <Image
          src="/GioWebo.png"
          alt="Celular"
          width={100}
          height={20}
          layout="responsive"
        />
        <div class="flex flex-col justify-start p-6">
          <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-800">
            Gio
          </h5>
          <p class="mb-4 text-base text-black dark:text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            labore magnam mollitia nulla, incidunt eligendi accusamus illo
            quaerat commodi repellendus suscipit culpa. Dolores exercitationem
            repellat eos asperiores incidunt voluptas nam.
          </p>
          <p class="text-xs text-neutral-500 dark:text-neutral-300">
            Last updated 3 mins ago
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gio;
