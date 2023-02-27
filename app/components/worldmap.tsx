export function WorldMap(props: {keyframe: string}) {
  return (
    <section className="bg-[url('../assets/world-map.jpg')] bg-contain bg-center bg-no-repeat h-banner max-h-banner min-h-banner">
      <div className="px-3 sm:container py-16 md:py-24 lg:py-28 h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center">
            <p className="text-gold uppercase py-5 mb-4">PUNTI VENDITA</p>
            <p className="text-subheading lg:text-4xl text-dark-blue font-bold mb-2">
              Trova il punto vendita più vicino a te
            </p>
            <button className="border border-dark-blue text-dark-blue uppercase px-4 py-2 mt-6">
              scopri di più
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
