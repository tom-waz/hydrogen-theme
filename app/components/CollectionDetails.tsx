import { Collection, MoneyV2 } from "@shopify/hydrogen/storefront-api-types";
import { Image } from "@shopify/hydrogen";
import CollectionReviewImage from "../assets/category-review-placeholder.jpg";
import { Link } from "@remix-run/react";

export function CollectionDetails({
  collection
}: {
  collection: Collection
}) {
  const vtPrices: MoneyV2[] = [];
  collection.products.nodes.forEach((product) => {
    product.variants.nodes.forEach((variant) => {
      vtPrices.push(variant.price);
    })
  })
  const minVtPrice = vtPrices.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount))[0];

  return (
    <div className="flex flex-row flex-wrap justify-start">
      <div className="w-full md:w-1/2 lg:w-4/12 mt-6 mb-12 ">
        <div className="collection-image w-full aspect-[10/7] relative">
          { collection.image && 
          <Image 
            className="w-full h-full object-cover"
            data={collection.image}
            sizes="700"
            widths={[700]}
          /> }
          <div className="new-badge absolute left-0 top-5 bg-white text-8c8c8c py-2 px-8 text-[10px] md:text-xs">NUOVO</div>
        </div>
        <div className="collection-data px-2 py-6 xl:p-6">
          <div className="collection-title text-cusSubheading font-semibold xl:text-28 text-dark-blue">{ collection.title }</div>
          <div className="collection-review-image">
            <img src={CollectionReviewImage} alt="Collection review image" />
          </div>
          <div className="collection-attributes border-t border-border pt-2 mt-2 mb-2 grid grid-cols-2">
            <div className="attr flex flex-row text-dark-blue text-xxs pl-4 relative py-2px pr-1 before:rounded-full before:absolute before:-translate-x-4 before:w-2 before:top-1/2 before:-translate-y-1/2 before:h-2 before:bg-5799B9">MEDIUM-FIRM</div>
            <div className="attr flex flex-row text-dark-blue text-xxs pl-4 relative py-2px pr-1 before:rounded-full before:absolute before:-translate-x-4 before:w-2 before:top-1/2 before:-translate-y-1/2 before:h-2 before:bg-174860">FIRM</div>
            <div className="attr flex flex-row text-dark-blue text-xxs pl-4 relative py-2px pr-1 before:rounded-full before:absolute before:-translate-x-4 before:w-2 before:top-1/2 before:-translate-y-1/2 before:h-2 before:bg-D09467">MEDIUM-SOFT</div>
            <div className="attr flex flex-row text-dark-blue text-xxs pl-4 relative py-2px pr-1 before:rounded-full before:absolute before:-translate-x-4 before:w-2 before:top-1/2 before:-translate-y-1/2 before:h-2 before:bg-B09987">SOFT</div>
          </div>
          <div className="collection-description border-t border-border pt-2 mt-2 mb-2 text-8c8c8c text-xs">
            {collection.description}
          </div>
          <div className="collection-price border-t border-border pt-4 mb-2 mt-2 text-dark-blue text-xs font-semibold">
            A partire da { minVtPrice.amount }{ minVtPrice.currencyCode }
          </div>
          <div className="collection-actions flex flex-row justify-end items-center mt-4">
            <Link to={`/collection/${collection.handle}`} className="text-dark-blue text-xs uppercase py-2 px-8 border border-dark-blue font-semibold">CONFIGURA</Link>
          </div>
        </div>
      </div>
    </div>
  )
}