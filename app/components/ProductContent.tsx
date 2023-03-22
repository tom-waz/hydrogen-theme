import { Link } from "@remix-run/react";
import { CollectionLinks } from '~/components/CollectionLinks';

import img from '../assets/product-description-side.jpg';
import imgProductMedium from '../assets/product-medium.jpg';
import imgCarouselItem from '../assets/carousel-product-item.jpg';
import imgTestimonial from '../assets/testimonial-chiellini.jpg';
import imgReviewPlaceholder from '../assets/review-placeholder.jpg';

export function ProductContent() {

  return (
    <div>
        <div className="grid grid-cols-12 max-w-5xl mx-auto my-16">
            <div className="text-center col-span-4">
                <h3 className="pb-10 text-174860 text-3xl font-semibold px-4">MagniStretch 9 Sport</h3>
                <img src={img} alt="image" className="inline" />
            </div>
            <div className="col-start-6 col-span-6 pt-8">
                <h5 className="text-174860 font-semibold pb-8 text-xl">Il materasso degli sportivi, favorisce l'allungamento della colonna vertebrale.</h5>
                <p className="text-8c8c8c">Il materasso tecnologico e innovativo che garantisce un eccezionale beneficio alla colonna vertebrale, grazie all'azione di distensione ed estensione esercitata durante il sonno, con un livello di comfort Medium Firm.</p>
            </div>
        </div>
        <div>
            <div className="grid grid-cols-4 text-center">
                <div className="text-174860 uppercase text-sm cursor-pointer py-4"><span className="py-8">Come funziona</span></div>
                <div className="text-174860 uppercase text-sm cursor-pointer py-4"><span className="py-8">Materiali</span></div>
                <div className="text-174860 uppercase text-sm cursor-pointer py-4"><span className="font-semibold border-b-2 border-B09987 py-4">Struttura</span></div>
                <div className="text-174860 uppercase text-sm cursor-pointer py-4"><span className="py-8">Caratteristiche</span></div>
            </div>
            <div className="bg-f7 grid grid-cols-12">
                <div className="col-span-7 p-12 pl-24 grid grid-cols-2">
                    <div className="p-10">
                        <div className="text-174860 text-2xl font-medium pb-2 relative">A <span className="w-40 h-px border-174860 absolute bottom-6 left-9 border"></span></div>
                        <h3 className="text-174860 text-3xl font-semibold pb-2">Rivestimento</h3>
                        <p className="text-174860 text-sm">Il tessuto termoregolatore Outlast®, di cui è composto, crea un perfetto microclima durante la notte; la Viscosa presente sempre nel rivestimento, lo rende ancora più soffice al tatto. Il materasso è sfoderabile e facilmente lavabile. La particolare fascia 3D perimetrale consente una maggiore traspirazione determinando una sensazione di benessere maggiore.</p>
                    </div>
                    <div className="p-10">
                        <div className="text-174860 text-2xl font-medium pb-2 relative">B <span className="w-40 h-px border-174860 absolute bottom-6 left-9 border"></span></div>
                        <h3 className="text-174860 text-3xl font-semibold pb-2">Imbottitura</h3>
                        <p className="text-174860 text-sm">L'imbottitura racchiude al suo interno due diversi materiali. Il primo è il Memoform, materiale anatomico che si adatta perfettamente alla silhouette del corpo offrendo una piacevole sensazione di leggerezza e rilassamento. Il secondo è la fibra Super Soft, morbida e traspirante, che regala una sensazione di benessere estremo avvolgendo tutto il corpo durante il sonno.</p>
                    </div>
                    <div className="p-10">
                        <div className="text-174860 text-2xl font-medium pb-2 relative">C <span className="w-40 h-px border-174860 absolute bottom-6 left-9 border"></span></div>
                        <h3 className="text-174860 text-3xl font-semibold pb-2">Livello di comfort</h3>
                        <p className="text-174860 text-sm">Le particolari lastre in Eliosoft (di 5 cm e 8,5 cm), entrambe con lavorazione Stretch, “stirano” dolcemente la schiena verso i lati opposti del materasso, riducendo la compressione vertebrale e donando un effetto distensivo per un comfort soffice, ma con il giusto sostegno.</p>
                    </div>
                    <div className="p-10">
                        <div className="text-174860 text-2xl font-medium pb-2 relative">D <span className="w-40 h-px border-174860 absolute bottom-6 left-9 border"></span></div>
                        <h3 className="text-174860 text-3xl font-semibold pb-2">Struttura prodotto</h3>
                        <p className="text-174860 text-sm">Lo strato base, composto da una lastra in Elioform alta 8,5 cm, è progettato per assicurare un sostegno ottimale della schiena.</p>
                    </div>
                </div>
                <div className="col-span-5 bg-[url('../assets/product-medium.jpg')] bg-cover bg-center">
                </div>
            </div>
        </div>

        <div className="my-12">
            <img src={imgCarouselItem} alt="image" />
        </div>

        <CollectionLinks />

        <div className="min-h-banner max-h-banner h-screen bg-[url('../assets/testimonial-chiellini.jpg')] bg-cover bg-center relative">
            <div className="w-2/5 bg-174860b3 absolute right-0 text-white h-full flex place-items-center">
                <div className="p-12">
                    <p className="text-3xl font-semibold pb-12 pr-8">“Dormire è gia un piacere, farlo allungando la schiena fa diventare una meraviglia anche il risveglio. Se lo provi non torni più indietro.”</p>
                    <div className="w-72 h-px border-white border"></div>
                    <p className="text-3xl font-semibold pt-12 pb-4 pr-8">I campioni scelgono MagniStretch.</p>
                    <p>La tecnologia MagniStretch favorisce l'allungamento della schiena durante la notte, ecco perché è scelto da campioni del calibro di Giorgio Chiellini e Stefano Tonut.</p>
                </div>
            </div>
        </div>

        <div className="bg-f7 my-12 py-24">
            <div className="container">
                <div className="flex justify-between">
                    <h3 className="font-semibold text-5xl text-174860">Recensioni</h3>
                    <div className="mr-16">
                        <div className="uppercase border px-9 py-3 text-xs font-semibold text-174860 border-174860 cursor-pointer hover:bg-2f88b1 hover:text-white hover:border-2f88b1 text-center mb-2">tutte le recensioni</div>
                        <div className="uppercase border px-9 py-3 text-xs font-semibold text-174860 border-174860 cursor-pointer hover:bg-2f88b1 hover:text-white hover:border-2f88b1 text-center">Lascia una recensione</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white text-xs p-8">
                        <img src={imgReviewPlaceholder} alt="image" />
                        <br />
                        <p className="pb-4"><strong>Nome e Cognome</strong><br /><span class="text-secondary">ha recensito</span> <strong>Magnistretch</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.</p>
                    </div>
                    <div className="bg-white text-xs p-8">
                        <img src={imgReviewPlaceholder} alt="image" />
                        <br />
                        <p className="pb-4"><strong>Nome e Cognome</strong><br /><span class="text-secondary">ha recensito</span> <strong>Magnistretch</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.</p>
                    </div>
                    <div className="bg-white text-xs p-8">
                        <img src={imgReviewPlaceholder} alt="image" />
                        <br />
                        <p className="pb-4"><strong>Nome e Cognome</strong><br /><span class="text-secondary">ha recensito</span> <strong>Magnistretch</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.</p>
                    </div>
                    <div className="bg-white text-xs p-8">
                        <img src={imgReviewPlaceholder} alt="image" />
                        <br />
                        <p className="pb-4"><strong>Nome e Cognome</strong><br /><span class="text-secondary">ha recensito</span> <strong>Magnistretch</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}