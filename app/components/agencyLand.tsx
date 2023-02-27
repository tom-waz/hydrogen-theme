import {Keyframes} from '@emotion/react';
import {Fade, Reveal} from 'react-awesome-reveal';
import paesaggioImage from '../assets/Agency/paesaggio-toscana.jpg';

export function AgencyLand(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <Fade triggerOnce duration={1000}>
      <section className="bg-[url('../assets/Agency/bg-tuscany-banner.jpg')] bg-center bg-no-repeat bg-cover mb-10">
        <div className="px-3 sm:container">
          <div className="flex flex-wrap items-center">
            <div className="px-3 w-full md:w-1/2 lg:w-5/12 xl:w-4/12 xl:ml-offset-1 2xl:w-3/12 py-12">
              <p className="text-subheading text-white font-semibold mb-6 lg:text-3xl">
                La Toscana, una terra di incanti
              </p>
              <p className="text-text text-white lg:text-xl">
                Magniflex nasce in Toscana, una regione benedetta dalla natura,
                dove la bellezza dei paesaggi ha sempre ispirato arte e genio. È
                una ricchezza che non poteva non influenzare positivamente la
                cultura aziendale. Perché far svegliare bene il mondo è, senza
                dubbio, una forma d'arte.
              </p>
            </div>
            <div className="px-3 hidden md:block md:w-1/2 lg:w-1/2 lg:ml-offset-1 xl:w-5/12 2xl:w-4/12 2xl:ml-offset-2">
              <Reveal keyframes={keyframe} triggerOnce duration={1000}>
                <img
                  src={paesaggioImage}
                  alt="paesaggio image"
                  className="mt-20 -mb-8"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
