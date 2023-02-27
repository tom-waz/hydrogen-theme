import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import Sport1_Img from '../assets/Sport/sport1.jpg';
import Sport2_Img from '../assets/Sport/sport2.jpg';
import Sport3_Img from '../assets/Sport/sport3.jpg';

export function Champion(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:relative">
        <div className="max-w-xl md:max-w-3xl md:px-12 md:py-24 lg:max-w-7xl lg:px-20 mx-auto py-16 px-4">
          <Reveal triggerOnce duration={1000} keyframes={keyframe}>
            <div className="lg:w-8/12 xl:w-7/12">
              <p className="text-subheading text-dark-blue font-bold mb-6 lg:text-3xl">
                Conquistiamo i campioni di tutto il mondo.
              </p>
              <p className="text-text text-dark-blue mb-6 lg:text-xl">
                Tra gli atleti di talento e Magniflex c’è un legame che fa parte
                di una lunga tradizione, che va dalle storiche sponsorizzazioni
                nel mondo del ciclismo, alle più recenti collaborazioni con
                stelle del rugby, fino ad arrivare alla sponsorizzazione della
                nazionale di calcio italiana.
              </p>
              <p className="text-text text-dark-blue mb-6 lg:text-xl">
                Lo sport, come un sonno ristoratore, è una passione senza
                confini, in Italia come nel resto del mondo. I 20 anni di
                presenza in Giappone, hanno spinto l’azienda a legarsi ai più
                importanti eventi sportivi del paese, tanto che alcuni dei più
                celebri campioni giapponesi sono diventati importanti
                testimonial.
              </p>
            </div>
          </Reveal>
        </div>
        <Fade duration={1000} triggerOnce>
          <div className="w-full h-72 lg:h-full lg:absolute lg:right-0 lg:top-0 lg:w-4/12 bg-[url('../assets/Sport/bg-campioni.jpg')] bg-center bg-cover bg-no-repeat"></div>
        </Fade>
      </div>
      <div className="grid grid-cols-2 p-4 md:grid-cols-3 gap-4">
        <Reveal keyframes={keyframe} duration={1000} triggerOnce delay={50}>
          <img src={Sport1_Img} alt="sport image 1" />
        </Reveal>
        <Reveal keyframes={keyframe} duration={1000} triggerOnce delay={100}>
          <img src={Sport2_Img} alt="sport image 2" />
        </Reveal>
        <Reveal keyframes={keyframe} duration={1000} triggerOnce delay={150}>
          <img
            src={Sport3_Img}
            alt="sport image 3"
            className="hidden md:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
