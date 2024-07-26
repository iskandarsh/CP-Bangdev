import React from 'react';

interface ICardServiceProps {
  title: string;
  content: string;
  img: string;
}

const CardService: React.FC<ICardServiceProps> = ({ title, content, img }) => {
  return (
    <div className="relative mx-auto w-8/12 rounded-[25px] border-none bg-white px-3 py-4 drop-shadow-md md:mx-0 md:w-3/12">
      <div className="relative top-[-50px] flex justify-center">
        <img src={img} className="rounded-full border-none bg-white drop-shadow-md" width="25%" alt="" />
      </div>
      <div className="mt-[-30px] text-center text-xl font-bold">{title}</div>
      <div className="mt-3 text-sm">{content}</div>
    </div>
  );
};

export default CardService;
