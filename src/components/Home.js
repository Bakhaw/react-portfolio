import React from 'react';
import DesktopHome from './devices/Desktop/DesktopHome';
import TabletHome  from './devices/Tablet/TabletHome';
import MobileHome  from './devices/Mobile/MobileHome';

const Home = () => (
    <div>
      {/* // DESKTOP Version */}
        <DesktopHome />

      {/* // TABLET Version */}
        <TabletHome />

      {/* // MOBILE Version */}
        <MobileHome />
    </div>
)

export default Home;
