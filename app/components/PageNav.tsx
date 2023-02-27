import {useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export function PageNav() {
  const navOffset = () => {
    if (window.innerWidth >= 1280) {
      return 181;
    } else {
      return 131;
    }
  };

  return (
    <div className="flex items-center justify-center bg-f7 py-4 mb-6 sticky top-narrow-sticky xxl:top-wide-sticky z-40">
      <AnchorLink
        href="#storia"
        offset={navOffset}
        className="text-10 lg:text-14 text-dark-blue py-2 px-4"
      >
        STORIA
      </AnchorLink>
      <AnchorLink
        href="#azienda"
        offset={navOffset}
        className="text-10 lg:text-14 text-dark-blue py-2 px-4"
      >
        AZIENDA
      </AnchorLink>
      <AnchorLink
        href="#ambiente"
        offset={navOffset}
        className="text-10 lg:text-14 text-dark-blue py-2 px-4"
      >
        AMBIENTE
      </AnchorLink>
      <AnchorLink
        href="#sport"
        offset={navOffset}
        className="text-10 lg:text-14 text-dark-blue py-2 px-4"
      >
        SPORT
      </AnchorLink>
    </div>
  );
}
