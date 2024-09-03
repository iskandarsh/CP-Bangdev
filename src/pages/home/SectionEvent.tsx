/** eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

import { CardEvent } from '@components/Cards';
import imgEvent from '../../assets/images/real_event.jpeg';

const SectionEvent: React.FC = () => {
  const dataEvent = [
    {
      id: 1,
      title: 'Mini Bootcamp',
      img: imgEvent,
      date: '9 Juli 2023',
      content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
      id: 2,
      title: 'Mini Bootcamp',
      img: imgEvent,
      date: '9 Juli 2023',
      content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
      id: 3,
      title: 'Mini Bootcamp',
      img: imgEvent,
      date: '9 Juli 2023',
      content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
  ];

  return (
    <>
      <section className="mt-20" id="event">
        <p className="text-center text-2xl font-semibold">
          <span className="text-main">BangkalanDev</span>
        </p>
        <div className="mt-28 rounded-[10px] bg-[#EA222B]">
          <div className="relative top-[-60px] flex flex-col justify-center gap-5 md:flex-row">
            {dataEvent.map((item) => (
              <CardEvent key={item.id} title={item.title} img={item.img} date={item.date} content={item.content} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionEvent;
