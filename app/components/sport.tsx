import {Keyframes} from '@emotion/react';
import Reveal from 'react-awesome-reveal';
import Buffon_Img from '../assets/Sport/buffon.jpg';
import Castrogiovanni_Img from '../assets/Sport/castrogiovanni.jpg';
import Chiellini_Img from '../assets/Sport/chiellini.jpg';

export function Sport(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <section className="pt-28" id="sport">
      <Reveal keyframes={keyframe} duration={1000}>
        <div className="max-w-xl mx-auto md:max-w-3xl md:px-12 lg:max-w-7xl lg:px-20 py-6 px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="lg:w-3/12">
              <p className="text-text text-gold uppercase lg:text-xl mb-6">
                SPORT
              </p>
              <p className="text-subheading text-dark-blue font-semibold mb-6 lg:text-3xl">
                Facciamo il tifo per una vita sana, da sempre.
              </p>
              <div className="grid grid-cols-3 mb-6 gap-2 lg:flex lg:flex-col">
                <img src={Buffon_Img} alt="buffon image" />
                <img src={Castrogiovanni_Img} alt="castrogiovanni image" />
                <img src={Chiellini_Img} alt="chiellini image" />
              </div>
            </div>
            <div className="lg:w-8/12">
              <p className="text-text text-dark-blue mb-6 lg:text-xl">
                Magniflex ha un rapporto privilegiato con lo sport. Già negli
                anni '80 l'azienda è stata sponsor del Giro d'Italia, a
                sottolineare lo stretto legame che esiste tra un riposo
                rigenerante e uno stile di vita sano. E anche oggi la grande
                passione per lo sport guida l'azienda nell'impegno a promuovere
                una cultura del buon riposo come fonte di energia.
              </p>
              <p className="text-text text-dark-blue mb-6 lg:text-xl">
                Negli anni, infatti, Magniflex ha supportato vari giocatori
                della Nazionale Italiana di Rugby, esempi di performance e
                genuinità, chiamandoli a essere testimonial della qualità che
                l'azienda trasferisce in ogni prodotto. (aggiungere uno spazio)
                E nel 2016 questa filosofia ha portato a ingaggiare come volto
                di Magniflex una leggenda dello sport italiano e internazionale:
                Gianluigi Buffon. Nel biennio 2017-18, è la volta della
                partnership con la Nazionale Italiana di Calcio, che include la
                fornitura di materassi e cuscini per il Centro Tecnico Federale
                di Coverciano.
              </p>
              <p className="text-text text-dark-blue mb-6 lg:text-xl">
                Ma l'impegno a fianco del mondo dello sport non finisce qui. Nel
                2021 Magniflex diviene National Partner della Volleyball Nations
                League, la competizione riservata alle nazionali di pallavolo
                creata nel 2018. Un segno tangibile del legame tra il brand e
                uno stile di vita sano, un'attestazione di interesse per una
                cultura rivolta al buon riposo per un ottimo risveglio.
              </p>
              <p className="text-text text-dark-blue mb-6 lg:text-xl">
                E chi meglio di un campione d'Europa come Giorgio Chiellini per
                proseguire il rapporto che da anni lega Magniflex al mondo dello
                sport? Capitano della Nazionale Italiana di calcio vincitrice
                dell'ultima manifestazione europea, un giocatore di origini
                toscane, che ci permette di legare il nome dell'azienda al luogo
                in cui tutto è nato. Per un binomio forte, radicato, fatto di
                principi sani e duro lavoro.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
