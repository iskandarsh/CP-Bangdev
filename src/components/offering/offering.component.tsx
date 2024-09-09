import React from 'react';
import { Card } from 'flowbite-react';

import codeLine from '@assets/images/logo/code_line.svg';
import mobileLine from '@assets/images/logo/mobile_line.svg';

import style from './offering.module.scss';

const Offering: React.FC = () => {
  return (
    <div className={style.offering}>
      <span className={style.title}>Layanan Yang Kami Tawarkan</span>
      <div className={style.offeringCard}>
        <div className={style.stack}>
          <div className={style.card1}>
            <Card>
              <div className="flex h-[180px] w-[180px] flex-col items-center gap-3">
                <img src={codeLine} alt="code-line" width="40%" />
                <span className="text-lg font-semibold">Web Development</span>
                <p className="text-sm font-extralight text-gray-600">lorem</p>
              </div>
            </Card>
          </div>
          <div className={style.card2}>
            <Card>
              <div className="flex h-[180px] w-[180px] flex-col items-center gap-3">
                <img src={mobileLine} alt="mobile-line" width="40%" />
                <span className="text-lg font-semibold">Mobile Development</span>
                <p className="text-sm font-extralight text-gray-600">lorem</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offering;
