import {Keyframes} from '@emotion/react';
import {Reveal} from 'react-awesome-reveal';

export function Showroom(props: {keyframe: Keyframes}) {
  const {keyframe} = props;

  return (
    <section>
      <div className="px-3 sm:container py-16 md:py-24 lg:py-28">
        <Reveal keyframes={keyframe} duration={1000} triggerOnce>
          <div>
            <p className="text-text text-gold uppercase lg:text-xl mb-5">
              SHOWROOM
            </p>
            <p className="text-subheading text-8c8c8c lg:text-3xl font-semibold">
              Florence - Tokyo - Cyprus - Dubai - Prague - Kiev - Milan - Manila
              - Sofia - Miami Bangalore - Osaka - Bucarest - Moscow - Nanjing -
              Dongguan - Shanghai - Beijing - Shenzhen - Sidney - Rome - Abidjan
              - Belgrade - Budapest - Bogota - Medellin - Accra Zagreb - Santo
              Domingo - Punta del Este - Buenos Aires - Johannesburg - Cape Town
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
