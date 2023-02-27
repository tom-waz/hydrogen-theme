import {Keyframes} from '@emotion/react';
import {Reveal} from 'react-awesome-reveal';

export function Numeri(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <>
      <section id="azienda" className="bg-f7">
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
          <div className="flex flex-wrap justify-between">
            <div className="px-3 w-full lg:w-4/12 xl:w-3/12 2xl:w-3/12">
              <Reveal keyframes={keyframe} duration={1000} triggerOnce>
                <p className="text-text text-gold uppercase mb-6 lg:text-xl">
                  I Numeri
                </p>
              </Reveal>
            </div>
            <div className="px-3 w-full lg:w-4/12 xl:w-4/12 2xl:w-4/12">
              <Reveal keyframes={keyframe} duration={1000} triggerOnce>
                <p className="text-dark-blue mb-2 text-text lg:text-xl">
                  <strong> 60 anni </strong> di storia.
                  <br />
                  Un catalogo di <strong> 170 prodotti.</strong>
                  <br />
                  Presente in <strong> 99 paesi.</strong>
                  <br />
                  Più di <strong> 4.000 rivenditori.</strong>
                </p>
              </Reveal>
            </div>
            <div className="px-3 w-full lg:w-4/12 xl:w-4/12 2xl:w-5/12">
              <Reveal keyframes={keyframe} duration={1000} triggerOnce>
                <p className="text-dark-blue mb-2 text-text lg:text-xl">
                  Oltre <strong> 40 milioni di clienti</strong> nel mondo.
                  <br />
                  <strong> 10.000 materassi</strong> prodotti al giorno.
                  <br />
                  Presenti in oltre <strong> 500 alberghi.</strong>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-f7">
        <div className="sm:container">
          <p className="text-8xl text-light-gray font-bold text-center whitespace-nowrap lg:text-x-large">
            60 ANNI
          </p>
        </div>
      </section>
    </>
  );
}
