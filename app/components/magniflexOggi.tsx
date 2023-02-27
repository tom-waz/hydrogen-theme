import {Keyframes} from '@emotion/react';
import {Reveal} from 'react-awesome-reveal';
import img from '../assets/StoriaBlock/magniflex-family.jpg';

export function MagniflexOggi(props: {keyframe: Keyframes}) {
  const {keyframe} = props;
  return (
    <section className="bg-f7">
      <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
        <Reveal keyframes={keyframe} duration={1000} triggerOnce>
          <div className="flex flex-row flex-wrap justify-between">
            <div className="px-3 lg:w-5/12 xl:w-4/12 2xl:w-3/12 mb-6 lg:mb-0">
              <p className="text-subheading text-dark-blue font-semibold lg:text-4xl">
                Magniflex Oggi
              </p>
              <p className="text-text text-dark-blue mt-6">
                L'azienda è presente in tutto il mondo con oltre 4000
                rivenditori in 99 mercati internazionali, ed è fornitore di
                oltre 500 grandi alberghi. Un management giovane e determinato
                prosegue lo sviluppo del brand lungo la strada tracciata dal
                presidente Giuliano Magni, gestendo un sistema imprenditoriale
                con profonde radici territoriali, sempre più orientato
                all'espansione worldwide.
              </p>
            </div>
            <div className="px-3 lg:w-7/12 xl:w-8/12 2xl:w-8/12">
              <img src={img} alt="magniflex oggi image" className="w-full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
