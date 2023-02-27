import Nature_Img from '../assets/Environment/rispetto-natura.jpg';
import Logo_Img from '../assets/Environment/logo.png';
import {Reveal} from 'react-awesome-reveal';
import {Keyframes} from '@emotion/react';

export function Sustainability(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <section className="bg-white" id="ambiente">
      <Reveal keyframes={keyframe} triggerOnce duration={1000}>
        <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
          <div className="flex flex-wrap items-center">
            <div className="px-3 w-full lg:w-1/2">
              <p className="text-text text-gold uppercase mb-6 lg:text-xl">
                Sostenibilità
              </p>
              <img src={Nature_Img} alt="nature image" />
            </div>
            <div className="px-3 lg:w-1/2 xl:w-5/12 xl:ml-offset-1">
              <p className="text-subheading lg:text-3xl font-semibold mb-3 text-dark-blue">
                In un mondo migliore ci si sveglia meglio
              </p>
              <p className="text-text lg:text-xl text-dark-blue">
                Magniflex opera da sempre nel segno della responsabilità
                ambientale, l'azienda ha ridotto le emissioni di CO2 anche
                grazie all'utilizzo di pannelli fotovoltaici. Il costante
                impegno ecologico viene riconosciuto inoltre da due
                certificazioni: OEKO-TEX ® CLASS I, che garantisce l'assenza di
                sostanze tossiche e nocive per l'uomo e per l'ambiente
                all'interno di ogni componente del prodotto finale, e GOTS, che
                attesta la realizzazione di tessuti fatti con materiali 100%
                organici.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap pt-12 md:mt-12">
            <div className="px-3 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 xl:ml-offset-1">
              <p className="text-text lg:text-xl">
                Magniflex ha inoltre deciso di abbracciare il progetto SDG's
                dell'ONU, per guidare una strategia di miglioramento ambientale
                chiara e misurabile in tutta la sua impresa.
              </p>
            </div>
            <div className="px-3 sm:w-10/12 md:w-8/12 lg:w-5/12 xl:w-4/12 xl:ml-offset-1 2xl:w-3/12 2xl:ml-offset-1">
              <img src={Logo_Img} alt="sustainability logo image" />
              <button className="px-7 py-3 border text-xs border-dark-blue text-dark-blue uppercase mt-12">
                scopri di più
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
