import {Fade, Reveal} from 'react-awesome-reveal';
import essenzaImage from '../assets/StoriaBlock/historyIntro.svg';
import image_1 from '../assets/StoriaBlock/storia-1.jpg';
import image_2 from '../assets/StoriaBlock/storia-2.jpg';
import image_3 from '../assets/StoriaBlock/storia-3.jpg';
import medium_image from '../assets/StoriaBlock/img-medium.jpg';
import {MagniflexOggi} from './magniflexOggi';
import {Showroom} from './showroom';
import {Numeri} from './numeri';
import {MadeIn} from './madeIn';
import {MateriePrime} from './materiePrime';
import {AgencyLand} from './agencyLand';
import {Sustainability} from './sustainability';
import {Sottovuoto} from './sottobuoto';
import {Champion} from './champion';
import {WorldMap} from './worldmap';
import {Sport} from './sport';
import {keyframes} from '@emotion/react';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3D(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3D(0, 0, 0);
  }
`;

const _items = [
  {
    title: `Anni '60-'80`,
    desc: `Dall'iniziale produzione di materassi nel laboratorio di Prato la produttività cresce ﬁno a 1000 materassi al giorno.`,
    image: medium_image,
  },
  {
    title: `Anni '90`,
    desc: `Si avvia la conquista dei primi paesi esteri: Germania, Spagna, UK, Russia e Giappone.`,
    image: medium_image,
  },
  {
    title: 'Anni 2000',
    desc: `Nasce Alessanderx SpA, l'azienda produce 10.000 materassi al giorno.
                L'espansione strategica procede in Asia, Medio Oriente, Est Europa, USA.
                Aprono gli showroom Magniﬂex a Singapore, Praga, Milano e Manila.`,
    image: medium_image,
  },
  {
    title: 'Dal 2010 a oggi',
    desc: `Aprono gli showroom di Bangalore, Roma, Bratislava, Osaka, Shanghai, Riyad, Soﬁa, Beijing, Dongguan,
                Costa d'Avorio e Miami.<br>
                Insieme al lancio di nuove collezioni, cresce l'espansione strategica in Grecia, Algeria, Polonia,
                Macedonia, Repubblica Dominicana, Colombia, Serbia, Turchia e Kirghizistan.<br>
                Avviene il lancio di Magni Smartech.<br>
                La distribuzione raggiunge 99 paesi.<br>
                Aprono gli showroom e le sedi di Bönen (Germania) e Londra.`,
    image: medium_image,
  },
  {
    title: 'Nel 2022',
    desc: `L'azienda raggiunge un traguardo importante, 60 anni di attività. Un lungo percorso segnato da una
                continua evoluzione, caratterizzato dalla ricerca costante di nuove soluzioni al servizio del comfort
                e del benessere.`,
    image: medium_image,
  },
];

export function Storia() {
  return (
    <section id="storia" className="bg-white">
      <div className="essence-block">
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
          <div className="flex flex-wrap">
            <div className="px-3 w-full lg:w-1/3 xl:w-1/4 2xl:w-1/4 relative mb-6">
              <Reveal
                keyframes={customAnimation}
                triggerOnce
                delay={50}
                duration={1000}
              >
                <div>
                  <span className="text-subheading font-bold text-dark-blue max-w-xxs lg:text-4xl">
                    La nostra essenza
                  </span>
                  <img
                    src={essenzaImage}
                    alt="essenza image"
                    className="absolute top-0 right-3 -translate-y-1/2"
                  />
                </div>
              </Reveal>
            </div>
            <div className="px-3 w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
              <Reveal
                keyframes={customAnimation}
                triggerOnce
                delay={100}
                duration={1000}
              >
                <p className="mb-2 text-text lg:text-xl text-dark-blue">
                  Nel DNA di Magniflex ci sono la ricerca della migliore qualità
                  del sonno, una propensione naturale all’innovazione, il
                  rispetto dell’ambiente.
                </p>
              </Reveal>
            </div>
            <div className="px-3 w-full lg:w-1/3 xl:w-1/3 2xl:w-5/12">
              <Reveal
                keyframes={customAnimation}
                triggerOnce
                delay={150}
                duration={1000}
              >
                <p className="mb-2 text-text lg:text-xl text-dark-blue">
                  Elementi fondamentali, senza i quali non potremmo realizzare
                  il nostro sogno: offrirvi un’esperienza di riposo in grado di
                  ricaricarvi mentre dormite. Per affrontare la giornata, e la
                  vita, con il massimo benessere possibile.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="storia-images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-3">
        <Reveal
          keyframes={customAnimation}
          triggerOnce
          delay={50}
          duration={1000}
        >
          <img src={image_1} className="w-full" alt="storia-image-1" />
        </Reveal>
        <Reveal
          keyframes={customAnimation}
          triggerOnce
          delay={100}
          duration={1000}
        >
          <img src={image_2} className="w-full" alt="storia-image-2" />
        </Reveal>
        <Reveal
          keyframes={customAnimation}
          triggerOnce
          delay={150}
          duration={1000}
        >
          <img
            src={image_3}
            className="w-full hidden md:block"
            alt="storia-image-3"
          />
        </Reveal>
      </div>
      <div className="laboratory px-3 sm:container bg-white py-16 md:py-24 lg:py-28">
        <Reveal keyframes={customAnimation} triggerOnce duration={1000}>
          <div className="flex flex-row flex-wrap justify-between">
            <div className="px-3 lg:w-1/2 xl:w-5/12 2xl:w-4/12">
              <p className="text-text text-gold mt-6 mb-4 lg:text-xl">1962</p>
              <p className="text-subheading text-dark-blue font-bold leading-8 lg:text-3xl">
                Negli anni '60 Giuliano Magni creava i suoi primi materassi in
                un piccolo laboratorio. Era l'inizio di un percorso che si
                sarebbe trasformato in una rivoluzione.
              </p>
            </div>
            <div className="px-3 lg:w-1/2 xl:w-7/12 2xl:w-7/12">
              <p className="text-gold mt-6 mb-4 uppercase">LE origini</p>
              <p className="text-dark-blue my-4">
                A Prato, capitale mondiale dei tessuti, la forte competenza
                artigianale si sposava con idee innovative sul riposo e sul
                benessere.
              </p>
              <p className="text-dark-blue my-4">
                Da allora Magniflex ha fatto dormire bene, e risvegliare ancora
                meglio, oltre 50 milioni di persone, grazie a un'offerta di
                soluzioni e modelli studiati per soddisfare le più varie
                esigenze di comfort, relax e salute.
              </p>
              <p className="text-dark-blue my-4">
                Nel corso degli ultimi 60 anni, la passione per la ricerca e i
                grandi investimenti nell'innovazione, nel design e nello
                sviluppo di sistemi produttivi all'avanguardia hanno reso
                Magniflex sinonimo universale di comfort e benessere.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      {/* <div className="history-slider px-4 lg:px-10">
        {_items.map((item, index) => (
          <div className="flex flex-col">
            <img src={item.image} alt={`history-image-${index}`} />
            <p className="text-2xl text-gold mt-5 mb-2">{item.title}</p>
            <p className="text-xs text-dark-blue">{item.desc}</p>
          </div>
        ))}
      </div> */}
      <MagniflexOggi keyframe={customAnimation} />
      <Showroom keyframe={customAnimation} />
      <Numeri keyframe={customAnimation} />
      <MadeIn keyframe={customAnimation} />
      <MateriePrime keyframe={customAnimation} />
      <AgencyLand keyframe={customAnimation} />
      <Sustainability keyframe={customAnimation} />
      <Sottovuoto keyframe={customAnimation} />
      <Sport keyframe={customAnimation} />
      <Champion keyframe={customAnimation} />
      <WorldMap keyframe={customAnimation} />
    </section>
  );
}
