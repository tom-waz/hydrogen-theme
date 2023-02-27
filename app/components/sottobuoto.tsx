import {Keyframes} from '@emotion/react';
import Reveal, {Fade} from 'react-awesome-reveal';
import Signor_img from '../assets/Environment/signor-magniflex.jpg';

export function Sottovuoto(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <section className="bg-f7">
      <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
        <Reveal keyframes={keyframe} triggerOnce duration={1000}></Reveal>
        <div className="flex flex-wrap">
          <div className="px-3 w-full lg:w-5/12 xl:w-4/12 2xl:w-3/12 2xl:ml-offset-1">
            <p className="text-text text-gold mb-6 lg:text-xl">SOTTOVUOTO</p>
            <p className="text-subheading text-dark-blue font-bold mb-6 lg:text-3xl">
              Una rivoluzione targata Magniflex
            </p>
          </div>
          <div className="lg:w-1/2 lg:ml-offset-1 xl:w-1/2 xl:ml-offset-2 2xl:w-1/2 2xl:ml-offset-2">
            <p className="text-text text-dark-blue lg:text-xl">
              A Prato, capitale mondiale dei tessuti, la forte competenza
              artigianale si sposava con idee innovative sul riposo e sul
              benessere. Da allora Magniflex ha fatto dormire oltre 50 milioni
              di persone, grazie a un'offerta di soluzioni e modelli studiati
              per soddisfare le più varie esigenze di comfort, relax e salute.
              Nel corso degli ultimi 60 anni, la passione per la ricerca e i
              grandi investimenti nell'innovazione, nel design e nello sviluppo
              di sistemi produttivi all'avanguardia hanno reso Magniflex
              sinonimo universale di comfort e benessere.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 relative lg:-mt-24 overflow-hidden">
        <Fade triggerOnce duration={1000}>
          <span className="mt-28 bg-[url('../assets/Environment/bg-sottovuoto.jpg')] bg-cover bg-no-repeat bg-center h-4/6 absolute w-full top-auto bottom-0 left-0"></span>
        </Fade>
        <div className="px-3 sm:container relative">
          <Reveal keyframes={keyframe} duration={1000} triggerOnce>
            <div className="flex">
              <div className="w-8/12 md:w-1/2 lg:w-5/12">
                <img
                  src={Signor_img}
                  alt="signore magniflex image"
                  className="w-full lg:mb-16"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
