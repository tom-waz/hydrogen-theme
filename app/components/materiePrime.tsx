import {Keyframes} from '@emotion/react';
import {Reveal} from 'react-awesome-reveal';
import img from '../assets/Agency/materie-prime.jpg';

export function MateriePrime(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <section className="bg-white">
      <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
        <Reveal keyframes={keyframe} duration={1000} triggerOnce>
          <div className="flex flex-wrap items-center">
            <div className="px-3 w-full lg:w-1/2 xl:w-5/12">
              <p className="text-subheading text-dark-blue font-semibold lg:text-3xl mb-6">
                La qualità delle materie e delle capacità
              </p>
              <p className="text-text text-dark-blue mb-6 lg:text-2xl">
                Magniflex è sinonimo di eccellenza. Da sempre i prodotti
                dell'azienda si distinguono per il reale valore aggiunto offerto
                ai clienti. La qualità. Questo è possibile perché Magniflex
                utilizza materiali 100% italiani, avvalendosi della competenza
                di tecnici specializzati e di oltre 180 professionisti che
                lavorano a fianco a fianco, condividendo passione e know how.
              </p>
            </div>
            <div className="px-3 w-full lg:w-1/2 xl:w-6/12 xl:ml-offset-1">
              <img src={img} alt="magniflex oggi image" className="w-full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
