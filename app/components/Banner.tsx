import clsx from 'clsx';
import {Fade} from 'react-awesome-reveal';

import badgeLogo from '../assets/badge-logo.png';

/**
 * Hero component that renders metafields attached to collection resources
 **/
export function Banner() {
  return (
    <Fade
      triggerOnce
      className="bg-[url('../assets/home.jpg')] h-banner bg-center bg-no-repeat bg-cover"
    >
      <div className="flex flex-col items-center justify-center h-full text-white">
        <p className="text-subheading lg:text-3xl mb-6 font-medium">
          LA NOSTRA ESSENZA
        </p>
        <h1 className="text-subheading text-center leading-40 font-semibold lg:text-4xl">
          Di notte diamo vita ai tuoi giorni. <br />
          DA oltre 60 anni.
        </h1>
        <img src={badgeLogo} alt="badge-logo" className="w-28 mt-12" />
      </div>
    </Fade>
  );
}
