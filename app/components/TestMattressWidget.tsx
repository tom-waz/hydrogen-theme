import img from '../assets/Test/tab-slide-scopri-materasso-1.jpg';

export function TestMattressWidget() {
  return (


    <div className="flex flex-row flex-wrap justify-between items-center bg-B5B5B4">
        <div className="sm:container relative px-32 pb-20 overflow-hidden">

          <h3 className="text-white text-5xl font-semibold pb-64 pt-24 max-w-[500px] relative z-10">Scopri il materasso adatto a te.</h3>
          <img src={img} alt="image" className="absolute top-0" />
          <p className="text-white text-lg max-w-[200px] relative z-10">Chi dormirà sul nuovo materasso?</p>
          <div className="grid grid-cols-5 text-white uppercase py-8 relative z-10">
            <div className="text-center font-semibold text-sm hover:text-174860 cursor-pointer py-3" data-image="1">Io</div>
            <div className="text-center font-semibold text-sm hover:text-174860 cursor-pointer py-3" data-image="1">Io e il mio partner</div>
            <div className="text-center font-semibold text-sm hover:text-174860 cursor-pointer py-3" data-image="1">Io e il mio bambino</div>
            <div className="text-center font-semibold text-sm hover:text-174860 cursor-pointer py-3" data-image="1">Il mio ospite</div>
            <div className="text-center text-sm hover:text-174860 cursor-pointer border border-white py-3 max-w-[200px] hover:bg-2f88b1 hover:text-white">
              Inizia il test
              <svg className="inline ml-8 relative b-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Livello_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 36 36" enable-background="new 0 0 36 36" xmlSpace="preserve">
                <polygon fill="#fff" points="10.575,0.538 9.161,1.952 24.718,17.508 8.454,33.771 9.868,35.186 27.546,17.508 "/>
              </svg>
            </div>
          </div>

        </div>
    </div>
  )
}