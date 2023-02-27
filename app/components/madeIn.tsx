import {Keyframes} from '@emotion/react';
import {Reveal} from 'react-awesome-reveal';
import designImage from '../assets/Agency/design-mattress.jpg';

export function MadeIn(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <>
      <section className="bg-grya-200 relative z-10">
        <Reveal keyframes={keyframe} duration={1000} triggerOnce>
          <div className="bg-[url('../assets/Agency/background.jpg')] h-banner max-h-banner min-h-banner bg-center bg-no-repeat bg-cover">
            <div className="px-3 sm:container h-full">
              <div className="h-full w-full lg:w-10/12 xl:w-7/12 2xl:w-6/12 flex items-end">
                <Reveal
                  keyframes={keyframe}
                  duration={1000}
                  delay={100}
                  triggerOnce
                >
                  <div className="bg-white py-4 px-6 md:p-12 md:pb-6">
                    <div className="mt-12 md:m-12">
                      <p className="text-text text-gold mb-4 lg:text-xl lg:mt-0">
                        MADE IN ITALY
                      </p>
                      <p className="text-subheading text-dark-blue text-lg font-semibold md:text-2xl">
                        La sensibilità artigianale e il genio italiano danno
                        vita a prodotti unici, è solo così che il Made in Italy
                        diventa garanzia di qualità a livello mondiale.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="bg-white">
        <div className="px-3 sm:container">
          <Reveal keyframes={keyframe} duration={1000} triggerOnce>
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-10/12 xl:w-7/12 2xl:w-6/12">
                <img
                  src={designImage}
                  alt="mattress image"
                  className="w-full"
                />
              </div>
              <div className="px-3 w-full lg:w-5/12 lg:ml-offset-1 xl:w-5/12 2xl:w-3/12">
                <p className="text-xl text-8c8c8c my-4">
                  Oggi Magniflex è una grande realtà internazionale, considerata
                  portavoce del sonno ristoratore Made in Italy nel mondo.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
