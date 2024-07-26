import { CardService } from '@components/Card';
import React from 'react';
import imgService1 from '../../assets/images/computer_logo.png';
import imgService3 from '../../assets/images/design_logo.png';
import imgService4 from '../../assets/images/joki_logo.png';
import imgService2 from '../../assets/images/mobile_logo.png';
import imgService5 from '../../assets/images/skripsi_logo.png';

const SectionService: React.FC = () => {
  const dataSercive = [
    {
      id: 1,
      title: 'Web Development',
      img: imgService1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Liber odolor rem cum earum incidunt ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 2,
      title: 'Mobile Development',
      img: imgService2,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Liber odolor rem cum earum incidunt ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 3,
      title: 'Design',
      img: imgService3,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Liber odolor rem cum earum incidunt ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 4,
      title: 'Joki Tugas',
      img: imgService4,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Liber odolor rem cum earum incidunt ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 5,
      title: 'Joki Skripsi',
      img: imgService5,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Liber odolor rem cum earum incidunt ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  return (
    <>
      <section className="mt-16" id="service">
        <p className="text-center text-2xl font-semibold">Layanan Kami</p>
        <div className="flex justify-center">
          <div className="mt-20 flex w-10/12 flex-col flex-wrap justify-center gap-x-10 gap-y-14 md:flex-row">
            {dataSercive.map((item) => (
              <CardService key={item.id} title={item.title} img={item.img} content={item.content} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionService;
