import React from 'react';

import Offering from '@components/offering/offering.component';
import ServiceBanner from '@components/service-banner/service-banner.component';

import style from './style.module.scss';

const ServicePage: React.FC = () => {
  return (
    <div className={style.container}>
      <ServiceBanner />
      <Offering />
      {/* <img src={bg} alt="bg" /> */}
    </div>
  );
};

export default ServicePage;
