/** eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import heroImg from "../../assets/images/hero.png";

const SectionHero: React.FC = () => {
  return (
    <>
      <section
        className="mt-20 flex flex-col-reverse items-center justify-center md:flex-row"
        id="hero"
      >
        <div className="flex w-full flex-col justify-center pl-10 md:w-5/12">
          <div>
            <p className="text-main text-3xl font-bold">
              Komunitas IT Kabupaten Bangkalan
            </p>
            <p className="mb-4 text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              dolor rem cum earum incidunt ipsa.
            </p>
            <a
              href=""
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="bg-main text-small rounded-[10px] px-3 py-2 text-white"
            >
              Gabung Grup Telegram
            </a>
          </div>
        </div>
        <div className="mb-7 mt-10 flex w-full justify-center md:mt-0 md:w-5/12 md:justify-end">
          <img src={heroImg} alt="Hero Image" className="h-auto max-w-full" />
        </div>
      </section>
    </>
  );
};

export default SectionHero;
