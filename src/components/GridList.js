import React from 'react';
// import Competences from './Competences'; pas besoin pour l'instant
import DesktopGridList from './devices/Desktop/DesktopGridList';
import TabletGridList  from './devices/Tablet/TabletGridList';
import MobileGridList  from './devices/Mobile/MobileGridList';

const Portfolio = () => (
  <div>
    {/* DESKTOP Version */}
      <DesktopGridList/>

    {/* TABLET Version */}
      <TabletGridList/>

    {/* MOBILE Version */}
      <MobileGridList/>
  </div>
);

export default Portfolio;
